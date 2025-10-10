import React, { useState } from "react";
import {
  MoreVertical,
  Eye,
  Trash2,
  Edit,
  Star,
  Calendar,
  Phone,
  Mail,
  FileText,
} from "lucide-react";
import { Applicant, ApplicantStatus } from "@/types";
import {
  useUpdateApplicantStatus,
  useDeleteApplicant,
} from "../../api/applicant";

interface ApplicantTableProps {
  applicants: Applicant[];
  onViewDetails?: (applicant: Applicant) => void;
  onEdit?: (applicant: Applicant) => void;
  loading?: boolean;
}

const statusColors: Record<ApplicantStatus, string> = {
  Pending: "bg-yellow-100 text-yellow-800",
  Reviewing: "bg-blue-100 text-blue-800",
  Interview: "bg-purple-100 text-purple-800",
  Rejected: "bg-red-100 text-red-800",
  Hired: "bg-green-100 text-green-800",
};

const statusOptions: { value: ApplicantStatus; label: string }[] = [
  { value: "Pending", label: "Pending" },
  { value: "Reviewing", label: "Reviewing" },
  { value: "Interview", label: "Interview" },
  { value: "Rejected", label: "Rejected" },
  { value: "Hired", label: "Hired" },
];

export const ApplicantTable: React.FC<ApplicantTableProps> = ({
  applicants,
  onViewDetails,
  onEdit,
  loading = false,
}) => {
  const [showActionsMenu, setShowActionsMenu] = useState<number | null>(null);
  const [showStatusDropdown, setShowStatusDropdown] = useState<number | null>(
    null
  );

  const updateStatusMutation = useUpdateApplicantStatus();
  const deleteMutation = useDeleteApplicant();

  const handleStatusChange = (
    applicantId: number,
    newStatus: ApplicantStatus
  ) => {
    updateStatusMutation.mutate({
      applicantId,
      status: newStatus,
    });
    setShowStatusDropdown(null);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this applicant?")) {
      deleteMutation.mutate();
    }
    setShowActionsMenu(null);
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
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Applicant
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                Job Title
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                Applied Date
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                Rating
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden xl:table-cell">
                Experience
              </th>
              <th className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {applicants.map((applicant) => (
              <tr
                key={applicant.id}
                className="hover:bg-gray-50"
              >
                <td className="px-4 sm:px-6 py-4">
                  <div className="flex items-center">
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
                    <div className="ml-4">
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
                      {/* Show job title on mobile */}
                      <div className="text-sm text-gray-900 sm:hidden mt-1">
                        {applicant.jobTitle}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                  <div className="text-sm text-gray-900">
                    {applicant.jobTitle}
                  </div>
                  <div className="text-sm text-gray-500">
                    {applicant.skills.slice(0, 3).join(", ")}
                    {applicant.skills.length > 3 && "..."}
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap hidden md:table-cell">
                  <div className="text-sm text-gray-900 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(applicant.appliedDate).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div className="relative">
                    <button
                      onClick={() =>
                        setShowStatusDropdown(
                          showStatusDropdown === applicant.id
                            ? null
                            : applicant.id
                        )
                      }
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[applicant.status]} hover:opacity-80 transition-opacity`}
                    >
                      {applicant.status}
                    </button>
                    {showStatusDropdown === applicant.id && (
                      <div className="absolute z-10 mt-1 w-32 bg-white rounded-md shadow-lg border border-gray-200">
                        {statusOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() =>
                              handleStatusChange(applicant.id, option.value)
                            }
                            className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
                              option.value === applicant.status
                                ? "bg-blue-50 text-blue-600"
                                : "text-gray-700"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap hidden lg:table-cell">
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
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden xl:table-cell">
                  {applicant.experience}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="relative">
                    <button
                      onClick={() =>
                        setShowActionsMenu(
                          showActionsMenu === applicant.id ? null : applicant.id
                        )
                      }
                      className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                    {showActionsMenu === applicant.id && (
                      <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                        <div className="py-1">
                          {onViewDetails && (
                            <button
                              onClick={() => {
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
                              onClick={() =>
                                handleViewResume(applicant.resumeUrl!)
                              }
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              <FileText className="w-4 h-4 mr-2" />
                              View Resume
                            </button>
                          )}
                          {onEdit && (
                            <button
                              onClick={() => {
                                onEdit(applicant);
                                setShowActionsMenu(null);
                              }}
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete()}
                            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </button>
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
