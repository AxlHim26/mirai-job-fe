import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";

export type JobListing = {
  id: string;
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
  // Frontend display fields
  title?: string;
  company?: string;
  logo?: string;
  location?: string;
  appliedCount?: number;
  tags?: string[];
  postedDate?: string;
};

export type JobFilters = {
  jobType?: JobListing["jobType"];
  category?: string;
  jobLevel?:
    | "Entry Level"
    | "Mid Level"
    | "Senior Level"
    | "Director"
    | "VP or Above";
  salaryRange?: "$700-$1000" | "$100-$1500" | "$1500-$2000" | "$3000 or above";
  location?: string;
  search?: string;
};

export type JobSort = {
  field: "title" | "company" | "postedDate" | "salary";
  direction: "asc" | "desc";
};

export type JobListingsResponse = {
  jobs: JobListing[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

// Helper function to create mock job
const createMockJob = (
  id: string,
  jobName: string,
  jobType: string,
  category: string,
  salary: string,
  company: string,
  location: string,
  logo: string,
  postedDate: string,
  tags: string[]
): JobListing => ({
  id,
  jobName,
  jobType,
  description: `We are looking for a ${jobName} to join our team.`,
  salary,
  category,
  requireSkill: tags.join(", "),
  whoAreYou: `Experienced ${jobName} professional`,
  reponsibility: `Manage ${jobName.toLowerCase()} tasks and responsibilities`,
  niceToHave: "Experience with modern tools and technologies",
  capacity: 10,
  createdAt: postedDate,
  expiredDate: "2024-12-31",
  status: "published",
  title: jobName,
  company,
  logo,
  location,
  appliedCount: Math.floor(Math.random() * 10) + 1,
  tags,
  postedDate,
});

// Mock data for FE-only API
const mockJobs: JobListing[] = [
  createMockJob(
    "1",
    "Social Media Assistant",
    "Full-time",
    "Marketing",
    "45000",
    "Nomad",
    "Paris, France",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    "2024-01-15",
    ["Marketing", "Design"]
  ),
  createMockJob(
    "2",
    "Brand Designer",
    "Full-time",
    "Design",
    "55000",
    "Dropbox",
    "Paris, France",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center",
    "2024-01-14",
    ["Business", "Design"]
  ),
  createMockJob(
    "3",
    "Interactive Developer",
    "Full-time",
    "Engineering",
    "65000",
    "Terraform",
    "Berlin, Germany",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
    "2024-01-13",
    ["Marketing", "Design"]
  ),
  createMockJob(
    "4",
    "Email Marketing",
    "Internship",
    "Marketing",
    "35000",
    "Revolut",
    "Madrid, Spain",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop&crop=center",
    "2024-01-12",
    ["Marketing", "Design"]
  ),
  createMockJob(
    "5",
    "Product Designer",
    "Full-time",
    "Design",
    "60000",
    "ClassPass",
    "Berlin, Germany",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    "2024-01-11",
    ["Business", "Design"]
  ),
  createMockJob(
    "6",
    "Interactive Developer",
    "Full-time",
    "Engineering",
    "70000",
    "Canva",
    "Birmingham, UK",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center",
    "2024-01-10",
    ["Marketing", "Design"]
  ),
  createMockJob(
    "7",
    "Customer Manager",
    "Full-time",
    "Business",
    "55000",
    "Pitch",
    "Roma, Italy",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
    "2024-01-09",
    ["Marketing", "Design"]
  ),
  createMockJob(
    "8",
    "Visual Designer",
    "Full-time",
    "Design",
    "50000",
    "Blinkist",
    "Lyon, France",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop&crop=center",
    "2024-01-08",
    ["Business", "Design"]
  ),
  createMockJob(
    "9",
    "Java Developer",
    "Part-time",
    "Engineering",
    "45000",
    "GoDaddy",
    "Oslo, Sweden",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    "2024-01-07",
    ["Marketing", "Design"]
  ),
];

export const fetchJobListings = async (
  page: number = 1,
  limit: number = 9,
  filters?: JobFilters,
  sort?: JobSort
): Promise<JobListingsResponse> => {
  try {
    // Call real API
    const response = (await api.get("/jobs/public")) as { data: JobListing[] };
    let jobs = response.data || [];

    // Transform backend data to frontend format
    jobs = jobs.map((job) => ({
      ...job,
      title: job.jobName,
      company: "Company", // Default company name since backend doesn't have this
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      location: "Remote", // Default location
      appliedCount: Math.floor(Math.random() * 10) + 1, // Random for display
      tags: job.requireSkill
        ? job.requireSkill.split(",").map((s) => s.trim())
        : [],
      postedDate: job.createdAt,
    }));

    // Apply local search filters
    if (filters?.search) {
      const searchTerm = filters.search.toLowerCase();
      jobs = jobs.filter(
        (job) =>
          job.jobName.toLowerCase().includes(searchTerm) ||
          job.description.toLowerCase().includes(searchTerm) ||
          job.category.toLowerCase().includes(searchTerm) ||
          job.requireSkill.toLowerCase().includes(searchTerm)
      );
    }

    if (filters?.jobType) {
      jobs = jobs.filter(
        (job) => job.jobType.toLowerCase() === filters.jobType!.toLowerCase()
      );
    }

    if (filters?.category) {
      jobs = jobs.filter(
        (job) => job.category.toLowerCase() === filters.category!.toLowerCase()
      );
    }

    // Apply sorting
    if (sort) {
      jobs.sort((a, b) => {
        let aValue: string | number = "";
        let bValue: string | number = "";

        switch (sort.field) {
          case "title":
            aValue = a.jobName;
            bValue = b.jobName;
            break;
          case "company":
            aValue = a.company || "";
            bValue = b.company || "";
            break;
          case "postedDate":
            aValue = new Date(a.createdAt).getTime();
            bValue = new Date(b.createdAt).getTime();
            break;
          case "salary":
            aValue = parseInt(a.salary.replace(/[^0-9]/g, "")) || 0;
            bValue = parseInt(b.salary.replace(/[^0-9]/g, "")) || 0;
            break;
        }

        if (sort.direction === "asc") {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    }

    const total = jobs.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const paginatedJobs = jobs.slice(startIndex, startIndex + limit);

    return {
      jobs: paginatedJobs,
      total,
      page,
      limit,
      totalPages,
    };
  } catch (error) {
    console.error("Error fetching jobs:", error);
    // Fallback to mock data if API fails
    return {
      jobs: mockJobs.slice(0, limit),
      total: mockJobs.length,
      page,
      limit,
      totalPages: Math.ceil(mockJobs.length / limit),
    };
  }
};

export const fetchJobById = async (
  jobId: string
): Promise<JobListing | null> => {
  try {
    // Call real API
    const response = (await api.get(`/jobs/public/${jobId}`)) as {
      data: JobListing;
    };
    const job = response.data;

    // Transform backend data to frontend format
    return {
      ...job,
      title: job.jobName,
      company: "Company", // Default company name since backend doesn't have this
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      location: "Remote", // Default location
      appliedCount: Math.floor(Math.random() * 10) + 1, // Random for display
      tags: job.requireSkill
        ? job.requireSkill.split(",").map((s) => s.trim())
        : [],
      postedDate: job.createdAt,
    };
  } catch (error) {
    console.error("Error fetching job detail:", error);
    // Fallback to mock data if API fails
    return mockJobs.find((job) => job.id === jobId) || null;
  }
};

export const useJobListings = (
  page: number = 1,
  limit: number = 9,
  filters?: JobFilters,
  sort?: JobSort
) => {
  return useQuery({
    queryKey: ["job-listings", page, limit, filters, sort],
    queryFn: () => fetchJobListings(page, limit, filters, sort),
  });
};

export const useJobById = (jobId: string) => {
  return useQuery({
    queryKey: ["job", jobId],
    queryFn: () => fetchJobById(jobId),
    enabled: !!jobId,
  });
};
