import { useState } from "react";

export const HelpCenterHeader = () => {
  const [sortBy, setSortBy] = useState("Most relevant");
  const [activeMenu] = useState("Getting Started");

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-gray-900">{activeMenu}</h1>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Sort by:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm border-none bg-transparent text-gray-900 font-medium focus:outline-none cursor-pointer"
        >
          <option>Most relevant</option>
          <option>Most recent</option>
          <option>Most helpful</option>
        </select>
      </div>
    </div>
  );
};
