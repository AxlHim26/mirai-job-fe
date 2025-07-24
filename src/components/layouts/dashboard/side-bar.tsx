import { LocalIcon } from "@/assets/icons/local-icon";
import { LocalImage } from "@/assets/images/local-image";
import { SidebarMenuItem } from "@/components/ui/item/sidebar-menuI-item";
import type { SidebarMenuItemProps } from "@/components/ui/item/sidebar-menuI-item";
import { ROLES } from "@/lib/authorization";

const candidateMenus: SidebarMenuItemProps[] = [
  { label: "Dashboard", icon: "HomeIcon", href: "/recruiter/dashboard" },
  {
    label: "Messages",
    icon: "MessageIcon",
    href: "/recruiter/messages",
    notificationCount: 3,
  },
  { label: "My Applications", icon: "HomeIcon", href: "/recruiter/messages" },
  { label: "Find Jobs", icon: "HomeIcon", href: "/recruiter/messages" },
  { label: "Browse Companies", icon: "HomeIcon", href: "/recruiter/messages" },
  { label: "My Public Profile", icon: "HomeIcon", href: "/recruiter/messages" },
];

const recruiterMenus: SidebarMenuItemProps[] = [
  { label: "Dashboard", icon: "HomeIcon", href: "/recruiter/dashboard" },
  {
    label: "Messages",
    icon: "MessageIcon",
    href: "/recruiter/messages",
    notificationCount: 3,
  },
  { label: "Company Profile", icon: "HomeIcon", href: "/recruiter/messages" },
  { label: "All Applicants", icon: "MessageIcon", href: "/recruiter/messages" },
  { label: "Job Listing", icon: "MessageIcon", href: "/recruiter/messages" },
  { label: "My Schedule", icon: "HomeIcon", href: "/recruiter/messages" },
];

type SideBarProps = {
  className?: string;
  role: ROLES;
  onClose?: () => void;
};

export const SideBar: React.FC<SideBarProps> = ({
  className = "",
  role,
  onClose,
}) => {
  return (
    <aside
      className={`pt-8 pl-8 bg-[#F8F8FD] h-[960px] flex flex-col justify-between ${className}`}
    >
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#202430] cursor-pointer"
        >
          <LocalIcon
            iconName="CloseIcon"
            width={20}
            height={20}
          />
        </button>
      )}

      <div>
        <div className="flex items-center space-x-2">
          <LocalIcon
            iconName="Logo"
            height={25}
            width={25}
          />
          <h2 className="text-2xl text-[#202430] font-bold">JobHuntly</h2>
        </div>
        {role === ROLES.ROLE_CANDIDATE ? (
          <ul className="mt-8">
            {candidateMenus.map((item) => (
              <SidebarMenuItem
                key={item.label}
                {...item}
              />
            ))}
          </ul>
        ) : (
          <ul className="mt-8">
            {recruiterMenus.map((item) => (
              <SidebarMenuItem
                key={item.label}
                {...item}
              />
            ))}
          </ul>
        )}

        <hr className="text-[#D6DDEB] m-3" />

        <div>
          <h1 className="text-[#202430] font-semibold text-[14px] px-[16px]">
            SETTINGS
          </h1>
          <ul className="mt-4">
            <SidebarMenuItem
              label="Settings"
              icon="HomeIcon"
              href="#"
            />
            <SidebarMenuItem
              label="Help Center"
              icon="HomeIcon"
              href="#"
            />
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 pb-4">
          <LocalImage
            imageName="CompanyLogo"
            height={48}
            width={48}
            className="rounded-full"
          />
          <div>
            <h1 className="text-[#202430] text-lg font-semibold">Jake Gyll</h1>
            <h2 className="text-[#202430] text-[14px] font-normal">
              jakegyll@email.com
            </h2>
          </div>
        </div>
        {role === ROLES.ROLE_RECRUITER && (
          <button className="bg-[#4640DE] w-full text-white cursor-pointer justify-center font-semibold px-6 py-2 rounded md:hidden items-center gap-2 flex">
            <span className="text-lg">+</span>
            <span>Post a job</span>
          </button>
        )}
      </div>
    </aside>
  );
};
