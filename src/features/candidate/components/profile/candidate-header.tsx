import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { CandidateProfileResponse } from "../../api/profile/profile";

interface CandidateHeaderProps {
  candidateData?: CandidateProfileResponse;
}

export const CandidateHeader: React.FC<CandidateHeaderProps> = ({
  candidateData,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src={
              candidateData?.avatar ||
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            }
            alt={candidateData?.name || "Candidate"}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {candidateData?.name || "Candidate Name"}
              </h1>
              <p className="text-lg text-gray-600 mt-1">
                {candidateData?.experience || "Software Developer"} at{" "}
                {candidateData?.education || "Tech Company"}
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">
                {candidateData?.address && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{candidateData.address}</span>
                  </div>
                )}
                {candidateData?.email && (
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>{candidateData.email}</span>
                  </div>
                )}
                {candidateData?.phone && (
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    <span>{candidateData.phone}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex-shrink-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                OPEN FOR OPPORTUNITIES
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
