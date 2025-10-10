export interface Job {
  id: string;
  title: string;
  status: JobStatus;
  datePosted: string;
  dueDate: string;
  jobType: JobType;
  applicants: number;
  needs: {
    current: number;
    total: number;
  };
}

export type JobStatus = "Live" | "Draft" | "Closed" | "Paused";

export type JobType =
  | "Fulltime"
  | "Part-time"
  | "Contract"
  | "Internship"
  | "Remote";

export interface JobFilters {
  status?: JobStatus;
  jobType?: JobType;
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface JobSort {
  field: "title" | "datePosted" | "dueDate" | "applicants";
  direction: "asc" | "desc";
}

export interface JobResponse {
  jobs: Job[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface RestResponse<T> {
  data: T;
  message: string;
  status: number;
}
