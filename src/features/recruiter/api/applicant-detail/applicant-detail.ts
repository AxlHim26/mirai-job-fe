import { RestResponse, ApplicantDetail } from "@/types";

export const fetchApplicantDetail = async (): Promise<
  RestResponse<ApplicantDetail>
> => {
  // Using mock data for now - replace with real API call later
  const { getApplicantDetail } = await import("./mock");

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const applicantDetail = getApplicantDetail();

  return {
    data: applicantDetail,
    message: "Success",
    status: "200",
    errorDetail: null,
    path: "/api/applicant-detail",
    timestamp: new Date().toISOString(),
  };
};

export const updateApplicantStage = async (): Promise<
  RestResponse<{ success: boolean }>
> => {
  // Mock implementation
  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    data: { success: true },
    message: "Stage updated successfully",
    status: "200",
    errorDetail: null,
    path: "/api/applicant-detail/stage",
    timestamp: new Date().toISOString(),
  };
};

export const scheduleInterview = async (): Promise<
  RestResponse<{ success: boolean }>
> => {
  // Mock implementation
  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    data: { success: true },
    message: "Interview scheduled successfully",
    status: "200",
    errorDetail: null,
    path: "/api/applicant-detail/interview",
    timestamp: new Date().toISOString(),
  };
};
