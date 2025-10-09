import { useState } from "react";
import { X } from "lucide-react";

export const ApplicationFeatureBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3">
      <div className="bg-blue-600 rounded-lg p-2 flex-shrink-0">
        <div className="w-6 h-6 text-white flex items-center justify-center">
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-900 mb-1">
          New Feature
        </h3>
        <p className="text-sm text-gray-600">
          You can request a follow-up 7 days after applying for a job if the
          application status is in review. Only one follow-up is allowed per
          job.
        </p>
      </div>
      <button
        onClick={() => setShowBanner(false)}
        className="text-gray-400 hover:text-gray-600"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};
