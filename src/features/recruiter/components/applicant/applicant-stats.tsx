import React from "react";
import { Users, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Applicant } from "@/types";

interface ApplicantStatsProps {
  applicants: Applicant[];
  loading?: boolean;
}

export const ApplicantStats: React.FC<ApplicantStatsProps> = ({
  applicants,
  loading = false,
}) => {
  const stats = React.useMemo(() => {
    const total = applicants.length;
    const pending = applicants.filter((a) => a.status === "Pending").length;
    const reviewing = applicants.filter((a) => a.status === "Reviewing").length;
    const interview = applicants.filter((a) => a.status === "Interview").length;
    const hired = applicants.filter((a) => a.status === "Hired").length;
    const rejected = applicants.filter((a) => a.status === "Rejected").length;

    return {
      total,
      pending,
      reviewing,
      interview,
      hired,
      rejected,
      hireRate: total > 0 ? Math.round((hired / total) * 100) : 0,
    };
  }, [applicants]);

  const statCards = [
    {
      title: "Total Applicants",
      value: stats.total,
      icon: Users,
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Pending Review",
      value: stats.pending,
      icon: Clock,
      color: "bg-yellow-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
    {
      title: "In Review",
      value: stats.reviewing,
      icon: AlertCircle,
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Interview Stage",
      value: stats.interview,
      icon: Users,
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Hired",
      value: stats.hired,
      icon: CheckCircle,
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Rejected",
      value: stats.rejected,
      icon: XCircle,
      color: "bg-red-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-8 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
      {statCards.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.title}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <Icon className={`w-5 h-5 ${stat.textColor}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
