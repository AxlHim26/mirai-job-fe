import { Applicant } from "@/types";

type TabProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
  applicants: Applicant[];
};

export const ApplicantTabs = ({
  activeTab,
  onTabChange,
  applicants,
}: TabProps) => {
  const getTabCounts = () => {
    const counts = {
      All: applicants.length,
      Pending: applicants.filter((app) => app.status === "Pending").length,
      Reviewing: applicants.filter((app) => app.status === "Reviewing").length,
      Interview: applicants.filter((app) => app.status === "Interview").length,
      Rejected: applicants.filter((app) => app.status === "Rejected").length,
      Hired: applicants.filter((app) => app.status === "Hired").length,
    };
    return counts;
  };

  const tabCounts = getTabCounts();

  const tabs = [
    { name: "All", count: tabCounts["All"] },
    { name: "Pending", count: tabCounts["Pending"] },
    { name: "Reviewing", count: tabCounts["Reviewing"] },
    { name: "Interview", count: tabCounts["Interview"] },
    { name: "Rejected", count: tabCounts["Rejected"] },
    { name: "Hired", count: tabCounts["Hired"] },
  ];

  return (
    <div className="bg-white rounded-t-lg border-b border-gray-200">
      <div className="flex gap-8 px-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => onTabChange(tab.name)}
            className={`py-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.name
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.name} ({tab.count})
          </button>
        ))}
      </div>
    </div>
  );
};
