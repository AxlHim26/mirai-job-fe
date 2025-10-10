import React from "react";
import { useJobPostingStore } from "@/stores";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { postJob } from "@/features/recruiter/api/job-posting";
import { useToastStore } from "@/stores";

interface JobReviewStepProps {
  onBack: () => void;
  onSuccess: () => void;
}

export const JobReviewStep: React.FC<JobReviewStepProps> = ({
  onBack,
  onSuccess,
}) => {
  const { data, clearStore, setSubmitting } = useJobPostingStore();
  const { addToast } = useToastStore();

  const postJobMutation = useMutation({
    mutationFn: postJob,
    onSuccess: () => {
      addToast({
        title: "Success",
        message: "Job posted successfully!",
        type: "success",
      });
      clearStore();
      onSuccess();
    },
    onError: (error: Error) => {
      addToast({
        title: "Error",
        message: error.message || "Failed to post job. Please try again.",
        type: "error",
      });
    },
    onSettled: () => {
      setSubmitting(false);
    },
  });

  const handlePostJob = () => {
    setSubmitting(true);
    postJobMutation.mutate(data);
  };

  const employmentTypeLabels: Record<string, string> = {
    fulltime: "Full-Time",
    parttime: "Part-Time",
    remote: "Remote",
    internship: "Internship",
    contract: "Contract",
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header with bordered title */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                {data.jobTitle || "Job Title"}
              </h1>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Description
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {data.jobDescription || "No description provided"}
              </p>
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Responsibilities
            </h2>
            <div className="space-y-3">
              {data.responsibilities ? (
                data.responsibilities
                  .split("\n")
                  .filter((item) => item.trim())
                  .map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))
              ) : (
                <p className="text-gray-500">No responsibilities specified</p>
              )}
            </div>
          </div>

          {/* Who You Are */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Who You Are
            </h2>
            <div className="space-y-3">
              {data.qualifications ? (
                data.qualifications
                  .split("\n")
                  .filter((item) => item.trim())
                  .map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))
              ) : (
                <p className="text-gray-500">No qualifications specified</p>
              )}
            </div>
          </div>

          {/* Nice-To-Haves */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Nice-To-Haves
            </h2>
            <div className="space-y-3">
              {data.niceToHaves ? (
                data.niceToHaves
                  .split("\n")
                  .filter((item) => item.trim())
                  .map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))
              ) : (
                <p className="text-gray-500">No nice-to-haves specified</p>
              )}
            </div>
          </div>

          {/* Perks & Benefits */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Perks & Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Full Healthcare
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  We believe in thriving communities and that starts with our
                  team being happy and healthy.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Unlimited Vacation
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  We believe you should have a flexible schedule that makes
                  space for family, wellness, and fun.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Skill Development
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  We believe in always learning and leveling up our skills.
                  Whether it's a conference or online course.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Competitive Salary
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  We offer competitive compensation packages that reflect your
                  skills and experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
            {/* About this role */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                About this role
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Apply Before</p>
                  <p className="text-sm font-medium text-gray-900">
                    July 31, 2024
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Job Posted On</p>
                  <p className="text-sm font-medium text-gray-900">
                    July 1, 2024
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Job Type</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {data.employmentTypes.map((type) => (
                      <span
                        key={type}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium"
                      >
                        {employmentTypeLabels[type] || type}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Salary</p>
                  <p className="text-sm font-medium text-gray-900">
                    ${data.salaryMin?.toLocaleString()} - $
                    {data.salaryMax?.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.categories.map((category, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      index % 2 === 0
                        ? "bg-orange-100 text-orange-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            {/* Required Skills */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Required Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.requiredSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-8">
        <Button
          onClick={onBack}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
        >
          Back to Edit
        </Button>

        <Button
          onClick={handlePostJob}
          disabled={postJobMutation.isPending}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-medium"
        >
          {postJobMutation.isPending ? "Posting..." : "Post Job"}
        </Button>
      </div>
    </div>
  );
};
