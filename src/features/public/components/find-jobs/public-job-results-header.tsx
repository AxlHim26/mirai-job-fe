import { List, Grid3x3 } from "lucide-react";

type PublicJobResultsHeaderProps = {
  totalJobs: number;
  viewMode: "list" | "grid";
  onViewModeChange: (mode: "list" | "grid") => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
};

export const PublicJobResultsHeader = ({
  totalJobs,
  viewMode,
  onViewModeChange,
  sortBy,
  onSortChange,
}: PublicJobResultsHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">All Jobs</h2>
        <p className="text-sm text-gray-500 mt-1">
          Showing {totalJobs} results
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select
            className="border border-gray-300 rounded px-3 py-1.5 text-sm"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="most-relevant">Most relevant</option>
            <option value="newest">Most recent</option>
            <option value="salary-high">Salary (High to Low)</option>
            <option value="salary-low">Salary (Low to High)</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onViewModeChange("grid")}
            className={`p-2 rounded ${
              viewMode === "grid" ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
          >
            <Grid3x3 size={20} />
          </button>
          <button
            onClick={() => onViewModeChange("list")}
            className={`p-2 rounded ${
              viewMode === "list"
                ? "bg-indigo-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <List size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
