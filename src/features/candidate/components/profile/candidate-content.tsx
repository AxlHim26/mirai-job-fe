import React from "react";
import { User, MapPin, Mail, Phone, Globe, Languages } from "lucide-react";
import { CandidateProfileResponse } from "../../api/profile/profile";

interface CandidateContentProps {
  candidateData?: CandidateProfileResponse;
}

export const CandidateContent: React.FC<CandidateContentProps> = ({
  candidateData,
}) => {
  return (
    <div className="space-y-8">
      {/* About Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <User className="w-5 h-5" />
          About Me
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {candidateData?.bio ||
            "Passionate software developer with a strong background in full-stack development. I love creating innovative solutions and working with cutting-edge technologies. Always eager to learn and contribute to meaningful projects."}
        </p>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {candidateData?.email && (
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Mail className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900">
                  {candidateData.email}
                </p>
              </div>
            </div>
          )}

          {candidateData?.phone && (
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Phone className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-gray-900">
                  {candidateData.phone}
                </p>
              </div>
            </div>
          )}

          {candidateData?.address && (
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <MapPin className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-gray-900">
                  {candidateData.address}
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Globe className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm text-gray-500">Website</p>
              <p className="font-medium text-gray-900">
                www.candidate-portfolio.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Languages */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Languages className="w-5 h-5" />
          Skills & Languages
        </h2>

        {/* Skills */}
        {candidateData?.skills && candidateData.skills.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {candidateData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">Languages</h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              English (Native)
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Vietnamese (Fluent)
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              Spanish (Intermediate)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
