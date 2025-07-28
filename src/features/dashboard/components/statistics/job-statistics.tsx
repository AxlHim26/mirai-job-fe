import { Eye, Send } from "lucide-react";
import { chartData, maxValue } from "../../api/dashboard.mock";
import { Button } from "@/components/ui";
import { useDateRangeStore } from "@/hooks/use-date-range-store";
import { ChartBar } from "./chart-bar";
import { Legend } from "./legend";
import { ApplicantsSummary } from "./applicants-summary";

export const JobStatistics = () => {
  const periods = ["Week", "Month", "Year"];
  const tabs = ["Overview", "Jobs View", "Jobs Applied"];
  const { dateRangeText } = useDateRangeStore();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Job statistics</h2>
          <div className="flex gap-2">
            {periods.map((period, index) => (
              <Button
                key={period}
                className={`px-3 py-1 rounded-lg text-sm font-medium ${
                  index === 0
                    ? "bg-indigo-100 text-indigo-600 hover:bg-gray-300"
                    : "text-gray-500 bg-white hover:bg-gray-300"
                }`}
              >
                {period}
              </Button>
            ))}
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-6">
          Showing Jobstatistic {dateRangeText}
        </p>

        {/* Tabs */}
        <div className="flex gap-6 mb-6 border-b">
          {tabs.map((tab) => (
            <Button key={tab}>{tab}</Button>
          ))}
        </div>

        {/* Chart */}
        <div className="flex items-end justify-between h-64 mb-4">
          {chartData.map((data, index) => (
            <ChartBar
              key={index}
              day={data.day}
              views={data.views}
              applied={data.applied}
              maxValue={maxValue}
            />
          ))}
        </div>

        {/* Legend */}
        <Legend/>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium">Job Views</span>
            </div>
            <div className="text-2xl font-bold">2,342</div>
            <div className="text-sm text-green-600">This Week 6.4% ↗</div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Send className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium">Job Applied</span>
            </div>
            <div className="text-2xl font-bold">654</div>
            <div className="text-sm text-red-600">This Week 0.5% ↘</div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-6">
        {/* Job Open */}
        <div className="bg-white rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Job Open</h3>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-1">12</div>
            <div className="text-gray-500">Jobs Opened</div>
          </div>
        </div>

        {/* Applicants Summary */}
        <ApplicantsSummary/>
      </div>
    </div>
  );
};
