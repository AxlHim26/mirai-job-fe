import { useState } from "react";
import { Eye, Users, ChevronDown } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const JobAnalyticsDashboard = () => {
  const [timeRange] = useState("Last 7 days");

  const viewsData = [
    { date: "19 Jul", views: 450 },
    { date: "20 Jul", views: 120 },
    { date: "21 Jul", views: 580 },
    { date: "22 Jul", views: 280 },
    { date: "23 Jul", views: 650 },
    { date: "24 Jul", views: 350 },
    { date: "25 Jul", views: 500 },
  ];

  const trafficChannels = [
    { name: "Direct", percentage: 48, color: "bg-orange-400" },
    { name: "Social", percentage: 23, color: "bg-blue-400" },
    { name: "Organic", percentage: 24, color: "bg-purple-500" },
    { name: "Other", percentage: 5, color: "bg-teal-400" },
  ];

  const countries = [
    { name: "USA", code: "🇺🇸", visitors: 3240 },
    { name: "France", code: "🇫🇷", visitors: 3188 },
    { name: "Italy", code: "🇮🇹", visitors: 2938 },
    { name: "Germany", code: "🇩🇪", visitors: 2624 },
    { name: "Japan", code: "🇯🇵", visitors: 2414 },
    { name: "Netherlands", code: "🇳🇱", visitors: 1916 },
  ];

  const circumference = 2 * Math.PI * 80;
  let currentOffset = 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Total Views */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Total Views</h3>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="flex items-end space-x-2">
              <div className="text-4xl font-bold text-gray-900">23,564</div>
              <div className="text-sm text-green-600 font-medium mb-2">
                8.4% ↑
              </div>
            </div>
            <div className="text-sm text-gray-500 mt-1">vs last day</div>
          </div>

          {/* Total Applied */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">
                Total Applied
              </h3>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div className="flex items-end space-x-2">
              <div className="text-4xl font-bold text-gray-900">132</div>
              <div className="text-sm text-red-600 font-medium mb-2">
                0.4% ↓
              </div>
            </div>
            <div className="text-sm text-gray-500 mt-1">vs last day</div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Line Chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Job Listing View stats
              </h3>
              <button className="flex items-center text-sm text-gray-600 border border-gray-300 rounded-lg px-3 py-2 hover:bg-gray-50">
                {timeRange}
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>
            </div>
            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <LineChart data={viewsData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#f0f0f0"
                />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                  domain={[0, 1600]}
                  ticks={[0, 250, 500, 750, 1000, 1250, 1600]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#374151",
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                  }}
                  labelStyle={{ color: "white" }}
                  itemStyle={{ color: "white" }}
                />
                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="#10B981"
                  strokeWidth={3}
                  dot={{ fill: "#10B981", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Traffic & Countries */}
          <div className="space-y-6">
            {/* Traffic Channel */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Traffic channel
              </h3>
              <div className="flex items-center justify-between">
                <div className="relative w-48 h-48">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 200 200"
                  >
                    {trafficChannels.map((channel, index) => {
                      const segmentLength =
                        (channel.percentage / 100) * circumference;
                      const segment = (
                        <circle
                          key={index}
                          cx="100"
                          cy="100"
                          r="80"
                          fill="transparent"
                          stroke={channel.color.replace("bg-", "#")}
                          strokeWidth="32"
                          strokeDasharray={`${segmentLength} ${circumference}`}
                          strokeDashoffset={-currentOffset}
                          className={channel.color.replace("bg-", "stroke-")}
                        />
                      );
                      currentOffset += segmentLength;
                      return segment;
                    })}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">243</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {trafficChannels.map((channel, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3"
                    >
                      <div
                        className={`w-3 h-3 rounded-sm ${channel.color}`}
                      ></div>
                      <span className="text-sm text-gray-600">
                        {channel.name}
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        {channel.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visitors by Country */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Visitors by country
              </h3>
              <div className="space-y-3">
                {countries.map((country, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{country.code}</span>
                      <span className="text-sm text-gray-700">
                        {country.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {country.visitors.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
