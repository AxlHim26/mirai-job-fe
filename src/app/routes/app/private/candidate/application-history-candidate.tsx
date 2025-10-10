import { ApplicationControls } from "@/features/candidate/components/application-history/controls";
import { ApplicationFeatureBanner } from "@/features/candidate/components/application-history/feature-banner";
import { ApplicationTables } from "@/features/candidate/components/application-history/tables";
import { ApplicationTabs } from "@/features/candidate/components/application-history/tabs";
import { ApplicationPagination } from "@/features/candidate/components/application-history/pagination";
import { useState } from "react";

const ApplicationHistoryCandidate = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to first page when changing tabs
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <ApplicationFeatureBanner />

        <div className="bg-white rounded-lg shadow">
          <ApplicationTabs
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
          <ApplicationControls />
          <ApplicationTables activeTab={activeTab} />
          <ApplicationPagination
            currentPage={currentPage}
            totalPages={33}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ApplicationHistoryCandidate;
