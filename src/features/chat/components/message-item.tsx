import { LocalImage } from "@/assets/images/local-image";
import { formatDate } from "@/utils";
import React from "react";

type MessageItemProps = {
  name: string;
  message: string;
  time: number;
  avatar?: string;
  isActive?: boolean;
  onClick?: () => void;
};

export const MessageItem: React.FC<MessageItemProps> = ({
  name,
  message,
  time,
  avatar,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center gap-3 p-3.5 border-b border-[#D6DDEB] hover:bg-gray-100 cursor-pointer ${
        isActive ? "bg-gray-100 border-none" : ""
      }`}
      onClick={onClick}
    >
      {avatar ? (
        <img
          src={avatar}
          className="w-8 h-8 rounded-full object-cover"
        />
      ) : (
        <LocalImage
          imageName="CompanyLogo"
          height={72}
          width={48}
          className="rounded-full"
        />
      )}
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-[16px] text-gray-900">
            {name || "yiuen"}
          </div>
          <div className="text-[16px] text-[#7C8493]">{formatDate(time)}</div>
        </div>
        <div className="text-[16px] font-normal text-[#515B6F] truncate max-w-[200px]">
          {message}
        </div>
      </div>
    </div>
  );
};
