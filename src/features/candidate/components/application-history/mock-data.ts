export interface Application {
  id: number;
  company: string;
  logo: string; // URL to company logo
  role: string;
  dateApplied: string;
  status:
    | "In Review"
    | "Shortlisted"
    | "Offered"
    | "Interviewing"
    | "Unsuitable"
    | "Assessment"
    | "Hired";
  statusColor: string;
  salary?: string;
  location?: string;
  type?: "Full-time" | "Part-time" | "Contract" | "Internship";
}

export const mockApplications: Application[] = [
  {
    id: 1,
    company: "Nomad",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    role: "Social Media Assistant",
    dateApplied: "24 July 2021",
    status: "In Review",
    statusColor: "bg-yellow-100 text-yellow-700",
    salary: "$45,000 - $55,000",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    id: 2,
    company: "Udacity",
    logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center",
    role: "Social Media Assistant",
    dateApplied: "20 July 2021",
    status: "Shortlisted",
    statusColor: "bg-green-100 text-green-700",
    salary: "$50,000 - $60,000",
    location: "Mountain View, CA",
    type: "Full-time",
  },
  {
    id: 3,
    company: "Packer",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
    role: "Social Media Assistant",
    dateApplied: "16 July 2021",
    status: "Offered",
    statusColor: "bg-blue-100 text-blue-700",
    salary: "$48,000 - $58,000",
    location: "Austin, TX",
    type: "Full-time",
  },
  {
    id: 4,
    company: "Divvy",
    logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop&crop=center",
    role: "Social Media Assistant",
    dateApplied: "14 July 2021",
    status: "Interviewing",
    statusColor: "bg-orange-100 text-orange-700",
    salary: "$52,000 - $62,000",
    location: "Lehi, UT",
    type: "Full-time",
  },
  {
    id: 5,
    company: "DigitalOcean",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    role: "Social Media Assistant",
    dateApplied: "10 July 2021",
    status: "Unsuitable",
    statusColor: "bg-red-100 text-red-700",
    salary: "$55,000 - $65,000",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    id: 6,
    company: "Stripe",
    logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center",
    role: "Marketing Coordinator",
    dateApplied: "8 July 2021",
    status: "Assessment",
    statusColor: "bg-purple-100 text-purple-700",
    salary: "$60,000 - $70,000",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    id: 7,
    company: "Shopify",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
    role: "Content Creator",
    dateApplied: "5 July 2021",
    status: "Hired",
    statusColor: "bg-emerald-100 text-emerald-700",
    salary: "$65,000 - $75,000",
    location: "Ottawa, ON",
    type: "Full-time",
  },
  {
    id: 8,
    company: "GitHub",
    logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop&crop=center",
    role: "Social Media Manager",
    dateApplied: "2 July 2021",
    status: "Interviewing",
    statusColor: "bg-orange-100 text-orange-700",
    salary: "$70,000 - $80,000",
    location: "San Francisco, CA",
    type: "Full-time",
  },
];

export const getApplicationsByStatus = (status: string): Application[] => {
  if (status === "All") {
    return mockApplications;
  }
  return mockApplications.filter((app) => app.status === status);
};

export const sortApplications = (
  applications: Application[],
  sortBy: string,
  order: "asc" | "desc"
): Application[] => {
  const sorted = [...applications].sort((a, b) => {
    let aValue: string | Date, bValue: string | Date;

    switch (sortBy) {
      case "company":
        aValue = a.company.toLowerCase();
        bValue = b.company.toLowerCase();
        break;
      case "dateApplied":
        aValue = new Date(a.dateApplied);
        bValue = new Date(b.dateApplied);
        break;
      case "status":
        aValue = a.status;
        bValue = b.status;
        break;
      case "role":
        aValue = a.role.toLowerCase();
        bValue = b.role.toLowerCase();
        break;
      default:
        return 0;
    }

    if (aValue < bValue) return order === "asc" ? -1 : 1;
    if (aValue > bValue) return order === "asc" ? 1 : -1;
    return 0;
  });

  return sorted;
};
