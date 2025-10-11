import { MoreVertical, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui";
import {
  useCandidateApplications,
  CandidateApplicationsSort,
} from "../../api/application-history";

type SortField = "company" | "dateApplied" | "status" | "role";
type SortOrder = "asc" | "desc";

type ApplicationTablesProps = {
  activeTab: string;
};

export const ApplicationTables = ({ activeTab }: ApplicationTablesProps) => {
  const [sortField, setSortField] = useState<SortField>("dateApplied");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  // Map frontend sort field to API sort field
  const getApiSortField = (
    field: SortField
  ): CandidateApplicationsSort["field"] => {
    switch (field) {
      case "company":
        return "company";
      case "role":
        return "role";
      case "dateApplied":
        return "dateApplied";
      default:
        return "dateApplied";
    }
  };

  const sort: CandidateApplicationsSort = {
    field: getApiSortField(sortField),
    direction: sortOrder,
  };

  const { data, isLoading, error } = useCandidateApplications(
    1,
    100,
    { status: activeTab },
    sort
  );

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

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "reviewed":
        return "bg-blue-100 text-blue-800";
      case "interview":
        return "bg-purple-100 text-purple-800";
      case "offered":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Error loading applications</p>
      </div>
    );
  }

  const applications = data?.applications || [];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
              #
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              onClick={() => handleSort("company")}
            >
              <div className="flex items-center gap-1">
                Company Name
                {getSortIcon("company")}
              </div>
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              onClick={() => handleSort("role")}
            >
              <div className="flex items-center gap-1">
                Roles
                {getSortIcon("role")}
              </div>
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              onClick={() => handleSort("dateApplied")}
            >
              <div className="flex items-center gap-1">
                Date Applied
                {getSortIcon("dateApplied")}
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
            <th className="px-6 py-3 w-16"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {applications.map((app, index) => (
            <tr
              key={app.id}
              className="hover:bg-gray-50"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <img
                    src={`https://ui-avatars.com/api/?name=${app.companyName}&background=3b82f6&color=fff&size=40`}
                    alt={`${app.companyName} logo`}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-900">
                      {app.companyName}
                    </span>
                    {app.location && (
                      <p className="text-xs text-gray-500">{app.location}</p>
                    )}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>
                  <span className="text-sm text-gray-900">{app.jobName}</span>
                  {app.salary && (
                    <p className="text-xs text-gray-500">${app.salary}</p>
                  )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {app.appliedAt}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}
                >
                  {app.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <Button
                  variant="icon"
                  size="iconSm"
                >
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
