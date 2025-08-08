import { LocalImage } from "@/assets/images/local-image";
import { useConversationStore } from "@/stores/conversation-store";
import React from "react";

type MessageIntroProps = {
  position: string;
  company: string;
};

export const MessageIntro: React.FC<MessageIntroProps> = ({
  position,
  company,
}) => {
  const partner = useConversationStore(state => state.selectedConversation());
  return (
    <div className="flex flex-col items-center text-center py-6 px-4">
      {partner?.partnerAvatar ? (
        <img
          src={partner?.partnerAvatar}
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
      <div className="text-2xl font-semibold text-[#25324B]">{partner?.partnerName}</div>
      <div className="text-[16px] font-normal text-[#515B6F]">
        {position} at {company}
      </div>
      <div className="text-[16px] flex gap-2 mt-2">
        <span className="font-normal text-[#7C8493]">
          This is the very beginning of your direct message with
        </span>
        <span className="font-medium text-[#25324B]">{partner?.partnerName}</span>
      </div>
    </div>
  );
};
