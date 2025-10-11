import React from "react";
import { Users } from "lucide-react";

export const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
    },
    {
      name: "Emily Davis",
      role: "UX Designer",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    },
    {
      name: "Alex Rodriguez",
      role: "DevOps Engineer",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Users className="w-5 h-5" />
        Team
      </h2>
      <div className="space-y-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <img
              src={member.avatar}
              alt={member.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {member.name}
              </p>
              <p className="text-xs text-gray-500 truncate">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Collaborative team of 12+ professionals working on innovative
          projects.
        </p>
      </div>
    </div>
  );
};
