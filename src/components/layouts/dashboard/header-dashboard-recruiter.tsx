import { LocalIcon } from "@/assets/icons/local-icon";
import { LocalImage } from "@/assets/images/local-image";
import React from "react";
import { SideBar } from "./side-bar";
import { HeaderDashboardProps } from "./header-dashboard-candidate";
import { useDisclosure } from "@/hooks";

export const HeaderDashboardRecruiter: React.FC<
  HeaderDashboardProps
> = ({ showNotification = true, className = "", role }) => {
    const { isOpen, open, close } = useDisclosure();
  return (
    <div
      className={`${className} p-8 flex items-center justify-between border-b border-[#D6DDEB]`}
    >
      <LocalIcon
        iconName="menu"
        height={28}
        width={28}
        className="cursor-pointer block md:hidden"
        onClick={() => open()}
      />
      {isOpen && (
        <SideBar
          role={role}
          className="fixed w-[300px] items-center left-0 top-0 h-screen shadow-md z-50"
          onClose={() => close()}
        />
      )}
      <div className="flex gap-3">
        <LocalImage
          imageName="companyLogo"
          height={40}
          width={40}
        />
        <div>
          <h1 className="font-normal text-[16px] text-[#515B6F]">Company</h1>
          <select className="text-[#25324B] font-bold text-[16px] focus:outline-none focus:ring-0">
            <option value="relevance">Nomad</option>
            <option value="date">Nomad2</option>
            <option value="salary">Nomad3</option>
          </select>
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <div className="relative w-5 h-5 cursor-pointer">
          <LocalIcon
            iconName="NotificationIcon"
            height={20}
            width={20}
          />
          {showNotification && (
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          )}
        </div>
        <button className="bg-[#4640DE] text-white cursor-pointer font-semibold px-6 py-2 rounded md:flex items-center gap-2 hidden">
          <span className="text-lg">+</span>
          <span>Post a job</span>
        </button>
      </div>
    </div>
  );
};
