import { Edit2, Globe, Mail, Phone, Twitter } from "lucide-react";
import { useCandidateProfile } from "../../api/profile/profile";

export const ProfileLeftSidebar = () => {
  const { data: candidateData } = useCandidateProfile();
  return (
    <div className="lg:col-span-1 space-y-4">
      {/* Additional Details */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-base">Additional Details</h3>
          <button className="text-blue-600 hover:text-blue-700">
            <Edit2 size={16} />
          </button>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <Mail
              size={18}
              className="text-gray-400 mt-0.5 flex-shrink-0"
            />
            <span className="text-gray-700">
              {candidateData?.email || "jakagy@email.com"}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <Phone
              size={18}
              className="text-gray-400 mt-0.5 flex-shrink-0"
            />
            <span className="text-gray-700">
              {candidateData?.phone || "+44 798 572 135"}
            </span>
          </div>
          <div className="pt-2 border-t border-gray-100">
            <p className="text-gray-500 text-xs mb-1">Languages</p>
            <p className="text-gray-900 font-medium">English, French</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-base">Social Links</h3>
          <button className="text-blue-600 hover:text-blue-700">
            <Edit2 size={16} />
          </button>
        </div>
        <div className="space-y-3">
          <a
            href="#"
            className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-600 group"
          >
            <Twitter
              size={18}
              className="text-blue-500"
            />
            <span className="group-hover:underline">twitter.com/jakegyll</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-600 group"
          >
            <Globe
              size={18}
              className="text-gray-400"
            />
            <span className="group-hover:underline">www.jakegyll.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};
