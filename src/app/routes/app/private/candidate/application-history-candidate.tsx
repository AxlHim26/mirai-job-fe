import { Pagination } from "@/components/ui/pagination/pagination";
import { ApplicationControls } from "@/features/application-history/controls";
import { ApplicationFeatureBanner } from "@/features/application-history/feature-banner";
import { ApplicationHeader } from "@/features/application-history/header";
import { ApplicationTables } from "@/features/application-history/tables";
import { ApplicationTabs } from "@/features/application-history/tabs";

const ApplicationHistoryCandidate = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="max-w-7xl mx-auto">
        <ApplicationHeader />
        <ApplicationFeatureBanner />
        <ApplicationTabs />
        <div className="bg-white rounded-b-lg shadow-sm">
          <ApplicationControls />
          <ApplicationTables />
          <div className="flex justify-center mt-4">
            <Pagination
              currentPage={1}
              totalPages={5}
              onPageChange={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationHistoryCandidate;
