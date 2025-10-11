import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";

// Backend API types
export interface CandidateApplication {
  id: string;
  jobId: string;
  jobName: string;
  companyName: string;
  location: string;
  jobType: string;
  status: string;
  appliedAt: string;
  salary: string;
  category: string;
}

export interface CandidateApplicationsResponse {
  applications: CandidateApplication[];
  total: number;
}

export interface CandidateApplicationsFilters {
  status?: string;
  search?: string;
  dateRange?: {
    start?: string;
    end?: string;
  };
}

export interface CandidateApplicationsSort {
  field: "dateApplied" | "company" | "role";
  direction: "asc" | "desc";
}

// Backend API call
export const fetchCandidateApplications = async (
  page: number = 1,
  limit: number = 10,
  filters?: CandidateApplicationsFilters,
  sort?: CandidateApplicationsSort
): Promise<CandidateApplicationsResponse> => {
  try {
    const response = (await api.get("/jobs/applications")) as {
      data: CandidateApplication[];
    };
    let applications = response.data || [];

    // Apply frontend filtering and sorting
    if (filters?.search) {
      const searchQuery = filters.search.toLowerCase();
      applications = applications.filter(
        (app) =>
          app.companyName.toLowerCase().includes(searchQuery) ||
          app.jobName.toLowerCase().includes(searchQuery)
      );
    }

    if (filters?.status && filters.status !== "All") {
      applications = applications.filter(
        (app) => app.status === filters.status
      );
    }

    if (filters?.dateRange?.start || filters?.dateRange?.end) {
      applications = applications.filter((app) => {
        const appDate = new Date(app.appliedAt).getTime();
        const start = filters.dateRange?.start
          ? new Date(filters.dateRange.start).getTime()
          : Number.NEGATIVE_INFINITY;
        const end = filters.dateRange?.end
          ? new Date(filters.dateRange.end).getTime()
          : Number.POSITIVE_INFINITY;
        return appDate >= start && appDate <= end;
      });
    }

    // Apply sorting
    if (sort) {
      applications.sort((a, b) => {
        let aValue: string | number;
        let bValue: string | number;

        switch (sort.field) {
          case "dateApplied":
            aValue = new Date(a.appliedAt).getTime();
            bValue = new Date(b.appliedAt).getTime();
            break;
          case "company":
            aValue = a.companyName.toLowerCase();
            bValue = b.companyName.toLowerCase();
            break;
          case "role":
            aValue = a.jobName.toLowerCase();
            bValue = b.jobName.toLowerCase();
            break;
          default:
            return 0;
        }

        if (sort.direction === "asc") {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
          return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        }
      });
    }

    // Apply pagination
    const total = applications.length;
    const startIdx = (page - 1) * limit;
    const paginatedApplications = applications.slice(
      startIdx,
      startIdx + limit
    );

    return { applications: paginatedApplications, total };
  } catch (error) {
    console.error("Error fetching candidate applications:", error);
    // Return empty result on error
    return { applications: [], total: 0 };
  }
};

export const useCandidateApplications = (
  page: number = 1,
  limit: number = 10,
  filters?: CandidateApplicationsFilters,
  sort?: CandidateApplicationsSort
) => {
  return useQuery({
    queryKey: ["candidate-applications", page, limit, filters, sort],
    queryFn: () => fetchCandidateApplications(page, limit, filters, sort),
  });
};
