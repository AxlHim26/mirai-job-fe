import { Search, SlidersHorizontal } from "lucide-react";

export const ApplicationControls = () => {
  return (
    <div className="flex justify-between items-center p-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900">
        Applications History
      </h2>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Search className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-700">Search</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <SlidersHorizontal className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-700">Filter</span>
        </button>
      </div>
    </div>
  );
};
