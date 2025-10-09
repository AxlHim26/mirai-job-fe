import { ChevronRight, Edit2 } from "lucide-react";

export const ProfileEducation = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">Educations</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <Edit2 size={18} />
        </button>
      </div>

      <div className="space-y-6">
        {/* Education 1 - Harvard */}
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-red-800">
            <span className="text-red-800 text-lg font-serif font-bold">H</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Harvard University</h3>
            <p className="text-sm text-gray-600">
              Postgraduate degree, Applied Psychology
            </p>
            <p className="text-xs text-gray-500 mt-1">2010 - 2012</p>
            <p className="text-sm text-gray-700 mt-3">
              As an Applied Psychologist in the field of Consumer and Society, I
              am specialized in improving business opportunities by observing,
              analyzing, researching and changing behaviour.
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <Edit2 size={16} />
          </button>
        </div>

        {/* Education 2 - University of Toronto */}
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white text-lg font-serif font-bold">T</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">
              University of Toronto
            </h3>
            <p className="text-sm text-gray-600">
              Bachelor of Arts, Visual Communication
            </p>
            <p className="text-xs text-gray-500 mt-1">2005 - 2009</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <Edit2 size={16} />
          </button>
        </div>
      </div>

      <button className="text-blue-600 text-sm mt-5 hover:underline flex items-center font-medium">
        Show 2 more educations{" "}
        <ChevronRight
          size={16}
          className="ml-1"
        />
      </button>
    </div>
  );
};
