import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PublicJobFilters } from "../../api/jobs";

type PublicJobFiltersProps = {
  filters: PublicJobFilters;
  onFiltersChange: (filters: PublicJobFilters) => void;
};

export const PublicJobFiltersComponent = ({
  filters,
  onFiltersChange,
}: PublicJobFiltersProps) => {
  const [expandedSections, setExpandedSections] = useState({
    employment: true,
    categories: true,
    jobLevel: true,
    salaryRange: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterChange = (
    key: keyof PublicJobFilters,
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
  }: {
    title: string;
    sectionKey: keyof typeof expandedSections;
    children: React.ReactNode;
  }) => (
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
        <div className="mt-2 space-y-2">{children}</div>
      )}
    </div>
  );

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
        className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
      />
      <span className="text-sm text-gray-700 flex-1">
        {label} {count && `(${count})`}
      </span>
    </label>
  );

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <FilterSection
        title="Type of Employment"
        sectionKey="employment"
      >
        <CheckboxItem
          label="Full-time"
          count={2}
          checked={filters.jobType === "Fulltime"}
          onChange={(checked) =>
            handleFilterChange("jobType", checked ? "Fulltime" : undefined)
          }
        />
        <CheckboxItem
          label="Part-Time"
          count={1}
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
          count={5}
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
          count={2}
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
          count={0}
          checked={filters.jobLevel === "VP or Above"}
          onChange={(checked) =>
            handleFilterChange("jobLevel", checked ? "VP or Above" : undefined)
          }
        />
      </FilterSection>

      <FilterSection
        title="Salary Range"
        sectionKey="salaryRange"
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
