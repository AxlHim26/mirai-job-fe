import { Search, SlidersHorizontal, Calendar } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui";

export const ApplicationControls = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange] = useState({
    startDate: "Jul 19",
    endDate: "Jul 25",
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex justify-between items-center p-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900">
        Applications History
      </h2>
      <div className="flex gap-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search applications..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <Button
          variant="outlined"
          size="sm"
          startIcon={<SlidersHorizontal className="w-4 h-4" />}
        >
          Filter
        </Button>

        <div className="relative">
          <Button
            variant="outlined"
            size="sm"
            startIcon={<Calendar className="w-4 h-4" />}
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            {dateRange.startDate} - {dateRange.endDate}
          </Button>

          {showDatePicker && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-10">
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowDatePicker(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="filled"
                    size="sm"
                    onClick={() => setShowDatePicker(false)}
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
