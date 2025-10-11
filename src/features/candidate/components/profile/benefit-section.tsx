import React from "react";
import { Heart, Coffee, Zap, Briefcase } from "lucide-react";

export const BenefitSection: React.FC = () => {
  const benefits = [
    {
      icon: <Heart className="w-5 h-5 text-red-500" />,
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family",
    },
    {
      icon: <Coffee className="w-5 h-5 text-amber-500" />,
      title: "Flexible Hours",
      description: "Work-life balance with flexible scheduling options",
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      title: "Learning Budget",
      description: "$2,000 annual budget for courses and conferences",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-blue-500" />,
      title: "Remote Work",
      description: "Work from anywhere with our remote-first policy",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h2>
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex-shrink-0 mt-0.5">{benefit.icon}</div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Plus many more benefits including stock options, gym membership, and
          team retreats.
        </p>
      </div>
    </div>
  );
};
