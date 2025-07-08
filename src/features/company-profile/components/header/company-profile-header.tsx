import React from "react";
import { LocalIcon, IconName } from "@/assets/icons/local-icon";
import { CompanyProfileCardPros } from "@/features/company-profile/components/types";
import { CompanyInfoItemPros } from "@/features/company-profile/components/types";

const CompanyInfoItem: React.FC<CompanyInfoItemPros> = ({
  icon,
  title,
  value,
}) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <LocalIcon iconName={icon} />
      <div className="flex flex-col items-start">
        <div className="text-[16px] leading-[160%] font-normal text-[#515B6F] font-epilogue">
          {title}
        </div>
        <div className="text-[16px] leading-[160%] font-semibold text-[#25324B] font-epilogue">
          {value}
        </div>
      </div>
    </div>
  );
};

export const CompanyProfileHeader: React.FC<CompanyProfileCardPros> = ({
  logoCompany,
  nameCompany,
  jobs,
  linkCompany,
  founded,
  employees,
  location,
  industry,
}) => {
  const infoItems = [
    { icon: "fireIcon", title: "Founded", value: founded },
    { icon: "memberIcon", title: "Employees", value: `${employees} +` },
    { icon: "locationIcon", title: "Location", value: `${location} countries` },
    { icon: "industryIcon", title: "Industry", value: industry },
  ];
  return (
    <div className="px-[124px] py-10 flex flex-row gap-6 items-center">
      <div className="w-[189px] h-[189px]">
        <LocalIcon
          iconName={logoCompany}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <div className="flex flex-row items-start gap-3">
            <div className="font-clash text-[48px] font-semibold leading-[110%]">
              {nameCompany}
            </div>
            <div className="flex items-center justify-center gap-2 px-3 py-1 border border-brands-primary text-brands-primary rounded-full">
              {jobs} Jobs
            </div>
          </div>

          <a
            href={linkCompany}
            className="text-brands-primary underline font-epilogue text-base font-semibold leading-[160%]"
          >
            {linkCompany}
          </a>
        </div>

        <div className="flex items-start gap-10">
          {infoItems.map((item) => (
            <CompanyInfoItem
              key={item.title}
              icon={item.icon as IconName}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
