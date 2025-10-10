import React, { useState } from "react";
import {
  Upload,
  Bold,
  Italic,
  List,
  Link as LinkIcon,
  Image,
} from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  jobTitle: string;
  linkedinUrl: string;
  portfolioUrl: string;
  additionalInfo: string;
  resume: File | null;
}

interface ApplicationFormProps {
  onClose?: () => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    jobTitle: "",
    linkedinUrl: "",
    portfolioUrl: "",
    additionalInfo: "",
    resume: null,
  });

  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "additionalInfo") {
      setCharCount(value.length);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        resume: e.target.files![0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="p-6">
      {/* Header */}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Submit your application
          </h2>
          <p className="text-sm text-gray-500">
            The following is required and will only be shared with Nomad
          </p>
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your fullname"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>

        {/* Current or Previous Job Title */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current or previous job title
          </label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            placeholder="What's your current or previous job title?"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>

        {/* Links Section */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">LINKS</h3>

          {/* LinkedIn URL */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              LinkedIn URL
            </label>
            <input
              type="url"
              name="linkedinUrl"
              value={formData.linkedinUrl}
              onChange={handleInputChange}
              placeholder="Link to your LinkedIn URL"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          {/* Portfolio URL */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Portfolio URL
            </label>
            <input
              type="url"
              name="portfolioUrl"
              value={formData.portfolioUrl}
              onChange={handleInputChange}
              placeholder="Link to your portfolio URL"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional information
          </label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            placeholder="Add a cover letter or anything else you want to share"
            maxLength={maxChars}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
          />
          {/* Toolbar */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="p-1 text-gray-400 hover:text-gray-600"
              >
                <Bold className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="p-1 text-gray-400 hover:text-gray-600"
              >
                <Italic className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="p-1 text-gray-400 hover:text-gray-600"
              >
                <List className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="p-1 text-gray-400 hover:text-gray-600"
              >
                <LinkIcon className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="p-1 text-gray-400 hover:text-gray-600"
              >
                <Image className="w-4 h-4" />
              </button>
            </div>
            <span className="text-xs text-gray-400">
              {charCount} / {maxChars}
            </span>
          </div>
        </div>

        {/* Attach Resume */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Attach your resume
          </label>
          <div className="flex items-center gap-3">
            <input
              type="file"
              id="resume"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="hidden"
            />
            <label
              htmlFor="resume"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-dashed border-teal-300 rounded-md cursor-pointer hover:border-teal-400 transition-colors"
            >
              <Upload className="w-5 h-5 text-teal-600" />
              <span className="text-sm text-teal-600 font-medium">
                {formData.resume ? formData.resume.name : "Attach Resume/CV"}
              </span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
        >
          Submit Application
        </button>

        {/* Terms */}
        <p className="text-xs text-gray-500 text-center mt-4">
          By sending the request you can confirm that you accept our{" "}
          <a
            href="#"
            className="text-indigo-600 hover:underline"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-indigo-600 hover:underline"
          >
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  );
};
