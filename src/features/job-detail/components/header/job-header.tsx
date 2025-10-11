import { LocalIcon } from "@/assets/icons/local-icon";
import { useParams } from "react-router-dom";
import { useJobApplicationStatus } from "../../api/application-status";

interface JobHeaderProps {
  jobName: string;
  jobType: string;
  location: string;
  companyName?: string;
  companyLogo?: string;
  onApply?: () => void;
}

export const JobHeader = ({
  jobName,
  jobType,
  location,
  companyName,
  companyLogo,
  onApply,
}: JobHeaderProps) => {
  const { jobId } = useParams<{ jobId: string }>();
  const { data: hasApplied, isLoading } = useJobApplicationStatus(jobId || "");

  const isLogoUrl = companyLogo?.startsWith("http");

  const handleApplyClick = () => {
    if (!hasApplied && onApply) {
      onApply();
    }
  };

  return (
    <div className="px-32 py-24 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
        <div className="flex items-center space-x-5">
          {companyLogo && isLogoUrl ? (
            <img
              src={companyLogo}
              alt={`${companyName} logo`}
              className="w-22 h-22 object-contain rounded-lg"
            />
          ) : (
            <LocalIcon
              iconName="JobLogo"
              width={88}
              height={90}
            />
          )}
          <div className="space-y-1">
            <h1 className="text-[32px] font-semibold text-gray-800">
              {jobName}
            </h1>
            <p className="text-[20px] text-gray-500">
              {companyName && `${companyName} - `}
              {location} • {jobType}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <figure className="py-3 cursor-pointer border-r border-gray-300 pr-8 mr-7 flex items-center h-full">
            <LocalIcon
              iconName="JobShare"
              width={32}
              height={33}
            />
          </figure>
          <button
            onClick={handleApplyClick}
            disabled={hasApplied || isLoading}
            className={`px-8 py-3 text-white text-lg rounded-md transition-colors ${
              hasApplied
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {isLoading ? "Checking..." : hasApplied ? "Applied" : "Apply"}
          </button>
        </div>
      </div>
    </div>
  );
};
