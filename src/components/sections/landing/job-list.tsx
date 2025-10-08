import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Grid,
  List,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type SectionKey = "employment" | "categories" | "jobLevel" | "salary";

interface FilterItem {
  label: string;
  value: string;
}

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  logo: string;
  logoColor: string;
  type: string;
  tags: string[];
  applied: number;
  capacity: number;
}

const JobList = () => {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  const [expandedSections, setExpandedSections] = useState<
    Record<SectionKey, boolean>
  >({
    employment: true,
    categories: true,
    jobLevel: true,
    salary: true,
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const jobsPerPage = 3; // 👈 số job mỗi trang

  const [filters] = useState<Record<SectionKey, string[]>>({
    employment: [],
    categories: ["Business", "Technology"],
    jobLevel: ["Director"],
    salary: ["$3000 or above"],
  });

  const jobs: Job[] = [
    {
      id: 1,
      title: "Social Media Assistant",
      company: "Nomad",
      location: "Paris, France",
      logo: "🏢",
      logoColor: "bg-emerald-500",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 5,
      capacity: 10,
    },
    {
      id: 2,
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Fransisco, USA",
      logo: "📦",
      logoColor: "bg-blue-500",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 2,
      capacity: 10,
    },
    {
      id: 3,
      title: "Interactive Developer",
      company: "Terraform",
      location: "Hamburg, Germany",
      logo: "🔷",
      logoColor: "bg-cyan-500",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 8,
      capacity: 12,
    },
    {
      id: 4,
      title: "Email Marketing",
      company: "Revolut",
      location: "Madrid, Spain",
      logo: "💳",
      logoColor: "bg-gray-800",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 0,
      capacity: 10,
    },
    {
      id: 5,
      title: "Lead Engineer",
      company: "Canva",
      location: "Ankara, Turkey",
      logo: "🎨",
      logoColor: "bg-teal-500",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 5,
      capacity: 10,
    },
    {
      id: 6,
      title: "Product Designer",
      company: "ClassPass",
      location: "Berlin, Germany",
      logo: "⚡",
      logoColor: "bg-blue-600",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 5,
      capacity: 10,
    },
    {
      id: 7,
      title: "Customer Manager",
      company: "Pitch",
      location: "Berlin, Germany",
      logo: "⚫",
      logoColor: "bg-black",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 5,
      capacity: 10,
    },
  ];

  const toggleSection = (section: SectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const FilterSection = ({
    title,
    items,
    section,
  }: {
    title: string;
    items: FilterItem[];
    section: SectionKey;
  }) => (
    <div className="mb-6">
      <button
        onClick={() => toggleSection(section)}
        className="flex items-center justify-between w-full mb-3 font-semibold text-gray-900"
      >
        <span>{title}</span>
        {expandedSections[section] ? (
          <ChevronUp size={20} />
        ) : (
          <ChevronDown size={20} />
        )}
      </button>
      {expandedSections[section] && (
        <div className="space-y-2">
          {items.map((item, idx) => (
            <label
              key={idx}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters[section]?.includes(item.value)}
                onChange={() => {}}
                className="w-4 h-4 accent-indigo-600"
              />
              <span className="text-sm text-gray-700">{item.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto flex gap-6">
        {/* Sidebar Filters */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <FilterSection
              title="Type of Employment"
              section="employment"
              items={[
                { label: "Full-time (3)", value: "full-time" },
                { label: "Part-Time (5)", value: "part-time" },
                { label: "Remote (2)", value: "remote" },
                { label: "Internship (24)", value: "internship" },
                { label: "Contract (3)", value: "contract" },
              ]}
            />

            <FilterSection
              title="Categories"
              section="categories"
              items={[
                { label: "Design (24)", value: "Design" },
                { label: "Sales (3)", value: "Sales" },
                { label: "Marketing (3)", value: "Marketing" },
                { label: "Business (3)", value: "Business" },
                { label: "Human Resource (6)", value: "Human Resource" },
                { label: "Finance (4)", value: "Finance" },
                { label: "Engineering (4)", value: "Engineering" },
                { label: "Technology (5)", value: "Technology" },
              ]}
            />

            <FilterSection
              title="Job Level"
              section="jobLevel"
              items={[
                { label: "Entry Level (57)", value: "Entry Level" },
                { label: "Mid Level (3)", value: "Mid Level" },
                { label: "Senior Level (5)", value: "Senior Level" },
                { label: "Director (12)", value: "Director" },
                { label: "VP or Above (8)", value: "VP or Above" },
              ]}
            />

            <FilterSection
              title="Salary Range"
              section="salary"
              items={[
                { label: "$700 - $1000 (4)", value: "$700 - $1000" },
                { label: "$100 - $1500 (6)", value: "$100 - $1500" },
                { label: "$1500 - $2000 (10)", value: "$1500 - $2000" },
                { label: "$3000 or above (4)", value: "$3000 or above" },
              ]}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">All Jobs</h1>
                <p className="text-sm text-gray-500 mt-1">Showing 73 results</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="border border-gray-300 rounded px-3 py-1.5 text-sm">
                    <option>Most relevant</option>
                    <option>Most recent</option>
                    <option>Salary</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${
                      viewMode === "grid" ? "bg-gray-200" : "hover:bg-gray-100"
                    }`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded ${
                      viewMode === "list"
                        ? "bg-indigo-600 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div
                      className={`w-12 h-12 ${job.logoColor} rounded-lg flex items-center justify-center text-2xl flex-shrink-0`}
                    >
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {job.company} • {job.location}
                      </p>
                      <div className="flex gap-2 mt-3">
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium">
                          {job.type}
                        </span>
                        {job.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 border border-amber-400 text-amber-700 text-xs rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                      Apply
                    </button>
                    <p className="text-xs text-gray-500 mt-2">
                      <span className="font-semibold text-gray-900">
                        {job.applied} applied
                      </span>{" "}
                      of {job.capacity} capacity
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              className="p-2 hover:bg-gray-100 rounded disabled:opacity-40"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={20} />
            </button>

            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-10 h-10 rounded font-medium ${
                      currentPage === page
                        ? "bg-indigo-600 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                );
              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return <span key={page}>...</span>;
              }
              return null;
            })}

            <button
              className="p-2 hover:bg-gray-100 rounded disabled:opacity-40"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
