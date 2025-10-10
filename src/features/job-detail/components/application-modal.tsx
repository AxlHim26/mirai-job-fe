import React from "react";
import { ApplicationForm } from "./application-form";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobName?: string;
  companyName?: string;
  location?: string;
  jobType?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  jobName = "Social Media Assistant",
  companyName = "Nomad",
  location = "Paris, France",
  jobType = "Full-Time",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {companyName.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  {jobName}
                </h1>
                <p className="text-sm text-gray-500">
                  {companyName} • {location} • {jobType}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6">
            <ApplicationForm onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};
