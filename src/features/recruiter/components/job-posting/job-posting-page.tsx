import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useJobPostingStore } from "@/stores";
import { JobInformationStep } from "./job-information-step";
import { JobDescriptionStep } from "./job-description-step";
import { JobReviewStep } from "./job-review-step";
import { paths } from "@/config/paths";

export const JobPostingPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentStep, setCurrentStep, clearStore } = useJobPostingStore();

  // Clear store when component unmounts (user navigates away)
  useEffect(() => {
    return () => {
      if (currentStep === 3) {
        clearStore();
      }
    };
  }, [currentStep, clearStore]);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSuccess = () => {
    navigate(paths.recruiter.jobPostings.getHref());
  };

  const handleBackToJobs = () => {
    navigate(paths.recruiter.jobPostings.getHref());
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <JobInformationStep onNext={handleNext} />;
      case 2:
        return (
          <JobDescriptionStep
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <JobReviewStep
            onBack={handleBack}
            onSuccess={handleSuccess}
          />
        );
      default:
        return <JobInformationStep onNext={handleNext} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={handleBackToJobs}
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
                Post a Job
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Step Progress Indicator */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-center space-x-16">
            {/* Step 1 */}
            <div
              className={`flex items-center space-x-4 ${currentStep >= 1 ? "text-blue-600" : "text-gray-400"}`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  currentStep >= 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">Step 1/3</p>
                <p className="text-sm">Job Information</p>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className={`flex items-center space-x-4 ${currentStep >= 2 ? "text-blue-600" : "text-gray-400"}`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  currentStep >= 2
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">Step 2/3</p>
                <p className="text-sm">Job Description</p>
              </div>
            </div>

            {/* Step 3 */}
            <div
              className={`flex items-center space-x-4 ${currentStep >= 3 ? "text-blue-600" : "text-gray-400"}`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  currentStep >= 3
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">Step 3/3</p>
                <p className="text-sm">Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">{renderStep()}</div>
    </div>
  );
};
