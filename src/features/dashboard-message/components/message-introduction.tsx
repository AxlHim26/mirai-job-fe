import { LocalImage } from "@/assets/images/local-image";
import React from "react";

type MessageIntroProps = {
  avatarUrl?: string;
  name: string;
  position: string;
  company: string;
};

export const MessageIntro: React.FC<MessageIntroProps> = ({
  avatarUrl,
  name,
  position,
  company,
}) => {
  return (
    <div className="flex flex-col items-center text-center py-6 px-4">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          className="w-8 h-8 rounded-full object-cover"
        />
      ) : (
        <LocalImage
          imageName="CompanyLogo"
          height={88}
          width={88}
          className="rounded-full"
        />
      )}
      <div className="text-2xl font-semibold text-[#25324B]">{name}</div>
      <div className="text-[16px] font-normal text-[#515B6F]">
        {position} at {company}
      </div>
      <div className="text-[16px] flex gap-2 mt-2">
        <span className="font-normal text-[#7C8493]">
          This is the very beginning of your direct message with
        </span>
        <span className="font-medium text-[#25324B]">{name}</span>
      </div>
    </div>
  );
};
