import { PublicJobListing } from "../../api/jobs";
import { Button } from "@/components/ui";
import { Link } from "react-router-dom";
import { paths } from "@/config/paths";

type PublicJobListItemProps = {
  job: PublicJobListing;
};

const getJobTypeColor = (jobType: string) => {
  switch (jobType) {
    case "Fulltime":
      return "bg-emerald-50 text-emerald-700";
    case "Part-time":
      return "bg-green-50 text-green-700";
    case "Contract":
      return "bg-purple-50 text-purple-700";
    case "Internship":
      return "bg-yellow-50 text-yellow-700";
    case "Remote":
      return "bg-indigo-50 text-indigo-700";
    default:
      return "bg-gray-50 text-gray-700";
  }
};

const getTagColor = (tag: string) => {
  switch (tag.toLowerCase()) {
    case "marketing":
      return "bg-amber-50 text-amber-700 border-amber-400";
    case "design":
      return "bg-amber-50 text-amber-700 border-amber-400";
    default:
      return "bg-amber-50 text-amber-700 border-amber-400";
  }
};

export const PublicJobListItem = ({ job }: PublicJobListItemProps) => {
  const progressPercentage = (job.applicants / job.capacity) * 100;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={job.companyLogo}
              alt={job.companyName}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {job.jobTitle}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              {job.companyName} • {job.location}
            </p>
            <div className="flex flex-wrap gap-2">
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${getJobTypeColor(job.jobType)}`}
              >
                {job.jobType}
              </span>
              {job.tags.map((tag: string) => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-xs font-medium rounded-full border ${getTagColor(tag)}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="text-right">
          <Link to={paths.home.children.jobDesc.getHref(job.id)}>
            <Button
              variant="filled"
              className="mb-4 bg-purple-600 hover:bg-purple-700"
            >
              Apply
            </Button>
          </Link>
          <p className="text-xs text-gray-500 mb-2">
            <span className="font-semibold text-gray-900">
              {job.applicants} applied
            </span>{" "}
            of {job.capacity} capacity
          </p>
          <div className="w-32 bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
