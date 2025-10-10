import { MoreVertical, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { sortApplications, getApplicationsByStatus } from "./mock-data";

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

  // Filter applications based on active tab
  const filteredApplications = getApplicationsByStatus(activeTab);
  const sortedApplications = sortApplications(
    filteredApplications,
    sortField,
    sortOrder
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
          {sortedApplications.map((app) => (
            <tr
              key={app.id}
              className="hover:bg-gray-50"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {app.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <img
                    src={app.logo}
                    alt={`${app.company} logo`}
                    className="w-10 h-10 rounded-lg object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${app.company}&background=3b82f6&color=fff&size=40`;
                    }}
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-900">
                      {app.company}
                    </span>
                    {app.location && (
                      <p className="text-xs text-gray-500">{app.location}</p>
                    )}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>
                  <span className="text-sm text-gray-900">{app.role}</span>
                  {app.salary && (
                    <p className="text-xs text-gray-500">{app.salary}</p>
                  )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {app.dateApplied}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${app.statusColor}`}
                >
                  {app.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
