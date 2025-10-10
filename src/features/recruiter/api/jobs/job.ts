import { RestResponse, JobResponse, Job, JobFilters, JobSort } from "@/types";
import { api } from "@/lib/api-client";

// Backend JobResponse interface
interface BackendJobResponse {
  id: number;
  jobName: string;
  jobType: string;
  description: string;
  salary: string;
  category: string;
  requireSkill: string;
  whoAreYou: string;
  reponsibility: string;
  niceToHave: string;
  capacity: number;
  createdAt: string;
  expiredDate: string;
  status: string;
}

// Convert backend job to frontend job format
const convertBackendJobToFrontendJob = (
  backendJob: BackendJobResponse
): Job => {
  return {
    id: backendJob.id.toString(),
    title: backendJob.jobName,
    status: "Live" as const, // Default status
    datePosted: backendJob.createdAt,
    dueDate: backendJob.expiredDate,
    jobType:
      (backendJob.jobType.split(",")[0] as
        | "Fulltime"
        | "Part-time"
        | "Contract"
        | "Internship"
        | "Remote") || "Fulltime",
    applicants: 0, // Default applicants count
    needs: {
      current: 0,
      total: backendJob.capacity,
    },
  };
};

export const fetchJobs = async (
  page: number = 1,
  limit: number = 10,
  _filters?: JobFilters,
  sort?: JobSort
): Promise<RestResponse<JobResponse>> => {
  try {
    // Call real API
    const response = (await api.get("/jobs")) as RestResponse<
      BackendJobResponse[]
    >;

    // Convert backend jobs to frontend format
    const frontendJobs = response.data.map(convertBackendJobToFrontendJob);

    // Apply filters
    let filteredJobs = frontendJobs;
    if (_filters?.status) {
      filteredJobs = filteredJobs.filter(
        (job) => job.status === _filters.status
      );
    }
    if (_filters?.jobType) {
      filteredJobs = filteredJobs.filter(
        (job) => job.jobType === _filters.jobType
      );
    }

    // Apply sorting
    if (sort?.field) {
      filteredJobs.sort((a, b) => {
        let aVal: string | number = a[sort.field];
        let bVal: string | number = b[sort.field];

        if (sort.field === "datePosted" || sort.field === "dueDate") {
          aVal = new Date(aVal).getTime();
          bVal = new Date(bVal).getTime();
        }

        if (sort.direction === "asc") {
          return aVal > bVal ? 1 : -1;
        } else {
          return aVal < bVal ? 1 : -1;
        }
      });
    }

    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

    const jobResponse: JobResponse = {
      jobs: paginatedJobs,
      total: filteredJobs.length,
      page: page,
      limit: limit,
      totalPages: Math.ceil(filteredJobs.length / limit),
    };

    return {
      data: jobResponse,
      message: "Success",
      status: "200",
      errorDetail: null,
      path: "/api/jobs",
      timestamp: new Date().toISOString(),
    };
  } catch {
    // Fallback to mock data if API fails
    const { mockJobResponse } = await import("./mock");
    const response = mockJobResponse(page, limit);

    return {
      data: response,
      message: "Success (mock data)",
      status: "200",
      errorDetail: null,
      path: "/api/jobs",
      timestamp: new Date().toISOString(),
    };
  }
};

export const updateJob = async (
  jobId: string,
  updates: Partial<Job>
): Promise<RestResponse<Job>> => {
  // Mock implementation
  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    data: { id: jobId, ...updates } as Job,
    message: "Job updated successfully",
    status: "200",
    errorDetail: null,
    path: "/api/jobs",
    timestamp: new Date().toISOString(),
  };
};

export const deleteJob = async (
  jobId: string
): Promise<RestResponse<{ id: string }>> => {
  // Mock implementation
  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    data: { id: jobId },
    message: "Job deleted successfully",
    status: "200",
    errorDetail: null,
    path: "/api/jobs",
    timestamp: new Date().toISOString(),
  };
};

export const exportJobs = async (): Promise<
  RestResponse<{ downloadUrl: string }>
> => {
  // Mock implementation
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    data: { downloadUrl: "/exports/jobs.csv" },
    message: "Jobs exported successfully",
    status: "200",
    errorDetail: null,
    path: "/api/jobs/export",
    timestamp: new Date().toISOString(),
  };
};
