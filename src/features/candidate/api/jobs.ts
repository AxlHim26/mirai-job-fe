import { useQuery } from "@tanstack/react-query";

export type JobListing = {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  jobType: "Full-time" | "Part-time" | "Contract" | "Internship" | "Remote";
  category: string;
  salary?: string;
  appliedCount: number;
  capacity: number;
  tags: string[];
  postedDate: string;
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

// Mock data for FE-only API
const mockJobs: JobListing[] = [
  {
    id: "1",
    title: "Social Media Assistant",
    company: "Nomad",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    location: "Paris, France",
    jobType: "Full-time",
    category: "Marketing",
    salary: "$45,000 - $55,000",
    appliedCount: 5,
    capacity: 10,
    tags: ["Marketing", "Design"],
    postedDate: "2024-01-15",
  },
  {
    id: "2",
    title: "Brand Designer",
    company: "Dropbox",
    logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center",
    location: "Paris, France",
    jobType: "Full-time",
    category: "Design",
    salary: "$50,000 - $60,000",
    appliedCount: 5,
    capacity: 10,
    tags: ["Business", "Design"],
    postedDate: "2024-01-14",
  },
  {
    id: "3",
    title: "Interactive Developer",
    company: "Terraform",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
    location: "Berlin, Germany",
    jobType: "Full-time",
    category: "Engineering",
    salary: "$60,000 - $70,000",
    appliedCount: 5,
    capacity: 10,
    tags: ["Marketing", "Design"],
    postedDate: "2024-01-13",
  },
  {
    id: "4",
    title: "Email Marketing",
    company: "Revolut",
    logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop&crop=center",
    location: "Madrid, Spain",
    jobType: "Internship",
    category: "Marketing",
    salary: "$30,000 - $40,000",
    appliedCount: 5,
    capacity: 10,
    tags: ["Marketing", "Design"],
    postedDate: "2024-01-12",
  },
  {
    id: "5",
    title: "Product Designer",
    company: "ClassPass",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    location: "Berlin, Germany",
    jobType: "Full-time",
    category: "Design",
    salary: "$55,000 - $65,000",
    appliedCount: 5,
    capacity: 10,
    tags: ["Business", "Design"],
    postedDate: "2024-01-11",
  },
  {
    id: "6",
    title: "Interactive Developer",
    company: "Canva",
    logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center",
    location: "Birmingham, UK",
    jobType: "Full-time",
    category: "Engineering",
    salary: "$65,000 - $75,000",
    appliedCount: 5,
    capacity: 10,
    tags: ["Marketing", "Design"],
    postedDate: "2024-01-10",
  },
  {
    id: "7",
    title: "Customer Manager",
    company: "Pitch",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
    location: "Roma, Italy",
    jobType: "Full-time",
    category: "Business",
    salary: "$50,000 - $60,000",
    appliedCount: 5,
    capacity: 10,
    tags: ["Marketing", "Design"],
    postedDate: "2024-01-09",
  },
  {
    id: "8",
    title: "Visual Designer",
    company: "Blinkist",
    logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop&crop=center",
    location: "Lyon, France",
    jobType: "Full-time",
    category: "Design",
    salary: "$45,000 - $55,000",
    appliedCount: 5,
    capacity: 10,
    tags: ["Business", "Design"],
    postedDate: "2024-01-08",
  },
  {
    id: "9",
    title: "Java Developer",
    company: "GoDaddy",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    location: "Oslo, Sweden",
    jobType: "Part-time",
    category: "Engineering",
    salary: "$40,000 - $50,000",
    appliedCount: 5,
    capacity: 10,
    tags: ["Marketing", "Design"],
    postedDate: "2024-01-07",
  },
];

export const fetchJobListings = async (
  page: number = 1,
  limit: number = 9,
  filters?: JobFilters,
  sort?: JobSort
): Promise<JobListingsResponse> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  let filteredJobs = [...mockJobs];

  // Apply filters
  if (filters?.jobType) {
    filteredJobs = filteredJobs.filter(
      (job) => job.jobType === filters.jobType
    );
  }

  if (filters?.category) {
    filteredJobs = filteredJobs.filter(
      (job) => job.category === filters.category
    );
  }

  if (filters?.location) {
    filteredJobs = filteredJobs.filter((job) =>
      job.location.toLowerCase().includes(filters.location!.toLowerCase())
    );
  }

  if (filters?.search) {
    const searchTerm = filters.search.toLowerCase();
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm) ||
        job.category.toLowerCase().includes(searchTerm)
    );
  }

  // Apply sorting
  if (sort) {
    filteredJobs.sort((a, b) => {
      let aValue: string | number = a[sort.field] || "";
      let bValue: string | number = b[sort.field] || "";

      if (sort.field === "postedDate") {
        aValue = new Date(aValue).getTime();
        bValue = new Date(bValue).getTime();
      }

      if (sort.direction === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }

  const total = filteredJobs.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const jobs = filteredJobs.slice(startIndex, startIndex + limit);

  return {
    jobs,
    total,
    page,
    limit,
    totalPages,
  };
};

export const fetchJobById = async (
  jobId: string
): Promise<JobListing | null> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  return mockJobs.find((job) => job.id === jobId) || null;
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
