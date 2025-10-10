import { RestResponse, JobResponse, Job, JobFilters, JobSort } from "@/types";

export const fetchJobs = async (
  page: number = 1,
  limit: number = 10,
  _filters?: JobFilters,
  sort?: JobSort
): Promise<RestResponse<JobResponse>> => {
  // Using mock data for now - replace with real API call later
  const { mockJobResponse } = await import("./mock");

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const response = mockJobResponse(page, limit);

  // Apply filters (mock implementation)
  if (_filters?.status) {
    response.jobs = response.jobs.filter(
      (job) => job.status === _filters.status
    );
  }
  if (_filters?.jobType) {
    response.jobs = response.jobs.filter(
      (job) => job.jobType === _filters.jobType
    );
  }

  // Apply sorting (mock implementation)
  if (sort?.field) {
    response.jobs.sort((a, b) => {
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

  return {
    data: response,
    message: "Success",
    status: "200",
    errorDetail: null,
    path: "/api/jobs",
    timestamp: new Date().toISOString(),
  };
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
