import React from "react";
import { IconName, LocalIcon } from "@/assets/icons/local-icon";
import { NotificationBadge } from "@/components/ui/notification/notification-badge";

export type SidebarMenuItemProps = {
  label: string;
  icon: IconName;
  href: string;
  notificationCount?: number;
};

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  label,
  icon,
  href,
  notificationCount = 0,
}) => {
  return (
    <li className="flex items-center justify-between hover:bg-[#E9EBFD] px-[16px] py-3 rounded">
      <div className="flex items-center gap-[16px]">
        <LocalIcon iconName={icon} height={24} width={24} />
        <a
          href={href}
          className="text-[#7C8493] text-[16px] font-medium hover:text-indigo-600"
        >
          {label}
        </a>
      </div>
      {notificationCount > 0 && (
        <NotificationBadge number={notificationCount} size={24} />
      )}
    </li>
  );
};
