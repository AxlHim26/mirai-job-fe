import { MapPin, Search } from "lucide-react";
import { useState } from "react";

export const BrowseHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Florence, Italy");
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-4 items-center">
          <div className="flex-1 flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Company title or keyword"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none text-gray-700"
            />
          </div>
          <div className="flex-1 flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3">
            <MapPin className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 outline-none text-gray-700"
            />
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700">
            Search
          </button>
        </div>
        <div className="mt-4 flex gap-2 text-sm text-gray-600">
          <span>Popular:</span>
          <span className="text-gray-800">
            Twitter, Microsoft, Apple, Facebook
          </span>
        </div>
      </div>
    </div>
  );
};
