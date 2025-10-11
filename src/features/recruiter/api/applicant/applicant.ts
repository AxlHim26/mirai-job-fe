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
import { api } from "@/lib/api-client";

// Backend API types
export interface RecruiterApplicant {
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
}

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

export const fetchApplicants = async (
  page: number = 1,
  limit: number = 10,
  filters?: ApplicantFilters,
  sort?: ApplicantSort
): Promise<RestResponse<ApplicantResponse>> => {
  try {
    const response = (await api.get("/jobs/recruiter/applicants")) as {
      data: RecruiterApplicant[];
    };
    let applicants = response.data || [];

    // Apply frontend filtering and sorting
    if (filters?.status) {
      applicants = applicants.filter((app) => app.status === filters.status);
    }

    if (filters?.jobTitle) {
      applicants = applicants.filter((app) =>
        app.jobName.toLowerCase().includes(filters.jobTitle!.toLowerCase())
      );
    }

    if (filters?.experience) {
      applicants = applicants.filter((app) =>
        app.currentJob.toLowerCase().includes(filters.experience!.toLowerCase())
      );
    }

    // Apply sorting
    if (sort?.field) {
      applicants.sort((a, b) => {
        let aVal: string | number = "";
        let bVal: string | number = "";

        switch (sort.field) {
          case "appliedDate":
            aVal = new Date(a.appliedAt).getTime();
            bVal = new Date(b.appliedAt).getTime();
            break;
          case "fullName":
            aVal = a.candidateName.toLowerCase();
            bVal = b.candidateName.toLowerCase();
            break;
          case "jobTitle":
            aVal = a.jobName.toLowerCase();
            bVal = b.jobName.toLowerCase();
            break;
          case "status":
            aVal = a.status.toLowerCase();
            bVal = b.status.toLowerCase();
            break;
          default:
            return 0;
        }

        if (sort.direction === "asc") {
          return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
        } else {
          return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
        }
      });
    }

    // Apply pagination
    const total = applicants.length;
    const startIdx = (page - 1) * limit;
    const paginatedApplicants = applicants.slice(startIdx, startIdx + limit);

    // Transform to frontend format
    const transformedApplicants: Applicant[] = paginatedApplicants.map(
      (app) => ({
        id: parseInt(app.applicationId),
        fullName: app.candidateName,
        email: app.candidateEmail,
        phone: app.candidatePhone,
        appliedDate: app.appliedAt,
        status: app.status as Applicant["status"],
        jobTitle: app.jobName,
        experience: app.currentJob,
        skills: app.about.split(",").map((s) => s.trim()),
        notes: "",
      })
    );

    return {
      data: {
        applicants: transformedApplicants,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasMore: page < Math.ceil(total / limit),
      },
      message: "Success",
      status: "200",
      errorDetail: null,
      path: "/api/jobs/recruiter/applicants",
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error fetching applicants:", error);
    // Return empty result on error
    return {
      data: {
        applicants: [],
        total: 0,
        page,
        limit,
        totalPages: 0,
        hasMore: false,
      },
      message: "Error",
      status: "500",
      errorDetail: "Failed to fetch applicants",
      path: "/api/jobs/recruiter/applicants",
      timestamp: new Date().toISOString(),
    };
  }
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
