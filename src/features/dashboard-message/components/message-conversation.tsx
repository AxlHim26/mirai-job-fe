import React, { useRef, useEffect, useState } from "react";
import { MessageBubble } from "./message-bubble";
import { MessageInput } from "./message-input";
import { MessageHeader } from "./message-header";
import { MessageIntro } from "./message-introduction";
import { MessageDateSeparator } from "./message-date-separator";
import { formatDate } from "@/utils";
import { processGroupedMessages } from "@/utils/grouped-messages";
import { ROLES } from "@/lib/authorization";
import { Conversation, Message } from "../api/dashboard-message.mock";
import { uploadToCloudinary } from "@/utils/upload";

type MessageConversationProps = {
  role: ROLES;
  conversation: Conversation | null;
  onSendMessage: (conversationId: number, message: Message) => void;
};

export const MessageConversation: React.FC<MessageConversationProps> = ({
  role,
  conversation,
  onSendMessage,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>(
    conversation?.messages || []
  );
  console.log(messages);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setMessages(conversation?.messages || []);
  }, [conversation]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string, file: File | null) => {
    if (!conversation) return;
    if (!text.trim() && !file) return;

    try {
      let fileUrl: string | undefined;

      if (file) {
        const { url } = await uploadToCloudinary(file);
        fileUrl = url;
      }

      const newMessage: Message = {
        id: Date.now(),
        time: formatDate(new Date().getTime()),
        isSender: true,
        senderName: "You",
        ...(text.trim() && { content: text.trim() }),
        ...(fileUrl && { file: fileUrl }),
      };

      setMessages((prev) => [...prev, newMessage]);
      onSendMessage(conversation.id, newMessage);
    } catch (error) {
      console.error("Upload file thất bại:", error);
    }
  };

  if (!conversation) {
    return (
      <div className="p-6 text-gray-500 items-center">
        Chọn một cuộc trò chuyện để bắt đầu.
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[850px] border-r border-[#D6DDEB]">
      <MessageHeader
        name={conversation.name}
        position={conversation.position}
        company={conversation.company}
        role={role}
      />

      <div className="flex-1 overflow-y-auto max-h-[680px] hide-scrollbar">
        <div className="p-4 space-y-1">
          <MessageIntro
            name={conversation.name}
            position={conversation.position}
            company={conversation.company || "Nomad"}
          />

          <MessageDateSeparator dateLabel="Today" />

          {processGroupedMessages(messages).map((message) => (
            <MessageBubble
              key={message.id}
              {...message}
              showHeader={message.showHeader}
              isLastInGroup={message.isLastInGroup}
            />
          ))}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="border-t border-[#D6DDEB] p-6">
        <MessageInput onSend={handleSendMessage} />
      </div>
    </div>
  );
};
