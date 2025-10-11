import { Edit2 } from "lucide-react";
import { useCandidateProfile } from "../../api/profile/profile";

export const ProfileSkill = () => {
  const { data: candidateData } = useCandidateProfile();
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <Edit2 size={18} />
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {candidateData?.skills && candidateData.skills.length > 0 ? (
          candidateData.skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))
        ) : (
          <>
            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              Communication
            </span>
            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              Analytics
            </span>
            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              Facebook Ads
            </span>
            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              Content Planning
            </span>
            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              Community Manager
            </span>
          </>
        )}
      </div>
    </div>
  );
};
