import React from "react";
import { useCandidateProfile } from "../../api/profile/profile";
import { CandidateHeader } from "./candidate-header";
import { CandidateContent } from "./candidate-content";
import { WorkingSection } from "./working-section";
import { TeamSection } from "./team-section";
import { BenefitSection } from "./benefit-section";

export const CandidateProfilePage: React.FC = () => {
  const { data: candidateData, isLoading, error } = useCandidateProfile();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">
            Error loading profile. Please try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <CandidateHeader candidateData={candidateData} />

        {/* Main Content */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            <CandidateContent candidateData={candidateData} />
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            <WorkingSection />
            <TeamSection />
            <BenefitSection />
          </div>
        </div>
      </div>
    </div>
  );
};
