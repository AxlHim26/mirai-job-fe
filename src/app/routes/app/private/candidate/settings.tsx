import { SectionTitle } from "@/components/sections/settings";
import { TabNav } from "@/components/sections/settings/candidate/tab-nav";
import { Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <TabNav />
      <div>
        <SectionTitle title="Basic Information" />
        <p className="text-sm text-gray-500 mt-1 mb-4 border-b pb-6 border-gray-300">
          This is your personal information that you can update anytime.
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default Settings;
