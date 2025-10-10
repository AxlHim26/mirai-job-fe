import { Search, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui";
import { useState } from "react";

type FindJobsSearchProps = {
  onSearch: (query: string, location: string) => void;
};

export const FindJobsSearch = ({ onSearch }: FindJobsSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Florence, Italy");

  const handleSearch = () => {
    onSearch(searchQuery, location);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="mb-6">
      <div className="flex gap-4 mb-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Job title or keyword"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <Button
          variant="filled"
          size="lg"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Popular:</span>
        <div className="flex gap-2">
          {["UI Designer", "UX Researcher", "Android", "Admin"].map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchQuery(tag)}
              className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
