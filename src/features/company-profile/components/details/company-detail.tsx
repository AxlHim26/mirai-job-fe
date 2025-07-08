import React from "react";
import { CompanyCard } from "./company-card";
import { CompanyDetailProps } from "@/features/company-profile/components/types";

export const CompanyDetail: React.FC<CompanyDetailProps> = ({
  mainSections,
  sidebarSections,
}) => {
  return (
    <div className="inline-flex px-[124px] py-[72px] items-start gap-[64px]">
      <div className="flex flex-col items-start gap-[40px] w-[752px]">
        {mainSections.map((item, index) => (
          <CompanyCard
            key={index}
            {...item}
          />
        ))}
      </div>

      <div className="flex flex-col items-start gap-[40px]">
        {sidebarSections.map((item, index) => (
          <CompanyCard
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};
