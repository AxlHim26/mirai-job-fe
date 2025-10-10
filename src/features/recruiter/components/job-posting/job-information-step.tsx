import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useJobPostingStore } from "@/stores";
import { Button } from "@/components/ui/button";

const step1Schema = z.object({
  jobTitle: z.string().min(1, "Job title is required"),
  employmentTypes: z
    .array(z.string())
    .min(1, "Please select at least one employment type"),
  salaryMin: z.number().min(0, "Minimum salary must be positive"),
  salaryMax: z.number().min(0, "Maximum salary must be positive"),
  categories: z.array(z.string()).min(1, "Please select at least one category"),
  requiredSkills: z
    .array(z.string())
    .min(1, "Please add at least one required skill"),
});

type Step1FormData = z.infer<typeof step1Schema>;

interface JobInformationStepProps {
  onNext: () => void;
}

const employmentTypes = [
  { id: "fulltime", label: "Full-Time" },
  { id: "parttime", label: "Part-Time" },
  { id: "remote", label: "Remote" },
  { id: "internship", label: "Internship" },
  { id: "contract", label: "Contract" },
];

const jobCategories = [
  "Engineering",
  "Design",
  "Marketing",
  "Sales",
  "Operations",
  "Finance",
  "Human Resources",
  "Customer Support",
];

const Checkbox: React.FC<{
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
}> = ({ id, checked, onChange, children }) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
    />
    <label
      htmlFor={id}
      className="ml-2 text-sm text-gray-700"
    >
      {children}
    </label>
  </div>
);

const DualRangeSlider: React.FC<{
  value: [number, number];
  onChange: (value: [number, number]) => void;
  minRange?: number;
  maxRange?: number;
}> = ({ value, onChange, minRange = 0, maxRange = 100000 }) => {
  const [minVal, maxVal] = value;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = parseInt(e.target.value);
    if (newMin <= maxVal) {
      onChange([newMin, maxVal]);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(e.target.value);
    if (newMax >= minVal) {
      onChange([minVal, newMax]);
    }
  };

  const minPercent = ((minVal - minRange) / (maxRange - minRange)) * 100;
  const maxPercent = ((maxVal - minRange) / (maxRange - minRange)) * 100;

  return (
    <div className="relative h-2 bg-gray-200 rounded-lg">
      {/* Background track */}
      <div className="absolute inset-0 bg-gray-200 rounded-lg"></div>

      {/* Active range */}
      <div
        className="absolute h-2 bg-blue-500 rounded-lg"
        style={{
          left: `${minPercent}%`,
          width: `${maxPercent - minPercent}%`,
        }}
      ></div>

      {/* Min slider */}
      <input
        type="range"
        min={minRange}
        max={maxRange}
        step="1000"
        value={minVal}
        onChange={handleMinChange}
        className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer"
        style={{
          background: "transparent",
          WebkitAppearance: "none",
          zIndex: minVal > maxVal - 1000 ? 2 : 1,
        }}
      />

      {/* Max slider */}
      <input
        type="range"
        min={minRange}
        max={maxRange}
        step="1000"
        value={maxVal}
        onChange={handleMaxChange}
        className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer"
        style={{
          background: "transparent",
          WebkitAppearance: "none",
          zIndex: minVal > maxVal - 1000 ? 1 : 2,
        }}
      />
    </div>
  );
};

export const JobInformationStep: React.FC<JobInformationStepProps> = ({
  onNext,
}) => {
  const { data, updateStep1 } = useJobPostingStore();
  const [skills, setSkills] = useState<string[]>(data.requiredSkills);
  const [newSkill, setNewSkill] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<Step1FormData>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      jobTitle: data.jobTitle,
      employmentTypes: data.employmentTypes,
      salaryMin: data.salaryMin,
      salaryMax: data.salaryMax,
      categories: data.categories,
      requiredSkills: data.requiredSkills,
    },
  });

  const watchedEmploymentTypes = watch("employmentTypes");
  const watchedCategories = watch("categories");
  const salaryMin = watch("salaryMin") || 5000;
  const salaryMax = watch("salaryMax") || 22000;

  const handleEmploymentTypeChange = (typeId: string, checked: boolean) => {
    const currentTypes = watchedEmploymentTypes || [];
    if (checked) {
      setValue("employmentTypes", [...currentTypes, typeId]);
    } else {
      setValue(
        "employmentTypes",
        currentTypes.filter((t) => t !== typeId)
      );
    }
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    const currentCategories = watchedCategories || [];
    if (checked) {
      setValue("categories", [...currentCategories, category]);
    } else {
      setValue(
        "categories",
        currentCategories.filter((c) => c !== category)
      );
    }
  };

  const handleSalaryChange = (value: [number, number]) => {
    setValue("salaryMin", value[0]);
    setValue("salaryMax", value[1]);
  };

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      const updatedSkills = [...skills, newSkill.trim()];
      setSkills(updatedSkills);
      setValue("requiredSkills", updatedSkills);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    const updatedSkills = skills.filter((skill) => skill !== skillToRemove);
    setSkills(updatedSkills);
    setValue("requiredSkills", updatedSkills);
  };

  const onSubmit = (formData: Step1FormData) => {
    updateStep1(formData);
    onNext();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {/* Basic Information */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Basic Information
          </h2>
          <p className="text-gray-600 mb-6">
            This information will be displayed publicly
          </p>

          {/* Job Title */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Title
            </label>
            <p className="text-sm text-gray-500 mb-3">
              Job titles must be describe one position
            </p>
            <input
              {...register("jobTitle")}
              placeholder="e.g. Software Engineer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-500 mt-1">Enter your job title</p>
            {errors.jobTitle && (
              <p className="text-red-500 text-sm mt-1">
                {errors.jobTitle.message}
              </p>
            )}
          </div>

          {/* Type of Employment */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type of Employment
            </label>
            <p className="text-sm text-gray-500 mb-3">
              You can select multiple type of employment
            </p>
            <div className="space-y-2">
              {employmentTypes.map((type) => (
                <Checkbox
                  key={type.id}
                  id={type.id}
                  checked={watchedEmploymentTypes?.includes(type.id) || false}
                  onChange={(checked) =>
                    handleEmploymentTypeChange(type.id, checked)
                  }
                >
                  {type.label}
                </Checkbox>
              ))}
            </div>
            {errors.employmentTypes && (
              <p className="text-red-500 text-sm mt-1">
                {errors.employmentTypes.message}
              </p>
            )}
          </div>

          {/* Salary */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Salary
            </label>
            <p className="text-sm text-gray-500 mb-3">
              Please specify the estimated salary range for the role. You can
              leave this blank
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <input
                    {...register("salaryMin", { valueAsNumber: true })}
                    type="number"
                    placeholder="5,000"
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <span className="text-gray-500">to</span>
              <div className="flex-1">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <input
                    {...register("salaryMax", { valueAsNumber: true })}
                    type="number"
                    placeholder="22,000"
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Salary Range Slider */}
            <DualRangeSlider
              value={[salaryMin, salaryMax]}
              onChange={handleSalaryChange}
            />
          </div>

          {/* Categories */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categories
            </label>
            <p className="text-sm text-gray-500 mb-3">
              You can select multiple job categories
            </p>
            <div className="grid grid-cols-2 gap-2">
              {jobCategories.map((category) => (
                <Checkbox
                  key={category}
                  id={category}
                  checked={watchedCategories?.includes(category) || false}
                  onChange={(checked) =>
                    handleCategoryChange(category, checked)
                  }
                >
                  {category}
                </Checkbox>
              ))}
            </div>
            {errors.categories && (
              <p className="text-red-500 text-sm mt-1">
                {errors.categories.message}
              </p>
            )}
          </div>

          {/* Required Skills */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Required Skills
            </label>
            <p className="text-sm text-gray-500 mb-3">
              Add required skills for the job
            </p>
            <div className="flex gap-2 mb-3">
              <input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Enter skill name"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) =>
                  e.key === "Enter" && (e.preventDefault(), addSkill())
                }
              />
              <Button
                type="button"
                onClick={addSkill}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                + Add Skills
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  <span>{skill}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            {errors.requiredSkills && (
              <p className="text-red-500 text-sm mt-1">
                {errors.requiredSkills.message}
              </p>
            )}
          </div>
        </div>

        {/* Next Step Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 text-lg font-medium"
          >
            Next Step
          </Button>
        </div>
      </form>
    </div>
  );
};
