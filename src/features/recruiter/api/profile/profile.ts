import { useToastStore } from "@/stores";
import { CompanyProfile, CompanyProfileResponse, RestResponse } from "@/types";
import { ResponseMessage } from "@/types/common";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const fetchCompanyProfile = async (): Promise<
  RestResponse<CompanyProfileResponse>
> => {
  // Using mock data for now - replace with real API call later
  const { mockCompanyProfile } = await import("./mock");

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    data: mockCompanyProfile(),
    message: "Success",
    status: "200",
    errorDetail: null,
    path: "/api/recruiter/profile",
    timestamp: new Date().toISOString(),
  };
};

export const updateCompanyProfile = async (
  profile: CompanyProfile
): Promise<RestResponse<CompanyProfile>> => {
  // Mock implementation - replace with real API call later
  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    data: profile,
    message: "Profile updated successfully",
    status: "200",
    errorDetail: null,
    path: "/api/recruiter/profile",
    timestamp: new Date().toISOString(),
  };
};

export const useCompanyProfile = () => {
  return useQuery({
    queryKey: ["company-profile"],
    queryFn: fetchCompanyProfile,
    select: (res) => res.data,
  });
};

export const useUpdateCompanyProfile = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToastStore();

  return useMutation({
    mutationFn: updateCompanyProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["company-profile"] });
      addToast({
        title: "Success",
        message: "Company profile updated successfully.",
        type: "success",
      });
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as ResponseMessage;
      addToast({
        title: "Update Failed",
        message: data?.message || "An unknown error occurred",
        type: "error",
      });
    },
  });
};
