import { useQuery } from "@tanstack/react-query";
import { ApplicantStatus } from "@/types";

// FE-only mock-backed API for candidate application history
// Reuses existing mock data generator from the feature folder
import {
  getApplicationsByStatus,
  sortApplications,
} from "@/features/candidate/components/application-history/mock-data";

export type CandidateApplication = {
  id: string;
  company: string;
  jobTitle: string;
  appliedDate: string;
  status: ApplicantStatus | "Saved" | "All";
  location?: string;
};

export type CandidateApplicationsResponse = {
  applications: CandidateApplication[];
  total: number;
};

export type CandidateApplicationsFilters = {
  status?: Exclude<CandidateApplication["status"], "All">;
  search?: string;
  dateRange?: { start?: string; end?: string };
};

export type CandidateApplicationsSort = {
  field: "appliedDate" | "company" | "jobTitle";
  direction: "asc" | "desc";
};

export const fetchCandidateApplications = async (
  page: number = 1,
  limit: number = 10,
  filters?: CandidateApplicationsFilters,
  sort?: CandidateApplicationsSort
): Promise<CandidateApplicationsResponse> => {
  const base = getApplicationsByStatus(filters?.status ?? "All");

  // apply search
  const searched = filters?.search
    ? base.filter((a) => {
        const q = filters.search!.toLowerCase();
        return (
          a.company.toLowerCase().includes(q) ||
          a.jobTitle.toLowerCase().includes(q)
        );
      })
    : base;

  // apply date range (inclusive)
  const ranged =
    filters?.dateRange?.start || filters?.dateRange?.end
      ? searched.filter((a) => {
          const ts = new Date(a.appliedDate).getTime();
          const start = filters?.dateRange?.start
            ? new Date(filters.dateRange.start).getTime()
            : Number.NEGATIVE_INFINITY;
          const end = filters?.dateRange?.end
            ? new Date(filters.dateRange.end).getTime()
            : Number.POSITIVE_INFINITY;
          return ts >= start && ts <= end;
        })
      : searched;

  // apply sort using existing helper when possible
  const sorted = sort
    ? sort.field === "appliedDate"
      ? sortApplications(ranged, sort.direction === "asc")
      : [...ranged].sort((a, b) => {
          const av = String(a[sort.field] ?? "").toLowerCase();
          const bv = String(b[sort.field] ?? "").toLowerCase();
          if (av < bv) return sort.direction === "asc" ? -1 : 1;
          if (av > bv) return sort.direction === "asc" ? 1 : -1;
          return 0;
        })
    : ranged;

  const total = sorted.length;
  const startIdx = (page - 1) * limit;
  const applications = sorted.slice(startIdx, startIdx + limit);

  // simulate latency for FE-only API
  await new Promise((r) => setTimeout(r, 200));

  return { applications, total };
};

export const useCandidateApplications = (
  page: number = 1,
  limit: number = 10,
  filters?: CandidateApplicationsFilters,
  sort?: CandidateApplicationsSort
) => {
  return useQuery({
    queryKey: ["candidate-applications", page, limit, filters, sort],
    queryFn: () => fetchCandidateApplications(page, limit, filters, sort),
  });
};
