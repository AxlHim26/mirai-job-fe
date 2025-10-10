import React from "react";
import { CompanyProfile } from "@/types";

interface WorkingSectionProps {
  profile: CompanyProfile;
}

export const WorkingSection: React.FC<WorkingSectionProps> = ({ profile }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          Working at {profile.name}
        </h2>
        <div className="flex gap-2">
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Images Grid - Always show mock data */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Large Image */}
        <div className="md:col-span-2">
          <img
            src={profile.workingImages[0]}
            alt="Working at company"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        {/* Two Smaller Images */}
        <div className="space-y-4">
          <img
            src={profile.workingImages[1]}
            alt="Team collaboration"
            className="w-full h-38 object-cover rounded-lg"
          />
          <img
            src={profile.workingImages[2]}
            alt="Office celebration"
            className="w-full h-38 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
