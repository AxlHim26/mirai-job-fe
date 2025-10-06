import React from "react";
import { LocalImage } from "@/assets/images/local-image";
import { LocalIcon } from "@/assets/icons/local-icon";
import { ROLES } from "@/consts";
import { useConversationStore } from "@/stores/conversation-store";

type MessageHeaderProps = {
  role: ROLES;
  position?: string;
  company?: string;
  onPinClick?: () => void;
  onStarClick?: () => void;
  onMoreInfoClick?: () => void;
};

export const MessageHeader: React.FC<MessageHeaderProps> = ({
  role,
  position,
  company,
  onPinClick,
  onStarClick,
  onMoreInfoClick,
}) => {
  const partner = useConversationStore((state) => state.selectedConversation());
  return (
    <div className="flex items-center justify-between px-8 pb-6 border-b border-[#D6DDEB]">
      <div className="flex items-center gap-3">
        {partner?.partnerAvatar ? (
          <img
            src={partner?.partnerAvatar}
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <LocalImage
            imageName="CompanyLogo"
            height={84}
            width={56}
            className="rounded-full"
          />
        )}
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-[#25324B]">
            {partner?.partnerName}
          </span>
          {position && company && (
            <span className="text-[16px] font-normal text-[#515B6F]">
              {position + " at " + company}
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-6">
        <LocalIcon
          iconName="PinIcon"
          height={24}
          width={24}
          onClick={onPinClick}
          className="cursor-pointer hidden md:block"
        />
        <LocalIcon
          iconName="StarIcon"
          height={24}
          width={24}
          onClick={onStarClick}
          className="cursor-pointer hidden md:block"
        />
        <LocalIcon
          iconName="MoreVertical"
          height={24}
          width={24}
          onClick={onMoreInfoClick}
          className="cursor-pointer"
        />
        {role === ROLES.ROLE_RECRUITER && (
          <span className="text-[#4640DE] text[16px] font-bold hidden md:block">
            View Profile
          </span>
        )}
      </div>
    </div>
  );
};
