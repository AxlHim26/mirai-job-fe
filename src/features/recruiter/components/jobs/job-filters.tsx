import React, { useState } from "react";
import { JobFilters, JobStatus, JobType } from "@/types";

interface JobFiltersProps {
  filters: JobFilters;
  onFiltersChange: (filters: JobFilters) => void;
  onDateRangeChange: (start: string, end: string) => void;
}

export const JobFiltersComponent: React.FC<JobFiltersProps> = ({
  filters,
  onFiltersChange,
  onDateRangeChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStatusChange = (status: JobStatus | "") => {
    onFiltersChange({
      ...filters,
      status: status || undefined,
    });
  };

  const handleJobTypeChange = (jobType: JobType | "") => {
    onFiltersChange({
      ...filters,
      jobType: jobType || undefined,
    });
  };

  const handleDateRangeChange = (start: string, end: string) => {
    onDateRangeChange(start, end);
    onFiltersChange({
      ...filters,
      dateRange: { start, end },
    });
  };

  const clearFilters = () => {
    onFiltersChange({});
    onDateRangeChange("", "");
  };

  const hasActiveFilters =
    filters.status || filters.jobType || filters.dateRange;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-150"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
        <span className="text-sm font-medium text-gray-700">Filters</span>
        {hasActiveFilters && (
          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-600 rounded-full">
            {
              [filters.status, filters.jobType, filters.dateRange].filter(
                Boolean
              ).length
            }
          </span>
        )}
        <svg
          className={`w-4 h-4 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-150"
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="space-y-4">
              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={filters.status || ""}
                  onChange={(e) =>
                    handleStatusChange(e.target.value as JobStatus | "")
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Status</option>
                  <option value="Live">Live</option>
                  <option value="Draft">Draft</option>
                  <option value="Closed">Closed</option>
                  <option value="Paused">Paused</option>
                </select>
              </div>

              {/* Job Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Type
                </label>
                <select
                  value={filters.jobType || ""}
                  onChange={(e) =>
                    handleJobTypeChange(e.target.value as JobType | "")
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Types</option>
                  <option value="Fulltime">Fulltime</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>

              {/* Date Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date Range
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    value={filters.dateRange?.start || ""}
                    onChange={(e) =>
                      handleDateRangeChange(
                        e.target.value,
                        filters.dateRange?.end || ""
                      )
                    }
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="date"
                    value={filters.dateRange?.end || ""}
                    onChange={(e) =>
                      handleDateRangeChange(
                        filters.dateRange?.start || "",
                        e.target.value
                      )
                    }
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-150"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-150"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
