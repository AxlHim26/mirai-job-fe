import { LocalIcon } from "@/assets/icons/local-icon";
import React from "react";
import { Link } from "react-router-dom";
import { SideBar } from "./side-bar";
import { ROLES, useDisclosure } from "@/hooks";

export type HeaderDashboardProps = {
  title?: string;
  backTo?: string;
  showNotification?: boolean;
  className?: string;
  role: ROLES;
};

export const HeaderDashboardCandidate: React.FC<HeaderDashboardProps> = ({
  title,
  backTo = "/",
  showNotification = true,
  className = "",
  role,
}) => {
      const { isOpen, open, close } = useDisclosure();
  return (
    <div
      className={`p-8 flex items-center justify-between border-b border-[#D6DDEB] ${className}`}
    >
      <div className="flex gap-3 items-center">
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
        <h1 className="text-[#25324B] font-semibold text-[32px]">{title}</h1>
      </div>

      <div className="flex gap-8 items-center">
        <button className="px-6 py-3 outline outline-[#D6DDEB] hidden md:block cursor-pointer">
          <Link to={backTo}>Back to homepage</Link>
        </button>
        <LocalIcon
            iconName="EqualIcon"
            height={26}
            width={26}
            className="block md:hidden cursor-pointer"
          />
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
      </div>
    </div>
  );
};
