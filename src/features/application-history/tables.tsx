import { MoreVertical } from "lucide-react";

export const ApplicationTables = () => {
  const applications: Application[] = [
    {
      id: 1,
      company: "Nomad",
      logo: "🏢",
      role: "Social Media Assistant",
      dateApplied: "24 July 2021",
      status: "In Review",
      statusColor: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 2,
      company: "Udacity",
      logo: "🎓",
      role: "Social Media Assistant",
      dateApplied: "20 July 2021",
      status: "Shortlisted",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: 3,
      company: "Packer",
      logo: "📦",
      role: "Social Media Assistant",
      dateApplied: "16 July 2021",
      status: "Offered",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 4,
      company: "Divvy",
      logo: "💳",
      role: "Social Media Assistant",
      dateApplied: "14 July 2021",
      status: "Interviewing",
      statusColor: "bg-orange-100 text-orange-700",
    },
    {
      id: 5,
      company: "DigitalOcean",
      logo: "🌊",
      role: "Social Media Assistant",
      dateApplied: "10 July 2021",
      status: "Unsuitable",
      statusColor: "bg-red-100 text-red-700",
    },
  ];

  interface Application {
    id: number;
    company: string;
    logo: string;
    role: string;
    dateApplied: string;
    status:
      | "In Review"
      | "Shortlisted"
      | "Offered"
      | "Interviewing"
      | "Unsuitable";
    statusColor: string;
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
              #
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Roles
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date Applied
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 w-16"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {applications.map((app) => (
            <tr
              key={app.id}
              className="hover:bg-gray-50"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {app.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-lg">
                    {app.logo}
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {app.company}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {app.role}
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
