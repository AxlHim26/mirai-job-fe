import { ChevronLeft, ChevronRight, Grid, List } from "lucide-react";
import { useState } from "react";

export const BrowseCompaniesGrid = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);

  interface Company {
    id: number;
    name: string;
    logo: string;
    description: string;
    tags: string[];
    jobCount: number;
    logoColor: string;
  }

  const companies: Company[] = [
    {
      id: 1,
      name: "Stripe",
      logo: "S",
      logoColor: "#635BFF",
      description:
        "Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe's software tools...",
      tags: ["Business", "Payment gateway"],
      jobCount: 7,
    },
    {
      id: 2,
      name: "Truebill",
      logo: "T",
      logoColor: "#0077FF",
      description:
        "Take control of your money. Truebill develops a mobile app that helps consumers take control of their financial...",
      tags: ["Business"],
      jobCount: 7,
    },
    {
      id: 3,
      name: "Square",
      logo: "□",
      logoColor: "#000000",
      description:
        "Square builds common business tools in unconventional ways so more people can start, run, and grow their businesses.",
      tags: ["Business", "Blockchain"],
      jobCount: 7,
    },
    {
      id: 4,
      name: "Coinbase",
      logo: "C",
      logoColor: "#0052FF",
      description:
        "Coinbase is a digital currency wallet and platform where merchants and consumers can transact with new digital currencies.",
      tags: ["Business", "Blockchain"],
      jobCount: 7,
    },
    {
      id: 5,
      name: "Robinhood",
      logo: "🪶",
      logoColor: "#000000",
      description:
        "Robinhood is lowering barriers, removing fees, and providing greater access to financial information.",
      tags: ["Business"],
      jobCount: 7,
    },
    {
      id: 6,
      name: "Kraken",
      logo: "K",
      logoColor: "#5741D9",
      description:
        "Based in San Francisco, Kraken is the world's largest global bitcoin exchange in euro volume and liquidity.",
      tags: ["Business", "Blockchain"],
      jobCount: 7,
    },
  ];
  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">All Companies</h2>
          <p className="text-gray-600 text-sm mt-1">Showing 73 results</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm outline-none">
              <option>Most relevant</option>
              <option>Newest</option>
              <option>Most popular</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${viewMode === "grid" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${viewMode === "list" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {companies.map((company) => (
          <div
            key={company.id}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: company.logoColor }}
              >
                {company.logo}
              </div>
              <span className="text-blue-600 text-sm font-medium">
                {company.jobCount} Jobs
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {company.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {company.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {company.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    tag === "Blockchain"
                      ? "bg-orange-50 text-orange-600 border border-orange-200"
                      : tag === "Payment gateway"
                        ? "bg-purple-50 text-purple-600 border border-purple-200"
                        : "bg-green-50 text-green-600 border border-green-200"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2">
        <button className="p-2 hover:bg-gray-100 rounded">
          <ChevronLeft className="w-5 h-5" />
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 rounded ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {page}
          </button>
        ))}
        <span className="text-gray-500">...</span>
        <button className="w-10 h-10 hover:bg-gray-100 text-gray-700 rounded">
          33
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
