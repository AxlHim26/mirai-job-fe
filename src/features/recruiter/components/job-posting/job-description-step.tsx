import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useJobPostingStore } from "@/stores";
import { Button } from "@/components/ui/button";

const step2Schema = z.object({
  jobDescription: z
    .string()
    .max(500, "Job description must be at most 500 characters"),
  responsibilities: z
    .string()
    .max(500, "Responsibilities must be at most 500 characters"),
  qualifications: z
    .string()
    .max(500, "Qualifications must be at most 500 characters"),
  niceToHaves: z
    .string()
    .max(500, "Nice-to-haves must be at most 500 characters"),
});

type Step2FormData = z.infer<typeof step2Schema>;

interface JobDescriptionStepProps {
  onNext: () => void;
  onBack: () => void;
}

const RichTextEditor: React.FC<{
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  maxLength: number;
}> = ({ value, onChange, placeholder, maxLength }) => {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  const handleFormat = (format: "bold" | "italic") => {
    if (format === "bold") {
      setIsBold(!isBold);
    } else {
      setIsItalic(!isItalic);
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-32 p-4 border-0 rounded-lg resize-none focus:outline-none"
        style={{
          fontWeight: isBold ? "bold" : "normal",
          fontStyle: isItalic ? "italic" : "normal",
        }}
      />
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-t border-gray-200 rounded-b-lg">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleFormat("bold")}
            className={`p-1 rounded ${isBold ? "bg-gray-200" : "hover:bg-gray-100"}`}
          >
            <span className="font-bold text-sm">B</span>
          </button>
          <button
            type="button"
            onClick={() => handleFormat("italic")}
            className={`p-1 rounded ${isItalic ? "bg-gray-200" : "hover:bg-gray-100"}`}
          >
            <span className="italic text-sm">I</span>
          </button>
          <button
            type="button"
            className="p-1 rounded hover:bg-gray-100"
          >
            <span className="text-sm">•</span>
          </button>
          <button
            type="button"
            className="p-1 rounded hover:bg-gray-100"
          >
            <span className="text-sm">1.</span>
          </button>
          <button
            type="button"
            className="p-1 rounded hover:bg-gray-100"
          >
            <span className="text-sm">🔗</span>
          </button>
        </div>
        <div className="text-sm text-gray-500">
          Maximum {maxLength} characters
        </div>
      </div>
      <div className="text-right text-sm text-gray-500 mt-1">
        {value.length}/{maxLength}
      </div>
    </div>
  );
};

export const JobDescriptionStep: React.FC<JobDescriptionStepProps> = ({
  onNext,
}) => {
  const { data, updateStep2 } = useJobPostingStore();

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<Step2FormData>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      jobDescription: data.jobDescription,
      responsibilities: data.responsibilities,
      qualifications: data.qualifications,
      niceToHaves: data.niceToHaves,
    },
  });

  const onSubmit = (formData: Step2FormData) => {
    updateStep2(formData);
    onNext();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Details</h2>
          <p className="text-gray-600 mb-6">
            Add the description of the job, responsibilities, who you are, and
            nice-to-haves.
          </p>

          {/* Job Descriptions */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Job Descriptions
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Job titles must be describe one position
            </p>
            <RichTextEditor
              value={watch("jobDescription")}
              onChange={(value) => setValue("jobDescription", value)}
              placeholder="Enter job description"
              maxLength={500}
            />
            {errors.jobDescription && (
              <p className="text-red-500 text-sm mt-1">
                {errors.jobDescription.message}
              </p>
            )}
          </div>

          {/* Responsibilities */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Responsibilities
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Outline the core responsibilities of the position
            </p>
            <RichTextEditor
              value={watch("responsibilities")}
              onChange={(value) => setValue("responsibilities", value)}
              placeholder="Enter job responsibilities"
              maxLength={500}
            />
            {errors.responsibilities && (
              <p className="text-red-500 text-sm mt-1">
                {errors.responsibilities.message}
              </p>
            )}
          </div>

          {/* Who You Are */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Who You Are
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Add your preferred candidates qualifications
            </p>
            <RichTextEditor
              value={watch("qualifications")}
              onChange={(value) => setValue("qualifications", value)}
              placeholder="Enter qualifications"
              maxLength={500}
            />
            {errors.qualifications && (
              <p className="text-red-500 text-sm mt-1">
                {errors.qualifications.message}
              </p>
            )}
          </div>

          {/* Nice-To-Haves */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nice-To-Haves
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Add nice-to-have skills and qualifications for the role to
              encourage a more diverse set of candidates to apply
            </p>
            <RichTextEditor
              value={watch("niceToHaves")}
              onChange={(value) => setValue("niceToHaves", value)}
              placeholder="Enter nice-to-haves"
              maxLength={500}
            />
            {errors.niceToHaves && (
              <p className="text-red-500 text-sm mt-1">
                {errors.niceToHaves.message}
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
