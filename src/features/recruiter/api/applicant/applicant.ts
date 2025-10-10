import { useToastStore } from "@/stores";
import {
  Applicant,
  ApplicantResponse,
  ApplicantFilters,
  ApplicantSort,
  RestResponse,
} from "@/types";
import { ResponseMessage } from "@/types/common";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const fetchApplicants = async (
  page: number = 1,
  limit: number = 10,
  filters?: ApplicantFilters,
  sort?: ApplicantSort
): Promise<RestResponse<ApplicantResponse>> => {
  // Using mock data for now - replace with real API call later
  const { mockApplicantResponse } = await import("./mock");

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const response = mockApplicantResponse(page, limit);

  // Apply filters (mock implementation)
  if (filters?.status) {
    response.applicants = response.applicants.filter(
      (a) => a.status === filters.status
    );
  }
  if (filters?.jobTitle) {
    response.applicants = response.applicants.filter(
      (a) => a.jobTitle === filters.jobTitle
    );
  }
  if (filters?.experience) {
    response.applicants = response.applicants.filter(
      (a) => a.experience === filters.experience
    );
  }

  // Apply sorting (mock implementation)
  if (sort?.field) {
    response.applicants.sort((a, b) => {
      let aVal: string | number = a[sort.field] || "";
      let bVal: string | number = b[sort.field] || "";

      if (sort.field === "appliedDate") {
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
    path: "/api/applicants",
    timestamp: new Date().toISOString(),
  };
};

export const updateApplicantStatus = async (
  _applicantId: number,
  status: Applicant["status"],
  notes?: string
): Promise<RestResponse<Applicant>> => {
  // Mock implementation - replace with real API call later
  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    data: {
      id: 1,
      fullName: "Updated Applicant",
      email: "updated@email.com",
      phone: "+1 (555) 000-0000",
      appliedDate: "2024-01-01",
      status,
      jobTitle: "Developer",
      experience: "3 years",
      skills: ["React", "TypeScript"],
      notes,
    } as Applicant,
    message: "Status updated successfully",
    status: "200",
    errorDetail: null,
    path: "/api/applicants/1",
    timestamp: new Date().toISOString(),
  };
};

export const deleteApplicant = async (): Promise<RestResponse<void>> => {
  // Mock implementation - replace with real API call later
  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    data: undefined,
    message: "Applicant deleted successfully",
    status: "200",
    errorDetail: null,
    path: "/api/applicants/1",
    timestamp: new Date().toISOString(),
  };
};

export const exportApplicants = async (): Promise<Blob> => {
  // Mock implementation - replace with real API call later
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Create a mock CSV content
  const csvContent =
    "Name,Email,Status,Job Title,Applied Date\nJohn Doe,john@email.com,Pending,Frontend Developer,2024-01-15\nJane Smith,jane@email.com,Reviewing,UI/UX Designer,2024-01-14";

  return new Blob([csvContent], { type: "text/csv" });
};

export const useApplicants = (
  page: number = 1,
  limit: number = 10,
  filters?: ApplicantFilters,
  sort?: ApplicantSort
) => {
  return useQuery({
    queryKey: ["applicants", page, limit, filters, sort],
    queryFn: () => fetchApplicants(page, limit, filters, sort),
    select: (res) => res.data,
  });
};

export const useUpdateApplicantStatus = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToastStore();

  return useMutation({
    mutationFn: ({
      applicantId,
      status,
      notes,
    }: {
      applicantId: number;
      status: Applicant["status"];
      notes?: string;
    }) => updateApplicantStatus(applicantId, status, notes),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applicants"] });
      addToast({
        title: "Success",
        message: "Applicant status updated successfully.",
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

export const useDeleteApplicant = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToastStore();

  return useMutation({
    mutationFn: deleteApplicant,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applicants"] });
      addToast({
        title: "Success",
        message: "Applicant deleted successfully.",
        type: "success",
      });
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as ResponseMessage;
      addToast({
        title: "Delete Failed",
        message: data?.message || "An unknown error occurred",
        type: "error",
      });
    },
  });
};
