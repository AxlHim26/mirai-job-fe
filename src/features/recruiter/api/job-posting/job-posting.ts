import { RestResponse } from "@/types";
import { api } from "@/lib/api-client";

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

export const postJob = async (
  jobData: JobPostingRequest
): Promise<RestResponse<JobPostingResponse>> => {
  const response = (await api.post(
    "/jobs",
    jobData
  )) as RestResponse<JobPostingResponse>;
  return response;
};
