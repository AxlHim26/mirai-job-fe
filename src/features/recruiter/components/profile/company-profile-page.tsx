import React from "react";
import { useCompanyProfile } from "../../api/profile";
import {
  CompanyHeader,
  CompanyContent,
  WorkingSection,
  TeamSection,
  BenefitSection,
} from "./";

export const CompanyProfilePage: React.FC = () => {
  const { data: profileResponse, isLoading, error } = useCompanyProfile();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-32 bg-gray-200 rounded-lg mb-6"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="h-64 bg-gray-200 rounded-lg"></div>
              <div className="h-64 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg mb-6"></div>
            <div className="h-64 bg-gray-200 rounded-lg mb-6"></div>
            <div className="h-64 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-center">
              <div className="text-red-600 text-lg font-medium mb-2">
                Error loading company profile
              </div>
              <div className="text-gray-500 text-sm">
                Please try refreshing the page or contact support if the problem
                persists.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!profileResponse?.profile) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-center">
              <div className="text-gray-600 text-lg font-medium mb-2">
                No company profile found
              </div>
              <div className="text-gray-500 text-sm">
                Please create a company profile to get started.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Company Header */}
        <CompanyHeader profile={profileResponse.profile} />

        {/* Main Content - Two Columns */}
        <CompanyContent profile={profileResponse.profile} />

        {/* Working at Company Section */}
        <WorkingSection profile={profileResponse.profile} />

        {/* Team Section */}
        <TeamSection profile={profileResponse.profile} />

        {/* Benefit Section */}
        <BenefitSection profile={profileResponse.profile} />
      </div>
    </div>
  );
};
