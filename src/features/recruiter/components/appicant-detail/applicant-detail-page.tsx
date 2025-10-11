import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useApplicantDetail } from "@/features/recruiter/api/applicant-detail/applicant-detail";
import { ApplicantSummary } from "./applicant-summary";
import { ApplicantTabs } from "./applicant-tabs";
import { paths } from "@/config/paths";

export const ApplicantDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  const {
    data: applicantDetail,
    isLoading,
    isError,
  } = useApplicantDetail(id || "");

  const handleScheduleInterview = () => {
    // TODO: Implement schedule interview functionality
    console.log("Schedule interview clicked");
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

  if (isError || !applicantDetail) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-lg font-medium mb-2">
            Error loading applicant details
          </div>
          <div className="text-gray-500 text-sm mb-4">
            Please try refreshing the page or contact support if the problem
            persists.
          </div>
          <button
            onClick={handleBackClick}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Back to Applicants
          </button>
        </div>
      </div>
    );
  }

  // Transform backend data to frontend format
  const applicant = {
    id: parseInt(applicantDetail.applicationId),
    fullName: applicantDetail.candidateName,
    email: applicantDetail.candidateEmail,
    phone: applicantDetail.candidatePhone,
    appliedDate: applicantDetail.appliedAt,
    status: applicantDetail.status,
    jobTitle: applicantDetail.jobName,
    experience: applicantDetail.experience,
    education: applicantDetail.education,
    skills: applicantDetail.skills.split(",").map((s: string) => s.trim()),
    address: applicantDetail.address,
    avatar: applicantDetail.avatar,
    currentJob: applicantDetail.currentJob,
    portfolioLink: applicantDetail.portfolioLink,
    about: applicantDetail.about,
    notes: "",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={handleBackClick}
            className="flex items-center text-purple-600 hover:text-purple-700 mb-4"
          >
            <svg
              className="w-5 h-5 mr-2"
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
            Back to Applicants
          </button>
          <h1 className="text-3xl font-bold text-gray-900">
            {applicant.fullName}
          </h1>
          <p className="text-gray-600 mt-2">
            {applicant.jobTitle} • Applied on {applicant.appliedDate}
          </p>
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
