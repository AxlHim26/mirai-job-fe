import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { fetchApplicantDetail } from "@/features/recruiter/api/applicant-detail/applicant-detail";
import { ApplicantSummary } from "./applicant-summary";
import { ApplicantTabs } from "./applicant-tabs";
import { paths } from "@/config/paths";

export const ApplicantDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  const {
    data: applicantResponse,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["applicantDetail", id],
    queryFn: () => fetchApplicantDetail(),
    enabled: !!id,
  });

  const handleScheduleInterview = () => {
    // TODO: Implement schedule interview functionality
    console.log("Schedule interview clicked");
  };

  const handleMoreAction = () => {
    // TODO: Implement more actions functionality
    console.log("More action clicked");
  };

  const handleBackClick = () => {
    navigate(paths.recruiter.applicants.getHref());
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading applicant details...</p>
        </div>
      </div>
    );
  }

  if (isError || !applicantResponse?.data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">
            Error loading applicant details or applicant not found.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-150"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const applicant = applicantResponse.data;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBackClick}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-150"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h1 className="text-xl font-semibold text-gray-900">
              Applicant Details
            </h1>
          </div>
          <button
            onClick={handleMoreAction}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-150"
          >
            + More Action
          </button>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Applicant Summary & Contact */}
          <div className="lg:col-span-1">
            <ApplicantSummary
              applicant={applicant}
              onScheduleInterview={handleScheduleInterview}
            />
          </div>

          {/* Right Column - Tabs Content */}
          <div className="lg:col-span-2">
            <ApplicantTabs
              applicant={applicant}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
