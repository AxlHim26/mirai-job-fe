import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import { MessageProps } from "@/stores/message-store";


const SOCKET_URL = "http://localhost:8080/ws";

export const useChatSocket = (conversationId: number, userEmail: string) => {
  const clientRef = useRef<Client | null>(null);
  const [messagesList, setMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    const socket = new SockJS(SOCKET_URL);
    const stompClient = new Client({
      webSocketFactory: () => socket as any,
      reconnectDelay: 0,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      debug: (str) => console.log(str),
      onConnect: () => {
        stompClient.subscribe(
          `/topic/conversation/${conversationId}`,
          (msg) => {
            const message = JSON.parse(msg.body);
            setMessages((prev) => [...prev, message]);
          }
        );
      },
    });

    stompClient.activate();
    clientRef.current = stompClient;

    return () => {
      stompClient.deactivate();
    };
  }, [conversationId, userEmail]);

  const sendMessage = async (content?: string, fileUrl?: string) => {
    if (!clientRef.current?.connected) {
      return;
    }

    clientRef.current.publish({
      destination: `/app/chat.sendMessage/${conversationId}`,
      body: JSON.stringify({ senderEmail: userEmail, content, fileUrl }),
    });
  };

  return { messagesList, sendMessage };
};
