import { ChevronRight, Edit2, Twitter } from "lucide-react";

export const ProfileExperience = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">Experiences</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <Edit2 size={18} />
        </button>
      </div>

      <div className="space-y-6">
        {/* Experience 1 - Twitter */}
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200">
            <Twitter
              className="text-blue-500"
              size={24}
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Product Designer</h3>
            <p className="text-sm text-gray-600">
              Twitter · Full Time · Jun 2019 - Present (1yr 1m)
            </p>
            <p className="text-xs text-gray-500 mt-1">Manchester, UK</p>
            <p className="text-sm text-gray-700 mt-3">
              Created and executed social media plan for 30 brands utilizing
              multiple features and content types to increase brand outreach,
              engagement, and reach.
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <Edit2 size={16} />
          </button>
        </div>

        {/* Experience 2 - GoDaddy */}
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">
              Growth Marketing Designer
            </h3>
            <p className="text-sm text-gray-600">
              GoDaddy · Jun 2011 - May 2019 (8y)
            </p>
            <p className="text-xs text-gray-500 mt-1">Manchester, UK</p>
            <p className="text-sm text-gray-700 mt-3">
              Developed digital marketing strategies, activation plans,
              proposals, campaigns and programs for target audiences.
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <Edit2 size={16} />
          </button>
        </div>
      </div>

      <button className="text-blue-600 text-sm mt-5 hover:underline flex items-center font-medium">
        Show 3 more experiences{" "}
        <ChevronRight
          size={16}
          className="ml-1"
        />
      </button>
    </div>
  );
};
