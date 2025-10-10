import { Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui";

type JobResultsHeaderProps = {
  totalResults: number;
  currentView: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
};

export const JobResultsHeader = ({
  totalResults,
  currentView,
  onViewChange,
  sortBy,
  onSortChange,
}: JobResultsHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-900">All Jobs</h2>
        <span className="text-sm text-gray-600">
          Showing {totalResults} results
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="most-relevant">Most relevant</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="salary-high">Salary: High to Low</option>
            <option value="salary-low">Salary: Low to High</option>
          </select>
        </div>

        <div className="flex items-center gap-1 border border-gray-300 rounded-md">
          <Button
            variant={currentView === "grid" ? "filled" : "outlined"}
            size="sm"
            onClick={() => onViewChange("grid")}
            className="rounded-r-none border-r-0"
          >
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button
            variant={currentView === "list" ? "filled" : "outlined"}
            size="sm"
            onClick={() => onViewChange("list")}
            className="rounded-l-none"
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
