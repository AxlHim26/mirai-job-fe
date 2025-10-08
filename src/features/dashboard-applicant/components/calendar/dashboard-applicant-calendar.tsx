import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

export const DashboardApplicantCalendar = () => {
  return (
    <div className="mb-6">
      <div className="bg-white rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Good morning, Jake
        </h2>
        <p className="text-gray-500 text-sm">
          Here is what's happening with your job search applications from July
          19 - July 25.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Total Jobs Applied */}
        <div className="bg-white rounded-lg p-6">
          <p className="text-gray-600 text-sm font-medium mb-2">
            Total Jobs Applied
          </p>
          <div className="flex items-center gap-4">
            <span className="text-5xl font-bold text-gray-800">45</span>
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-10 h-10 text-gray-400"
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
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-sm font-medium">Interviewed</p>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-4xl font-bold text-gray-800">18</span>
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs Applied Status */}
        <div className="bg-white rounded-lg p-6">
          <p className="text-gray-600 text-sm font-medium mb-4">
            Jobs Applied Status
          </p>
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="60"
                  stroke="#E5E7EB"
                  strokeWidth="20"
                  fill="none"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="60"
                  stroke="#6366F1"
                  strokeWidth="20"
                  fill="none"
                  strokeDasharray={`${377 * 0.4} ${377 * 0.6}`}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-indigo-500 rounded"></div>
                <span className="text-sm text-gray-600">Unsuitable</span>
              </div>
              <span className="font-semibold text-gray-800">60%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-300 rounded"></div>
                <span className="text-sm text-gray-600">Interviewed</span>
              </div>
              <span className="font-semibold text-gray-800">40%</span>
            </div>
          </div>
          <button className="text-indigo-600 font-medium text-sm mt-6 hover:text-indigo-700 flex items-center gap-2">
            View All Applications
            <span>→</span>
          </button>
        </div>

        {/* Upcoming Interviews */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-600 text-sm font-medium">
              Upcoming Interviews
            </p>
            <button className="flex items-center gap-2 text-sm text-gray-600 border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-50">
              <Calendar className="w-4 h-4" />
              Jul 19 - Jul 25
            </button>
          </div>

          <div className="flex items-center justify-between mb-4">
            <p className="font-medium text-gray-800">Today, 26 November</p>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm text-gray-500 py-2">10:00 AM</div>

            <div className="bg-indigo-50 rounded-lg p-3 flex items-center gap-3">
              <div className="text-sm text-gray-600">10:30 AM</div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">JB</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800 text-sm">
                  Joe Bartmann
                </p>
                <p className="text-xs text-gray-500">HR Manager at Divvy</p>
              </div>
            </div>

            <div className="text-sm text-gray-500 py-2">11:00 AM</div>
          </div>
        </div>
      </div>
    </div>
  );
};
