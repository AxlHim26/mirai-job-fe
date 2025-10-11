import React from "react";

interface ApplicantSummaryProps {
  applicant: {
    id: number;
    fullName: string;
    email: string;
    phone: string;
    appliedDate: string;
    status: string;
    jobTitle: string;
    experience: string;
    education: string;
    skills: string[];
    address: string;
    avatar: string;
    currentJob: string;
    portfolioLink: string;
    about: string;
    notes: string;
  };
  onScheduleInterview: () => void;
}

export const ApplicantSummary: React.FC<ApplicantSummaryProps> = ({
  applicant,
  onScheduleInterview,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Profile Section */}
      <div className="text-center mb-6">
        <img
          src={applicant.avatar}
          alt={applicant.fullName}
          className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
        />
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          {applicant.fullName}
        </h2>
        <p className="text-gray-600 mb-2">{applicant.currentJob}</p>
        <div className="flex items-center justify-center gap-1">
          <svg
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-medium text-gray-700">4.5</span>
        </div>
      </div>

      {/* Applied Jobs Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-900">
            Applied Jobs
          </span>
          <span className="text-sm text-gray-500">{applicant.appliedDate}</span>
        </div>
        <p className="text-sm font-bold text-gray-900 mb-1">
          {applicant.jobTitle}
        </p>
        <p className="text-sm text-gray-600">
          {applicant.experience} • {applicant.status}
        </p>
      </div>

      {/* Stage Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-900">Stage</span>
          <span className="text-sm text-blue-600">• {applicant.status}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-blue-600 rounded-full"></div>
          <div className="flex-1 h-2 bg-blue-600 rounded-full"></div>
          <div className="flex-1 h-2 bg-blue-600 rounded-full"></div>
          <div className="flex-1 h-2 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* Schedule Interview Button */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <button
            onClick={onScheduleInterview}
            className="flex-1 px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-150 font-semibold"
          >
            Schedule Interview
          </button>
          <button className="px-3 py-2 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-150">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-4">Contact</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="flex-1">
              <div className="text-sm text-gray-900">Email</div>
              <a
                href={`mailto:${applicant.email}`}
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                {applicant.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="flex-1">
              <div className="text-sm text-gray-900">Phone</div>
              <span className="text-sm text-gray-900">{applicant.phone}</span>
            </div>
          </div>

          {applicant.portfolioLink && (
            <div className="flex items-center gap-3">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <div className="flex-1">
                <div className="text-sm text-gray-900">Portfolio</div>
                <a
                  href={applicant.portfolioLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
