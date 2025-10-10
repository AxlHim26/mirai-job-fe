import { mockApplications } from "./mock-data";

type TabProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export const ApplicationTabs = ({ activeTab, onTabChange }: TabProps) => {
  const getTabCounts = () => {
    const counts = {
      All: mockApplications.length,
      "In Review": mockApplications.filter((app) => app.status === "In Review")
        .length,
      Interviewing: mockApplications.filter(
        (app) => app.status === "Interviewing"
      ).length,
      Assessment: mockApplications.filter((app) => app.status === "Assessment")
        .length,
      Offered: mockApplications.filter((app) => app.status === "Offered")
        .length,
      Hired: mockApplications.filter((app) => app.status === "Hired").length,
    };
    return counts;
  };

  const tabCounts = getTabCounts();

  const tabs = [
    { name: "All", count: tabCounts["All"] },
    { name: "In Review", count: tabCounts["In Review"] },
    { name: "Interviewing", count: tabCounts["Interviewing"] },
    { name: "Assessment", count: tabCounts["Assessment"] },
    { name: "Offered", count: tabCounts["Offered"] },
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
