import {
  MoreVertical,
  ChevronUp,
  ChevronDown,
  Eye,
  Star,
  Calendar,
  Phone,
  Mail,
  FileText,
} from "lucide-react";
import { useState } from "react";
import { Applicant, ApplicantStatus } from "@/types";

type SortField = "fullName" | "jobTitle" | "appliedDate" | "status" | "rating";
type SortOrder = "asc" | "desc";

type ApplicantTableProps = {
  applicants: Applicant[];
  onViewDetails?: (applicant: Applicant) => void;
  loading?: boolean;
};

const statusColors: Record<ApplicantStatus, string> = {
  Pending: "bg-yellow-100 text-yellow-800",
  Reviewing: "bg-blue-100 text-blue-800",
  Interview: "bg-purple-100 text-purple-800",
  Rejected: "bg-red-100 text-red-800",
  Hired: "bg-green-100 text-green-800",
};

export const ApplicantTable = ({
  applicants,
  onViewDetails,
  loading = false,
}: ApplicantTableProps) => {
  const [sortField, setSortField] = useState<SortField>("appliedDate");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [showActionsMenu, setShowActionsMenu] = useState<number | null>(null);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ChevronUp className="w-4 h-4 text-gray-400" />;
    }
    return sortOrder === "asc" ? (
      <ChevronUp className="w-4 h-4 text-gray-600" />
    ) : (
      <ChevronDown className="w-4 h-4 text-gray-600" />
    );
  };

  const handleViewResume = (resumeUrl: string) => {
    window.open(resumeUrl, "_blank");
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-12 bg-gray-200 rounded"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
                #
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("fullName")}
              >
                <div className="flex items-center gap-1">
                  Applicant
                  {getSortIcon("fullName")}
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("jobTitle")}
              >
                <div className="flex items-center gap-1">
                  Job Title
                  {getSortIcon("jobTitle")}
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("appliedDate")}
              >
                <div className="flex items-center gap-1">
                  Date Applied
                  {getSortIcon("appliedDate")}
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("status")}
              >
                <div className="flex items-center gap-1">
                  Status
                  {getSortIcon("status")}
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("rating")}
              >
                <div className="flex items-center gap-1">
                  Rating
                  {getSortIcon("rating")}
                </div>
              </th>
              <th className="px-6 py-3 w-16"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {applicants.map((applicant) => (
              <tr
                key={applicant.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => onViewDetails?.(applicant)}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {applicant.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-10 w-10">
                      {applicant.avatar ? (
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-medium">
                          {applicant.avatar}
                        </div>
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                          <span className="text-gray-600 text-sm font-medium">
                            {applicant.fullName.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {applicant.fullName}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Mail className="w-3 h-3 mr-1" />
                        <span className="truncate max-w-[150px]">
                          {applicant.email}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        <span className="truncate">{applicant.phone}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <span className="text-sm text-gray-900">
                      {applicant.jobTitle}
                    </span>
                    <div className="text-sm text-gray-500">
                      {applicant.skills.slice(0, 3).join(", ")}
                      {applicant.skills.length > 3 && "..."}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(applicant.appliedDate).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[applicant.status]}`}
                  >
                    {applicant.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {applicant.rating ? (
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-900">
                        {applicant.rating}
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm text-gray-400">No rating</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowActionsMenu(
                          showActionsMenu === applicant.id ? null : applicant.id
                        );
                      }}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>
                    {showActionsMenu === applicant.id && (
                      <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                        <div className="py-1">
                          {onViewDetails && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onViewDetails(applicant);
                                setShowActionsMenu(null);
                              }}
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </button>
                          )}
                          {applicant.resumeUrl && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleViewResume(applicant.resumeUrl!);
                                setShowActionsMenu(null);
                              }}
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              <FileText className="w-4 h-4 mr-2" />
                              View Resume
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {applicants.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">No applicants found</div>
          <div className="text-gray-400 text-sm mt-1">
            Try adjusting your filters or check back later
          </div>
        </div>
      )}
    </div>
  );
};
