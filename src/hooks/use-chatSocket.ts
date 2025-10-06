import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import { SocketMessage } from "@/types/chat";

const SOCKET_URL = "http://localhost:8080/ws";

export const useChatSocket = (conversationId: number, userEmail: string) => {
  const clientRef = useRef<Client | null>(null);
  const [messagesList, setMessages] = useState<SocketMessage[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socket = new SockJS(SOCKET_URL);
    const stompClient = new Client({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      webSocketFactory: () => socket as any,
      reconnectDelay: 0,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      debug: (str) => console.log(str),
      onConnect: () => {
        setIsConnected(true);
        stompClient.subscribe(
          `/topic/conversation/${conversationId}`,
          (msg) => {
            const message: SocketMessage = JSON.parse(msg.body);
            setMessages((prev) => [...prev, message]);
          }
        );
      },
      onDisconnect: () => {
        setIsConnected(false);
      },
    });

    stompClient.activate();
    clientRef.current = stompClient;

    return () => {
      stompClient.deactivate();
      setIsConnected(false);
    };
  }, [conversationId, userEmail]);

  const sendMessage = async (content?: string, fileUrl?: string) => {
    if (!clientRef.current?.connected) {
      console.warn("Socket not connected");
      return;
    }

    clientRef.current.publish({
      destination: `/app/chat.sendMessage/${conversationId}`,
      body: JSON.stringify({ senderEmail: userEmail, content, fileUrl }),
    });
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return {
    messagesList,
    sendMessage,
    clearMessages,
    isConnected,
  };
};
