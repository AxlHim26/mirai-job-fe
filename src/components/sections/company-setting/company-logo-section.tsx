import { LocalIcon } from "@/assets/icons/local-icon";
import { SectionTitle } from "./section-title";
import { useState } from "react";

export const CompanyLogoSection = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  return (
    <div className="grid grid-cols-12 gap-6 border-b border-gray-300 pb-6 items-start">
      <div className="col-span-12 md:col-span-4">
        <SectionTitle title="Company Logo" />
        <h3 className="text-sm text-gray-500 mb-2">Company Logo</h3>
      </div>
      <div className="col-span-8 flex items-center gap-6">
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview Logo"
            className="h-36 w-44 object-contain border rounded-md"
          />
        ) : (
          <LocalIcon
            iconName="JobLogo"
            className="h-36 w-44"
          />
        )}

        <label
          htmlFor="logo-upload"
          className="flex flex-col items-center justify-center w-88 h-44 border-2 border-dashed border-blue-700 rounded-md cursor-pointer hover:border-blue-900 transition text-center"
        >
          <svg
            className="w-6 h-6 text-gray-400 mb-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5V16a4 4 0 014-4h1m4 0h1a4 4 0 014 4v.5M12 12v6m0 0l-2-2m2 2l2-2m-6-6a2 2 0 114 0 2 2 0 01-4 0z"
            />
          </svg>
          <span className="text-[10px] text-gray-600 leading-tight">
            <span>Click to replace</span> or drag and drop!
            <br />
            SVG, PNG, JPG
            <br />
            (400x400)
          </span>
          <input
            id="logo-upload"
            name="logo-upload"
            type="file"
            accept=".svg,.png,.jpg,.jpeg"
            className="sr-only"
            onChange={handleUpload}
            aria-label="Upload Logo"
          />
        </label>
      </div>
    </div>
  );
};
