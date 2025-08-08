import React, { useRef, useEffect } from "react";
import { MessageBubble } from "./message-bubble";
import { MessageInput } from "./message-input";
import { MessageHeader } from "./message-header";
import { MessageIntro } from "./message-introduction";
import { MessageDateSeparator } from "./message-date-separator";
import { uploadToCloudinary } from "@/utils/upload";
import { ROLES } from "@/hooks";
import { useMessageStore } from "@/stores/message-store";
import { useAuthStore } from "@/stores";
import { useChatSocket } from "@/hooks/use-chatSocket";
import { processGroupedMessages } from "@/utils/grouped-messages";

type MessageConversationProps = {
  role: ROLES;
  conversationId: number;
};

export const MessageConversation: React.FC<MessageConversationProps> = ({
  role,
  conversationId,
}) => {
  const user = useAuthStore((state) => state.user);
  const { sendMessage, messagesList } = useChatSocket(
    conversationId,
    user?.email ?? ""
  );

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const prevScrollHeightRef = useRef<number>(0);

  const {
    messages,
    fetchMessages,
    addMessages,
    hasMore,
  } = useMessageStore();

  const conversationMessages = React.useMemo(
    () => messages[conversationId] || [],
    [messages, conversationId]
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversationMessages]);

  useEffect(() => {
    if (!conversationId) return;
    fetchMessages(conversationId);
  }, [conversationId, fetchMessages]);

  useEffect(() => {
    if (messagesList.length > 0) {
      addMessages(conversationId, messagesList);
    }
  }, [messagesList, conversationId, addMessages]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    if (container.scrollTop <= 0 && hasMore[conversationId]) {
      prevScrollHeightRef.current = container.scrollHeight;
      fetchMessages(conversationId, true).then(() => {
        requestAnimationFrame(() => {
          container.scrollTop =
            container.scrollHeight - prevScrollHeightRef.current;
        });
      });
    }
  };

  const handleSendMessage = async (text: string, file: File | null) => {
    if (!conversationId || (!text.trim() && !file)) return;

    try {
      let fileUrl: string | undefined;
      if (file) {
        const { url } = await uploadToCloudinary(file);
        fileUrl = url;
      }
      sendMessage(text.trim(), fileUrl);
    } catch (error) {
      console.error("Upload file thất bại:", error);
    }
  };

  if (!conversationMessages.length) {
    return (
      <div className="p-6 text-gray-500 items-center">
        Chọn một cuộc trò chuyện để bắt đầu.
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[850px] border-r border-[#D6DDEB]">
      <MessageHeader position={"position"} company={"company"} role={role} />

      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto max-h-[680px] hide-scrollbar"
      >
        <div className="p-4 space-y-1">
          <MessageIntro position={"position"} company={"company"} />

          <MessageDateSeparator dateLabel="Today" />

          {processGroupedMessages(conversationMessages, user?.email ?? "").map(
            (message) => (
              <MessageBubble key={message.id} {...message} />
            )
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="border-t border-[#D6DDEB] p-6">
        <MessageInput onSend={handleSendMessage} />
      </div>
    </div>
  );
};
