import { MoreVertical } from "lucide-react";

export const DashboardApplicantHistory = () => {
  const applications = [
    {
      id: 1,
      company: "Nomad",
      location: "Paris, France",
      type: "Full-Time",
      date: "24 July 2021",
      status: "In Review",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 2,
      company: "Udacity",
      location: "New York, USA",
      type: "Full-Time",
      date: "23 July 2021",
      status: "Shortlisted",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 3,
      company: "Packer",
      location: "Madrid, Spain",
      type: "Full-Time",
      date: "22 July 2021",
      status: "Declined",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Review":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "Shortlisted":
        return "text-indigo-600 bg-indigo-50 border-indigo-200";
      case "Declined":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 mt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Recent Applications History
      </h3>

      <div className="space-y-4">
        {applications.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
          >
            <div className="flex items-center gap-4 flex-1">
              <div
                className={`w-12 h-12 ${app.bgColor} rounded-lg flex items-center justify-center`}
              >
                <span className={`text-2xl font-bold ${app.iconColor}`}>
                  {app.company[0]}
                </span>
              </div>

              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">
                  Social Media Assistant
                </h4>
                <p className="text-sm text-gray-500">
                  {app.company} · {app.location} · {app.type}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">Date Applied</p>
                <p className="text-sm font-medium text-gray-800">{app.date}</p>
              </div>

              <span
                className={`px-4 py-1 rounded-full text-sm font-medium border ${getStatusColor(app.status)}`}
              >
                {app.status}
              </span>

              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="text-indigo-600 font-medium text-sm mt-6 hover:text-indigo-700 flex items-center gap-2 mx-auto">
        View all applications history
        <span>→</span>
      </button>
    </div>
  );
};
