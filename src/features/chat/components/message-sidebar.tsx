import React from "react";
import { LocalIcon } from "@/assets/icons/local-icon";
import { MessageItem } from "./message-item";
import { Conversation } from "@/types";

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
    <aside className="flex flex-col w-80 flex-shrink-0 px-8">
      <div className="p-4 flex gap-2 justify-center items-center border border-[#D6DDEB] mb-7 w-full max-h-[50px]">
        <LocalIcon
          iconName="search"
          height={24}
          width={24}
        />
        <input
          type="text"
          placeholder="Search messages"
          className="w-full px-3 py-2 focus:outline-none text-sm"
        />
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar">
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
