import { useState } from "react";

export const BrowseFilter = () => {
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState("261-500");
  const industries = [
    { name: "Advertising", count: 43 },
    { name: "Business Service", count: 4 },
    { name: "Blockchain", count: 6 },
    { name: "Cloud", count: 15 },
    { name: "Consumer Tech", count: 5 },
    { name: "Education", count: 34 },
    { name: "Fintech", count: 45 },
    { name: "Gaming", count: 33 },
    { name: "Food & Beverage", count: 6 },
    { name: "Healthcare", count: 3 },
    { name: "Hosting", count: 5 },
    { name: "Media", count: 4 },
  ];

  const companySizes = [
    { name: "1-50", count: 25 },
    { name: "51-150", count: 57 },
    { name: "151-250", count: 45 },
    { name: "251-500", count: 4 },
    { name: "501-1000", count: 43 },
    { name: "1000 - above", count: 23 },
  ];
  const toggleIndustry = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((i) => i !== industry)
        : [...prev, industry]
    );
  };
  return (
    <div className="w-64 flex-shrink-0">
      {/* Industry Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">Industry</h3>
        <div className="space-y-2">
          {industries.map((industry) => (
            <label
              key={industry.name}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedIndustries.includes(industry.name)}
                onChange={() => toggleIndustry(industry.name)}
                className="w-4 h-4 text-blue-600 rounded border-gray-300"
              />
              <span className="text-gray-700 text-sm">
                {industry.name} ({industry.count})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Company Size Filter */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Company Size</h3>
        <div className="space-y-2">
          {companySizes.map((size) => (
            <label
              key={size.name}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="companySize"
                checked={selectedSize === size.name}
                onChange={() => setSelectedSize(size.name)}
                className="w-4 h-4 text-blue-600 border-gray-300"
              />
              <span className="text-gray-700 text-sm">
                {size.name} ({size.count})
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
