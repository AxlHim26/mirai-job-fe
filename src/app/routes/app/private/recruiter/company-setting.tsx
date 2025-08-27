import { SettingTabNav } from "@/components/sections/settings/recruiter";
import { Outlet } from "react-router-dom";

export const CompanySettingsPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 pt-6 pb-2">Settings</h1>
      <SettingTabNav />
      <Outlet />
    </div>
  );
};
