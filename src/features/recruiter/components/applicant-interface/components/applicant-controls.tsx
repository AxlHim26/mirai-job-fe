import { Search, SlidersHorizontal, Calendar } from "lucide-react";
import { useState } from "react";

type ApplicantControlsProps = {
  onSearch?: (query: string) => void;
  onFilter?: () => void;
  onDateRangeChange?: (startDate: string, endDate: string) => void;
};

export const ApplicantControls = ({
  onSearch,
  onFilter,
  onDateRangeChange,
}: ApplicantControlsProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  const handleDateRangeChange = (
    field: "startDate" | "endDate",
    value: string
  ) => {
    const newDateRange = { ...dateRange, [field]: value };
    setDateRange(newDateRange);

    if (newDateRange.startDate && newDateRange.endDate) {
      onDateRangeChange?.(newDateRange.startDate, newDateRange.endDate);
    }
  };

  return (
    <div className="flex justify-between items-center p-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900">Applicants</h2>
      <div className="flex gap-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search applicants..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          onClick={() => onFilter?.()}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <SlidersHorizontal className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-700">Filter</span>
        </button>

        <div className="relative">
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-700">
              {dateRange.startDate && dateRange.endDate
                ? `${new Date(dateRange.startDate).toLocaleDateString()} - ${new Date(dateRange.endDate).toLocaleDateString()}`
                : "Date Range"}
            </span>
          </button>

          {showDatePicker && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-10">
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={dateRange.startDate}
                    onChange={(e) =>
                      handleDateRangeChange("startDate", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={dateRange.endDate}
                    onChange={(e) =>
                      handleDateRangeChange("endDate", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setDateRange({ startDate: "", endDate: "" });
                      setShowDatePicker(false);
                    }}
                    className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                  >
                    Clear
                  </button>
                  <button
                    onClick={() => setShowDatePicker(false)}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
