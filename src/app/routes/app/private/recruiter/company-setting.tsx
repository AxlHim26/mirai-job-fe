import { SettingTabNav } from "@/components/sections/settings/recruiter";
import { Outlet } from "react-router-dom";

export const CompanySettingsPage = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <SettingTabNav />
      <Outlet />
    </div>
  );
};
