import React from "react";
import { SideBar } from "./side-bar";
import { HeaderDashboardCandidate } from "./header-dashboard-candidate";
import { HeaderDashboardRecruiter } from "./header-dashboard-recruiter";
import { ROLES } from "@/hooks";

type DashboardLayoutProps = {
  title: string;
  role: ROLES;
  children: React.ReactNode;
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  title,
  role,
  children,
}) => {
  return (
    <main className="flex flex-row">
      <div className="hidden md:flex md:w-1/5 md:flex-col">
        <SideBar role={role} />
      </div>
      <div className="md:w-4/5 w-full">
        {role === ROLES.ROLE_CANDIDATE ? (
          <HeaderDashboardCandidate
            role={role}
            title={title}
          />
        ) : (
          <HeaderDashboardRecruiter role={role} />
        )}
        <div>{children}</div>
      </div>
    </main>
  );
};
