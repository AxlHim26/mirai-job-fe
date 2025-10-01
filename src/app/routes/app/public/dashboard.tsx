import { DashboardHeader } from "@/features/dashboard/components/header";
import { JobStatistics } from "@/features/dashboard/components/statistics";
import { Stats } from "@/features/dashboard/components/stats";
import { Updates } from "@/features/dashboard/components/updates";

const DashboardRoute = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader />
        <Stats />
        <JobStatistics />
        <Updates />
      </div>
    </div>
  );
};

export default DashboardRoute;
