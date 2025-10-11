import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";

// API to check if candidate has applied to a specific job
export const checkJobApplicationStatus = async (
  jobId: string
): Promise<boolean> => {
  try {
    const response = (await api.get(`/jobs/${jobId}/applied`)) as {
      data: boolean;
    };
    return response.data;
  } catch (error) {
    console.error("Error checking application status:", error);
    return false; // Default to false if error
  }
};

export const useJobApplicationStatus = (jobId: string) => {
  return useQuery({
    queryKey: ["job-application-status", jobId],
    queryFn: () => checkJobApplicationStatus(jobId),
    enabled: !!jobId, // Only run if jobId exists
  });
};
