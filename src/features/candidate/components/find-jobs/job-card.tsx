import { JobListing } from "../../api/jobs";
import { Button } from "@/components/ui";
import { useNavigate } from "react-router-dom";
import { paths } from "@/config/paths";

type JobCardProps = {
  job: JobListing;
};

export const JobCard = ({ job }: JobCardProps) => {
  const navigate = useNavigate();

  const handleJobClick = () => {
    navigate(paths.candidate.jobDetail.getHref(job.id));
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

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start gap-4 mb-4">
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
          <div className="flex flex-wrap gap-2 mb-3">
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
      </div>

      <div className="space-y-3">
        <Button
          variant="filled"
          size="sm"
          onClick={handleJobClick}
          className="w-full"
        >
          Apply
        </Button>

        <div className="text-center">
          <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${(job.appliedCount / job.capacity) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500">
            {job.appliedCount} applied of {job.capacity} capacity
          </p>
        </div>
      </div>
    </div>
  );
};
