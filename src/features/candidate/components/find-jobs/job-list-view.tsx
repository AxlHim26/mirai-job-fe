import { JobListing } from "../../api/jobs";
import { Button } from "@/components/ui";
import { useNavigate } from "react-router-dom";
import { paths } from "@/config/paths";

type JobListViewProps = {
  jobs: JobListing[];
  loading?: boolean;
};

export const JobListView = ({ jobs, loading }: JobListViewProps) => {
  const navigate = useNavigate();

  const handleJobClick = (jobId: string) => {
    navigate(paths.candidate.jobDetail.getHref(jobId));
  };

  const getJobTypeColor = (jobType: JobListing["jobType"]) => {
    switch (jobType) {
      case "Full-time":
        return "bg-green-100 text-green-800";
      case "Part-time":
        return "bg-blue-100 text-blue-800";
      case "Contract":
        return "bg-purple-100 text-purple-800";
      case "Internship":
        return "bg-orange-100 text-orange-800";
      case "Remote":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "marketing":
        return "bg-orange-100 text-orange-800";
      case "design":
        return "bg-blue-100 text-blue-800";
      case "business":
        return "bg-green-100 text-green-800";
      case "engineering":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-pulse"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-2"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                  <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                </div>
              </div>
              <div className="w-20 h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-2">No jobs found</div>
        <div className="text-gray-400 text-sm">
          Try adjusting your search criteria
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4">
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {job.company} • {job.location}
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${getJobTypeColor(job.jobType)}`}
                >
                  {job.jobType}
                </span>
                {job.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right">
              <Button
                variant="filled"
                size="sm"
                onClick={() => handleJobClick(job.id)}
                className="mb-2"
              >
                Apply
              </Button>
              <div className="text-xs text-gray-500">
                {job.appliedCount} applied of {job.capacity} capacity
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
