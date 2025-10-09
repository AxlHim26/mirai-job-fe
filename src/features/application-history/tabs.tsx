import { useState } from "react";

export const ApplicationTabs = () => {
  const tabs = [
    { name: "All", count: 45 },
    { name: "In Review", count: 34 },
    { name: "Interviewing", count: 18 },
    { name: "Assessment", count: 5 },
    { name: "Offered", count: 2 },
    { name: "Hired", count: 1 },
  ];
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="bg-white rounded-t-lg border-b border-gray-200">
      <div className="flex gap-8 px-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
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
