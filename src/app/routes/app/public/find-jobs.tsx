import { useState, useMemo } from "react";
import {
  PublicJobFiltersComponent,
  PublicJobListView,
  PublicJobResultsHeader,
  PublicJobPagination,
} from "@/features/public/components/find-jobs";
import {
  usePublicJobs,
  PublicJobFilters,
  PublicJobSort,
} from "@/features/public/api/jobs";
import { Spinner } from "@/components/ui";
import { LandingFooter, LandingHeader } from "@/components/layouts/landing";
import { Hero } from "@/components/sections/landing";

const FindJobsRoute = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentView, setCurrentView] = useState<"list" | "grid">("list");
  const [sortBy, setSortBy] = useState("most-relevant");
  const [filters, setFilters] = useState<PublicJobFilters>({
    category: "Business",
    jobLevel: "Director",
    salaryRange: "$3000 or above",
  });

  const limit = 7; // Hiển thị 7 jobs như trong design

  // Convert sortBy to PublicJobSort
  const sort: PublicJobSort = useMemo(() => {
    switch (sortBy) {
      case "newest":
        return { field: "datePosted", direction: "desc" };
      case "salary-high":
        return { field: "applicants", direction: "desc" };
      case "salary-low":
        return { field: "applicants", direction: "asc" };
      default:
        return { field: "jobTitle", direction: "asc" };
    }
  }, [sortBy]);

  const {
    data: jobResponse,
    error,
    isLoading,
  } = usePublicJobs(currentPage, limit, filters, sort);

  const handleFiltersChange = (newFilters: PublicJobFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleViewChange = (view: "list" | "grid") => {
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
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      <Hero />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto flex gap-6">
          {/* Sidebar Filters */}
          <div className="w-64 flex-shrink-0">
            <PublicJobFiltersComponent
              filters={filters}
              onFiltersChange={handleFiltersChange}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <PublicJobResultsHeader
              totalJobs={jobResponse?.total || 0}
              viewMode={currentView}
              onViewModeChange={handleViewChange}
              sortBy={sortBy}
              onSortChange={handleSortChange}
            />

            {isLoading ? (
              <div className="flex justify-center items-center py-10">
                <Spinner size="lg" />
              </div>
            ) : (
              <PublicJobListView jobs={jobResponse?.jobs || []} />
            )}

            <PublicJobPagination
              currentPage={currentPage}
              totalPages={Math.ceil((jobResponse?.total || 0) / limit)}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      <LandingFooter />
    </div>
  );
};

export default FindJobsRoute;
