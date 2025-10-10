import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { JobFilters } from "../../api/jobs";

type JobFiltersProps = {
  filters: JobFilters;
  onFiltersChange: (filters: JobFilters) => void;
};

export const JobFiltersComponent = ({
  filters,
  onFiltersChange,
}: JobFiltersProps) => {
  const [expandedSections, setExpandedSections] = useState({
    employment: false, // Đóng tất cả mặc định
    categories: false,
    jobLevel: false,
    salaryRange: false,
  });

  const [showAllOptions, setShowAllOptions] = useState({
    categories: false,
    jobLevel: false,
    salaryRange: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleShowAll = (section: keyof typeof showAllOptions) => {
    setShowAllOptions((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterChange = (
    key: keyof JobFilters,
    value: string | undefined
  ) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const FilterSection = ({
    title,
    sectionKey,
    children,
    showViewMore = false,
    initialItemsCount = 0,
  }: {
    title: string;
    sectionKey: keyof typeof expandedSections;
    children: React.ReactNode;
    showViewMore?: boolean;
    initialItemsCount?: number;
  }) => {
    const childrenArray = React.Children.toArray(children);
    const visibleItems =
      showViewMore && !showAllOptions[sectionKey as keyof typeof showAllOptions]
        ? childrenArray.slice(0, initialItemsCount)
        : childrenArray;

    return (
      <div className="mb-6">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="flex items-center justify-between w-full py-2 text-left font-medium text-gray-900"
        >
          <span>{title}</span>
          {expandedSections[sectionKey] ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        {expandedSections[sectionKey] && (
          <div className="mt-2 space-y-2">
            {visibleItems}
            {showViewMore && childrenArray.length > initialItemsCount && (
              <button
                onClick={() =>
                  toggleShowAll(sectionKey as keyof typeof showAllOptions)
                }
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                {showAllOptions[sectionKey as keyof typeof showAllOptions]
                  ? "Show less"
                  : `View more (${childrenArray.length - initialItemsCount})`}
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  const CheckboxItem = ({
    label,
    count,
    checked,
    onChange,
  }: {
    label: string;
    count?: number;
    checked: boolean;
    onChange: (checked: boolean) => void;
  }) => (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <span className="text-sm text-gray-700">
        {label} {count && `(${count})`}
      </span>
    </label>
  );

  return (
    <div className="bg-white rounded-lg shadow p-4 max-h-[60vh] overflow-y-auto">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 sticky top-0 bg-white pb-2">
        Filters
      </h3>

      <FilterSection
        title="Type of Employment"
        sectionKey="employment"
        showViewMore={true}
        initialItemsCount={3}
      >
        <CheckboxItem
          label="Full-time"
          count={3}
          checked={filters.jobType === "Full-time"}
          onChange={(checked) =>
            handleFilterChange("jobType", checked ? "Full-time" : undefined)
          }
        />
        <CheckboxItem
          label="Part-Time"
          count={5}
          checked={filters.jobType === "Part-time"}
          onChange={(checked) =>
            handleFilterChange("jobType", checked ? "Part-time" : undefined)
          }
        />
        <CheckboxItem
          label="Remote"
          count={2}
          checked={filters.jobType === "Remote"}
          onChange={(checked) =>
            handleFilterChange("jobType", checked ? "Remote" : undefined)
          }
        />
        <CheckboxItem
          label="Internship"
          count={24}
          checked={filters.jobType === "Internship"}
          onChange={(checked) =>
            handleFilterChange("jobType", checked ? "Internship" : undefined)
          }
        />
        <CheckboxItem
          label="Contract"
          count={3}
          checked={filters.jobType === "Contract"}
          onChange={(checked) =>
            handleFilterChange("jobType", checked ? "Contract" : undefined)
          }
        />
      </FilterSection>

      <FilterSection
        title="Categories"
        sectionKey="categories"
        showViewMore={true}
        initialItemsCount={2}
      >
        <CheckboxItem
          label="Design"
          count={24}
          checked={filters.category === "Design"}
          onChange={(checked) =>
            handleFilterChange("category", checked ? "Design" : undefined)
          }
        />
        <CheckboxItem
          label="Sales"
          count={3}
          checked={filters.category === "Sales"}
          onChange={(checked) =>
            handleFilterChange("category", checked ? "Sales" : undefined)
          }
        />
        <CheckboxItem
          label="Marketing"
          count={3}
          checked={filters.category === "Marketing"}
          onChange={(checked) =>
            handleFilterChange("category", checked ? "Marketing" : undefined)
          }
        />
        <CheckboxItem
          label="Business"
          count={3}
          checked={filters.category === "Business"}
          onChange={(checked) =>
            handleFilterChange("category", checked ? "Business" : undefined)
          }
        />
        <CheckboxItem
          label="Human Resource"
          count={6}
          checked={filters.category === "Human Resource"}
          onChange={(checked) =>
            handleFilterChange(
              "category",
              checked ? "Human Resource" : undefined
            )
          }
        />
        <CheckboxItem
          label="Finance"
          count={4}
          checked={filters.category === "Finance"}
          onChange={(checked) =>
            handleFilterChange("category", checked ? "Finance" : undefined)
          }
        />
        <CheckboxItem
          label="Engineering"
          count={4}
          checked={filters.category === "Engineering"}
          onChange={(checked) =>
            handleFilterChange("category", checked ? "Engineering" : undefined)
          }
        />
        <CheckboxItem
          label="Technology"
          count={5}
          checked={filters.category === "Technology"}
          onChange={(checked) =>
            handleFilterChange("category", checked ? "Technology" : undefined)
          }
        />
      </FilterSection>

      <FilterSection
        title="Job Level"
        sectionKey="jobLevel"
        showViewMore={true}
        initialItemsCount={2}
      >
        <CheckboxItem
          label="Entry Level"
          count={57}
          checked={filters.jobLevel === "Entry Level"}
          onChange={(checked) =>
            handleFilterChange("jobLevel", checked ? "Entry Level" : undefined)
          }
        />
        <CheckboxItem
          label="Mid Level"
          count={3}
          checked={filters.jobLevel === "Mid Level"}
          onChange={(checked) =>
            handleFilterChange("jobLevel", checked ? "Mid Level" : undefined)
          }
        />
        <CheckboxItem
          label="Senior Level"
          count={5}
          checked={filters.jobLevel === "Senior Level"}
          onChange={(checked) =>
            handleFilterChange("jobLevel", checked ? "Senior Level" : undefined)
          }
        />
        <CheckboxItem
          label="Director"
          count={12}
          checked={filters.jobLevel === "Director"}
          onChange={(checked) =>
            handleFilterChange("jobLevel", checked ? "Director" : undefined)
          }
        />
        <CheckboxItem
          label="VP or Above"
          count={8}
          checked={filters.jobLevel === "VP or Above"}
          onChange={(checked) =>
            handleFilterChange("jobLevel", checked ? "VP or Above" : undefined)
          }
        />
      </FilterSection>

      <FilterSection
        title="Salary Range"
        sectionKey="salaryRange"
        showViewMore={true}
        initialItemsCount={1}
      >
        <CheckboxItem
          label="$700 - $1000"
          count={4}
          checked={filters.salaryRange === "$700-$1000"}
          onChange={(checked) =>
            handleFilterChange(
              "salaryRange",
              checked ? "$700-$1000" : undefined
            )
          }
        />
        <CheckboxItem
          label="$100 - $1500"
          count={6}
          checked={filters.salaryRange === "$100-$1500"}
          onChange={(checked) =>
            handleFilterChange(
              "salaryRange",
              checked ? "$100-$1500" : undefined
            )
          }
        />
        <CheckboxItem
          label="$1500 - $2000"
          count={10}
          checked={filters.salaryRange === "$1500-$2000"}
          onChange={(checked) =>
            handleFilterChange(
              "salaryRange",
              checked ? "$1500-$2000" : undefined
            )
          }
        />
        <CheckboxItem
          label="$3000 or above"
          count={4}
          checked={filters.salaryRange === "$3000 or above"}
          onChange={(checked) =>
            handleFilterChange(
              "salaryRange",
              checked ? "$3000 or above" : undefined
            )
          }
        />
      </FilterSection>
    </div>
  );
};
