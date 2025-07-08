import { LocalIcon } from "@/assets/icons/local-icon";
import { LandingFooter, LandingHeader } from "@/components/layouts/landing";
import { Hero } from "@/components/sections/landing";
import CompanyCard from "@/components/ui/card/CompanyCard";
import { CheckBox } from "@/components/ui/checkbox/checkbox";
import { Pagination } from "@/components/ui/pagination/pagination";
import {
  mockCompanyData,
  mockIndustryData,
} from "@/features/search-results/api/search-results.mock";
import { useState } from "react";

const SearchResultsRoute = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

  const toggleCollapse = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (label: string, checked: boolean) => {
    if (checked) {
      setSelectedIndustries((prev) => [...prev, label]);
    } else {
      setSelectedIndustries((prev) => prev.filter((item) => item !== label));
    }
  };

  return (
    <>
      <LandingHeader />
      <Hero />
      <div className="flex flex-col lg:flex-row gap-5 px-[72px] py-[124px] w-full justify-center items-start">
        <div className="basis-1/6 hidden lg:flex flex-col gap-5 items-start ">
          <h1 className="text-[#25324B] font-bold text-[19px]">Industry</h1>
          <div className="mb-5 flex flex-col gap-2">
            {mockIndustryData.map((item) => {
              return (
                <CheckBox
                  key={item.id}
                  label={item.name}
                  checked={selectedIndustries.includes(item.name)}
                  onChange={(checked) =>
                    handleCheckboxChange(item.name, checked)
                  }
                />
              );
            })}
          </div>
        </div>
        <div className="lg:hidden flex flex-col gap-5 items-start w-full">
          <button
            onClick={toggleCollapse}
            className="w-full border border-gray-200 py-2 px-4 flex items-center justify-center gap-2 text-sm font-medium text-[#3B415A] hover:bg-gray-50"
          >
            <LocalIcon
              iconName="moreFilters"
              height={20}
              width={20}
              className="text-[#3B415A]"
            />
            More Filters
          </button>
          {isOpen && (
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              {mockIndustryData.map((item) => (
                <CheckBox
                  key={item.id}
                  label={item.name}
                  checked={item.name === "All Industries"}
                  onChange={(checked) => console.log(`${item.name}:`, checked)}
                />
              ))}
            </div>
          )}
        </div>
        <div className="basis-3/4 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-5">
            <div className="flex flex-col gap-2 text-[#25324B]">
              <h1 className="font-semibold text-[32px]">All Jobs</h1>
              <h2 className="font-normal text-[16px]">Showing 73 results</h2>
            </div>
            <div className="flex items-end gap-5 h-[80px]">
              <div className="flex items-center gap-3 text-[#4640DE]">
                <h1 className="text-[#7C8493] font-normal text-[16px] hidden lg:block">
                  Sort by:
                </h1>
                <select className="text-[#25324B] font-medium text-[16px] focus:outline-none focus:ring-0">
                  <option value="relevance">Relevance</option>
                  <option value="date">Date</option>
                  <option value="salary">Salary</option>
                </select>
              </div>
              <LocalIcon
                iconName="gridView"
                height={40}
                width={40}
                className={`hidden lg:block cursor-pointer ${
                  viewMode === "grid" ? "text-[#4640DE]" : "text-[#7C8493]"
                }`}
                onClick={() => setViewMode("grid")}
              />
              <LocalIcon
                iconName="horizontal"
                height={40}
                width={40}
                className={`hidden lg:block cursor-pointer ${
                  viewMode === "grid" ? "text-[#7C8493]" : "text-[#4640DE]"
                }`}
                onClick={() => setViewMode("list")}
              />
            </div>
          </div>
          <div
            className={`gap-4 ${
              viewMode === "grid"
                ? "grid grid-cols-1 lg:grid-cols-2"
                : "flex flex-col"
            }`}
          >
            {mockCompanyData.map((company) => (
              <CompanyCard
                key={company.id}
                id={company.id}
                name={company.name}
                logo={company.logo}
                jobsQuantity={company.jobsQuantity}
                description={company.description}
                tags={company.tags}
              />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default SearchResultsRoute;
