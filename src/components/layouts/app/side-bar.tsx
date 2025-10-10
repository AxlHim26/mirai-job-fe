import { LocalIcon } from "@/assets/icons/local-icon";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui";
import { Link } from "react-router-dom";
import { ROLES } from "@/consts";
import { NavigateSideBar } from "@/components/ui/navigate/navigate-sb";
import {
  SETTINGSIDEBARICON,
  SETTINGSIDEBARTITLE,
  RECRUITERSIDEBARICON,
  RECRUITERSIDEBARTITLE,
  CANDIDATESIDEBARICON,
  CANDIDATESIDEBARTITLE,
  RECRUITERSETTINGSIDEBARICON,
  RECRUITERSETTINGSIDEBARTITLE,
} from "@/consts";

export const AppSideBar = () => {
  const { user, logout } = useAuth();
  const role = user?.role?.name || "undefined";

  return (
    <aside className="w-64 min-h-screen flex flex-col bg-[#F8F8FD] ">
      <figure className="flex items-center gap-2 px-4 pt-6">
        <Link to={"dashboard"}>
          <LocalIcon
            iconName="Logo"
            width={32}
            height={32}
          />
        </Link>
        <span className="text-2xl font-bold leading-[36px]">JobHuntly</span>
      </figure>
      <div className="py-6">
        {ROLES[role as keyof typeof ROLES] === ROLES.ROLE_RECRUITER ? (
          <NavigateSideBar
            titles={RECRUITERSIDEBARTITLE}
            icons={RECRUITERSIDEBARICON}
          />
        ) : ROLES[role as keyof typeof ROLES] === ROLES.ROLE_CANDIDATE ? (
          <NavigateSideBar
            titles={CANDIDATESIDEBARTITLE}
            icons={CANDIDATESIDEBARICON}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="py-6 border-t border-[#E6E9F4]">
        <NavigateSideBar
          titles={
            ROLES[role as keyof typeof ROLES] === ROLES.ROLE_RECRUITER
              ? RECRUITERSETTINGSIDEBARTITLE
              : SETTINGSIDEBARTITLE
          }
          icons={
            ROLES[role as keyof typeof ROLES] === ROLES.ROLE_RECRUITER
              ? RECRUITERSETTINGSIDEBARICON
              : SETTINGSIDEBARICON
          }
        />
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <img
            src={
              user?.avatar ||
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop"
            }
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {user?.fullName || "User"}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {user?.email || "user@email.com"}
            </p>
          </div>
          <Button
            variant="outlined"
            size="sm"
            onClick={logout}
          >
            Log out
          </Button>
        </div>
      </div>
    </aside>
  );
};
