import { LocalIcon } from "@/assets/icons/local-icon";
import React from "react";

type MessageDateSeparatorProps = {
  dateLabel: string;
};

export const MessageDateSeparator: React.FC<MessageDateSeparatorProps> = ({
  dateLabel,
}) => {
  return (
    <div className="flex items-center justify-center my-4">
      <div className="flex-grow border-t text-[#D6DDEB]"></div>
      <div className="flex items-center gap-2 shadow-sm px-3 py-1 mx-2 rounded text-[#25324B] text-[16px] font-medium">
        <LocalIcon
          iconName="moreFilters"
          height={24}
          width={24}
        />
        {dateLabel}
      </div>
      <div className="flex-grow border-t text-[#D6DDEB]"></div>
    </div>
  );
};
