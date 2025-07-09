import React from "react";
import { LocalIcon } from "@/assets/icons/local-icon";
import { LocalImage } from "@/assets/images/local-image";
import { CompanyTeamCardProps } from "@/types/company-profile/types";

export const CompanyTeamCard: React.FC<CompanyTeamCardProps> = ({
  avatar,
  name,
  position,
}) => {
  return (
    <div className="flex flex-col items-center p-6 gap-4 flex-[1_0_0]  border border-[#D6DDEB] rounded-[4px]">
      <div className="w-[80px] h-[80px] rounded-full overflow-hidden bg-gray-200">
        <LocalImage
          imageName={avatar}
          height={80}
          width={80}
        />
      </div>
      <div className="text-[#25324B] font-semibold text-lg">{name}</div>
      <div className="text-[#515B6F] text-sm">{position}</div>

      <div className="flex gap-3 mt-2">
        <LocalIcon
          iconName="insIcon"
          className="w-6 h-6 shrink-0"
        />
        <LocalIcon
          iconName="linkedinNonIcon"
          className="w-6 h-6 shrink-0"
        />
      </div>
    </div>
  );
};
