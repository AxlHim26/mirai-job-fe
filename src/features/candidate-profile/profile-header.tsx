import { Edit2, MapPin } from "lucide-react";

export const ProfileHeader = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-6">
      {/* Header with banner */}
      <div className="relative h-48 bg-gradient-to-r from-pink-300 via-purple-400 to-purple-700 rounded-t-lg">
        <button className="absolute top-4 right-4 p-2 bg-black bg-opacity-20 text-white rounded-full hover:bg-opacity-30 transition">
          <Edit2 size={16} />
        </button>
      </div>

      {/* Profile Section */}
      <div className="px-8 pb-8 relative">
        <div className="flex items-start mb-6">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover -mt-20 relative z-10"
          />
          <div className="ml-6 flex-1 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold text-gray-900">
                    Jake Gyll
                  </h1>
                  <button className="text-blue-600 text-sm hover:underline font-medium">
                    Edit Profile
                  </button>
                </div>

                <p className="text-gray-600 mt-2 text-lg">
                  Product Designer at Twitter
                </p>

                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin size={16} /> Manchester, UK
                  </span>
                </div>

                <div className="mt-3 text-xs text-green-700 bg-green-100 py-1.5 px-4 rounded-full inline-flex items-center gap-2 font-semibold">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  OPEN FOR OPPORTUNITIES
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
