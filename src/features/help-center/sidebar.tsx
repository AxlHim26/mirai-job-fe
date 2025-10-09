import { Search } from "lucide-react";
import { useState } from "react";

export const HelpCenterSidebar = () => {
  const menuItems = [
    "Getting Started",
    "My Profile",
    "Applying for a job",
    "Job Search Tips",
    "Job Alerts",
  ];
  const [searchQuery, setSearchQuery] = useState("");

  const [activeMenu, setActiveMenu] = useState("Getting Started");

  return (
    <div className="w-72 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <input
          type="text"
          placeholder="Type your question or search keyword"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="px-6 mb-4">
        <div className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
          <Search className="w-4 h-4" />
          <span className="text-sm">Search</span>
        </div>
      </div>

      <nav className="flex-1 px-4">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveMenu(item)}
            className={`w-full text-left px-4 py-3 rounded-lg mb-1 transition-colors ${
              activeMenu === item
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Contact Support Section */}
      <div className="m-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <h3 className="font-semibold mb-2">
          Didn't find what you were looking for?
        </h3>
        <p className="text-sm text-blue-100 mb-4">
          Contact our customer service
        </p>
        <button className="w-full bg-white text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};
