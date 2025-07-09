import React from "react";
import { CompanyTeamCard } from "@/features/company-profile/components/cards/company-team-card";
import { CompanyTeamProps } from "@/types/company-profile/types";

export const CompanyTeam: React.FC<CompanyTeamProps> = ({
  employees,
  members,
}) => {
  return (
    <div className="flex flex-col items-start gap-[11px] px-[124px] py-[72px] w-[1440px]">
      <div className="flex justify-between w-full items-center">
        <h2 className="text-[32px] font-semibold text-[#25324B]">Team</h2>
        <a
          href="#"
          className="text-sm font-medium text-[#4640DE]"
        >
          See all ({employees})
        </a>
      </div>

      <div className="flex flex-row gap-6 w-full">
        {members.map((member, index) => (
          <CompanyTeamCard
            key={index}
            avatar={member.avatar}
            name={member.name}
            position={member.position}
          />
        ))}
      </div>
    </div>
  );
};
