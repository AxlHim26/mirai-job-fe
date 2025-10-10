import React from "react";
import { CompanyProfile } from "@/types";

interface CompanyHeaderProps {
  profile: CompanyProfile;
}

export const CompanyHeader: React.FC<CompanyHeaderProps> = ({ profile }) => {
  return (
    <div className="bg-white p-6 mb-6">
      {/* Top Header */}
      <div className="flex items-start justify-between mb-6">
        {/* Left side - Logo and Company Info */}
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-white">
              {profile.logo}
            </span>
          </div>

          {/* Company Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              {profile.name}
            </h1>
            <p className="text-gray-600">{profile.website}</p>
          </div>
        </div>

        {/* Right side - Action Buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors font-medium">
            + Public View
          </button>
          <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors font-medium">
            + Profile Settings
          </button>
        </div>
      </div>

      {/* Company Stats Bar */}
      <div className="flex items-center gap-6 border-t border-gray-200 pt-4">
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="text-sm text-gray-600">{profile.founded}</span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="text-sm text-gray-600">{profile.employees}</span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm text-gray-600">{profile.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          <span className="text-sm text-gray-600">{profile.industry}</span>
        </div>
      </div>
    </div>
  );
};
