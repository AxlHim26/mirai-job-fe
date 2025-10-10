import React from "react";
import { ApplicantDetail } from "@/types";

interface ApplicantTabsProps {
  applicant: ApplicantDetail;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const ApplicantTabs: React.FC<ApplicantTabsProps> = ({
  applicant,
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    { id: "profile", label: "Applicant Profile" },
    { id: "resume", label: "Resume" },
    { id: "progress", label: "Hiring Progress" },
    { id: "schedule", label: "Interview Schedule" },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-150 ${
                activeTab === tab.id
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "profile" && (
          <ApplicantProfileContent applicant={applicant} />
        )}
        {activeTab === "resume" && <ResumeContent applicant={applicant} />}
        {activeTab === "progress" && (
          <HiringProgressContent applicant={applicant} />
        )}
        {activeTab === "schedule" && (
          <InterviewScheduleContent applicant={applicant} />
        )}
      </div>
    </div>
  );
};

const ApplicantProfileContent: React.FC<{ applicant: ApplicantDetail }> = ({
  applicant,
}) => {
  return (
    <div className="space-y-6">
      {/* Personal Info */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Personal Info
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <p className="text-sm text-gray-900">
                {applicant.personalInfo.fullName}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <p className="text-sm text-gray-900">
                {applicant.personalInfo.dateOfBirth} (
                {applicant.personalInfo.age} y.o)
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <p className="text-sm text-gray-900">
                {applicant.personalInfo.address}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <p className="text-sm text-gray-900">
                {applicant.personalInfo.gender}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Language
              </label>
              <p className="text-sm text-gray-900">
                {applicant.personalInfo.languages.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Info */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Professional Info
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              About Me
            </label>
            <p className="text-sm text-gray-900 leading-relaxed">
              {applicant.professionalInfo.aboutMe}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Job
                </label>
                <p className="text-sm text-gray-900">
                  {applicant.professionalInfo.currentJob}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Highest Qualification Held
                </label>
                <p className="text-sm text-gray-900">
                  {applicant.professionalInfo.highestQualification}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Experience in Years
                </label>
                <p className="text-sm text-gray-900">
                  {applicant.professionalInfo.experienceYears} Years
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Skill set
                </label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {applicant.professionalInfo.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResumeContent: React.FC<{ applicant: ApplicantDetail }> = ({
  applicant,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-3">
          <svg
            className="w-8 h-8 text-gray-400"
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
          <div>
            <p className="text-sm font-medium text-gray-900">
              {applicant.resume.fileName}
            </p>
            <p className="text-xs text-gray-500">
              {applicant.resume.fileSize} • {applicant.resume.uploadDate}
            </p>
          </div>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-150">
          Download
        </button>
      </div>
    </div>
  );
};

const HiringProgressContent: React.FC<{ applicant: ApplicantDetail }> = ({
  applicant,
}) => {
  return (
    <div className="space-y-4">
      {applicant.hiringProgress.map((progress, index) => (
        <div
          key={index}
          className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg"
        >
          <div
            className={`w-3 h-3 rounded-full mt-2 ${
              progress.status === "completed"
                ? "bg-green-500"
                : progress.status === "in-progress"
                  ? "bg-blue-500"
                  : progress.status === "rejected"
                    ? "bg-red-500"
                    : "bg-gray-300"
            }`}
          />
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">
              {progress.stage}
            </h4>
            <p className="text-sm text-gray-600">{progress.notes}</p>
            {progress.interviewer && (
              <p className="text-xs text-gray-500 mt-1">
                Interviewer: {progress.interviewer}
              </p>
            )}
            {progress.scheduledDate && (
              <p className="text-xs text-gray-500">
                Scheduled: {progress.scheduledDate}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const InterviewScheduleContent: React.FC<{ applicant: ApplicantDetail }> = ({
  applicant,
}) => {
  return (
    <div className="space-y-4">
      {applicant.interviewSchedule.map((interview) => (
        <div
          key={interview.id}
          className="p-4 border border-gray-200 rounded-lg"
        >
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                {interview.title}
              </h4>
              <p className="text-sm text-gray-600">
                {interview.date} at {interview.time}
              </p>
              <p className="text-xs text-gray-500">
                {interview.duration} • {interview.type}
              </p>
              <p className="text-xs text-gray-500">
                Interviewer: {interview.interviewer}
              </p>
            </div>
            <span
              className={`px-2 py-1 text-xs font-medium rounded ${
                interview.status === "scheduled"
                  ? "bg-blue-100 text-blue-800"
                  : interview.status === "completed"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
              }`}
            >
              {interview.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
