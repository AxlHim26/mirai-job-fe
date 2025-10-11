export type ApplicantStatus =
  | "Pending"
  | "Reviewing"
  | "Interview"
  | "Rejected"
  | "Hired";

export type Applicant = {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  avatar?: string;
  appliedDate: string;
  status: ApplicantStatus;
  jobTitle: string;
  experience: string;
  skills: string[];
  resumeUrl?: string;
  coverLetter?: string;
  rating?: number;
  notes?: string;
};

export type ApplicantResponse = {
  applicants: Applicant[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasMore: boolean;
};

export type ApplicantFilters = {
  status?: ApplicantStatus;
  jobTitle?: string;
  experience?: string;
  skills?: string[];
  dateRange?: {
    start: string;
    end: string;
  };
};

export type ApplicantSort = {
  field: "fullName" | "appliedDate" | "status" | "rating" | "jobTitle";
  direction: "asc" | "desc";
};
