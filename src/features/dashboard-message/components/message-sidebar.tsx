import React from "react";
import { LocalIcon } from "@/assets/icons/local-icon";
import { MessageItem } from "./message-item";
import { Conversation } from "@/stores/conversation-store";

interface MessageSidebarProps {
  conversations: Conversation[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}

export const MessageSidebar: React.FC<MessageSidebarProps> = ({
  conversations,
  selectedId,
  onSelect,
}) => {
  return (
    <aside className="flex flex-col p-8">
      <div className="p-4 flex gap-2 justify-center items-center border border-[#D6DDEB] mb-7 w-full md:max-w-[470px] max-h-[50px]">
        <LocalIcon iconName="search" height={24} width={24} />
        <input
          type="text"
          placeholder="Search messages"
          className="w-full px-3 py-2 focus:outline-none text-sm"
        />
      </div>

      <div className="flex-1 overflow-y-auto max-h-[680px] hide-scrollbar">
        {conversations.map((item) => {
          return (
            <MessageItem
              key={item.id}
              name={item.partnerName || "Unknown"}
              avatar={item.partnerAvatar}
              message={item?.lastMsg || ""}
              time={item?.lastMsgTime || 0}
              isActive={item.id === selectedId}
              onClick={() => {
                onSelect(item.id);
              }}
            />
          );
        })}
      </div>
    </aside>
  );
};
