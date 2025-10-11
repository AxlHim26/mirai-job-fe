import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import { RestResponse } from "@/types";

// Backend API type for applicant detail
export interface ApplicantDetail {
  applicationId: string;
  candidateId: string;
  candidateName: string;
  candidateEmail: string;
  candidatePhone: string;
  jobId: string;
  jobName: string;
  jobType: string;
  salary: string;
  category: string;
  status: string;
  appliedAt: string;
  resumeId: string;
  currentJob: string;
  portfolioLink: string;
  about: string;
  experience: string;
  education: string;
  skills: string;
  address: string;
  avatar: string;
}

export const fetchApplicantDetail = async (
  applicationId: string
): Promise<RestResponse<ApplicantDetail>> => {
  try {
    const response = (await api.get(
      `/jobs/recruiter/applicants/${applicationId}`
    )) as RestResponse<ApplicantDetail>;
    return response;
  } catch (error) {
    console.error("Error fetching applicant detail:", error);
    throw error;
  }
};

export const useApplicantDetail = (applicationId: string) => {
  return useQuery({
    queryKey: ["applicantDetail", applicationId],
    queryFn: () => fetchApplicantDetail(applicationId),
    enabled: !!applicationId,
    select: (res) => res.data,
  });
};
