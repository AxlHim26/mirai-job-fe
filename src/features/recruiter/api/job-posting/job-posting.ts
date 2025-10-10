import { RestResponse } from "@/types";

export interface JobPostingRequest {
  jobTitle: string;
  employmentTypes: string[];
  salaryMin: number;
  salaryMax: number;
  categories: string[];
  requiredSkills: string[];
  jobDescription: string;
  responsibilities: string;
  qualifications: string;
  niceToHaves: string;
}

export interface JobPostingResponse {
  id: string;
  title: string;
  status: "draft" | "published" | "closed";
  createdAt: string;
}

export const postJob = async (
  jobData: JobPostingRequest
): Promise<RestResponse<JobPostingResponse>> => {
  // Mock implementation - replace with real API call later
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulate random success/failure for testing
  const isSuccess = Math.random() > 0.5; // 50% success rate for testing

  if (!isSuccess) {
    // Throw error instead of returning success
    throw new Error(
      "Failed to post job. Please check your connection and try again."
    );
  }

  return {
    data: {
      id: `job_${Date.now()}`,
      title: jobData.jobTitle,
      status: "published",
      createdAt: new Date().toISOString(),
    },
    message: "Job posted successfully",
    status: "200",
    errorDetail: null,
    path: "/api/jobs",
    timestamp: new Date().toISOString(),
  };
};
