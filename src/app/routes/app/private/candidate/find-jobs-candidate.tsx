import { useState, useMemo } from "react";
import {
  FindJobsSearch,
  JobFiltersComponent,
  JobGridView,
  JobListView,
  JobResultsHeader,
  JobPagination,
} from "@/features/candidate/components/find-jobs";
import {
  useJobListings,
  JobFilters,
  JobSort,
} from "@/features/candidate/api/jobs";

const FindJobsCandidate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentView, setCurrentView] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("most-relevant");
  const [filters, setFilters] = useState<JobFilters>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const limit = 9; // 9 jobs per page

  // Convert sortBy to JobSort
  const sort: JobSort = useMemo(() => {
    switch (sortBy) {
      case "newest":
        return { field: "postedDate", direction: "desc" };
      case "oldest":
        return { field: "postedDate", direction: "asc" };
      case "salary-high":
        return { field: "salary", direction: "desc" };
      case "salary-low":
        return { field: "salary", direction: "asc" };
      default:
        return { field: "title", direction: "asc" };
    }
  }, [sortBy]);

  // Combine search query with filters
  const combinedFilters = useMemo(
    () => ({
      ...filters,
      search: searchQuery || undefined,
      location: location || undefined,
    }),
    [filters, searchQuery, location]
  );

  const {
    data: jobResponse,
    error,
    isLoading,
  } = useJobListings(currentPage, limit, combinedFilters, sort);

  const handleSearch = (query: string, loc: string) => {
    setSearchQuery(query);
    setLocation(loc);
    setCurrentPage(1);
  };

  const handleFiltersChange = (newFilters: JobFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleViewChange = (view: "grid" | "list") => {
    setCurrentView(view);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-center">
              <div className="text-red-600 text-lg font-medium mb-2">
                Error loading jobs
              </div>
              <div className="text-gray-500 text-sm">
                Please try refreshing the page or contact support if the problem
                persists.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <FindJobsSearch onSearch={handleSearch} />

        <div className="flex flex-col lg:flex-row gap-6 min-h-screen">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
            <JobFiltersComponent
              filters={filters}
              onFiltersChange={handleFiltersChange}
            />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4 lg:flex-1">
            <JobResultsHeader
              totalResults={jobResponse?.total || 0}
              currentView={currentView}
              onViewChange={handleViewChange}
              sortBy={sortBy}
              onSortChange={handleSortChange}
            />

            {currentView === "grid" ? (
              <JobGridView
                jobs={jobResponse?.jobs || []}
                loading={isLoading}
              />
            ) : (
              <JobListView
                jobs={jobResponse?.jobs || []}
                loading={isLoading}
              />
            )}

            <JobPagination
              currentPage={currentPage}
              totalPages={jobResponse?.totalPages || 1}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobsCandidate;
