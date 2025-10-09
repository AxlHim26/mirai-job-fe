import { Calendar } from "lucide-react";

export const ApplicationHeader = () => {
  return (
    <div className="flex justify-between items-start mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Keep it up, Jake
        </h1>
        <p className="text-gray-600">
          Here is job applications status from July 19 - July 25.
        </p>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg">
        <span className="text-sm text-gray-700">Jul 19 - Jul 25</span>
        <Calendar className="w-4 h-4 text-gray-500" />
      </div>
    </div>
  );
};
