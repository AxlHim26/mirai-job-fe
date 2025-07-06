import { LoaclIcon } from "@/assets/icons/local-icon";

interface JobHeaderProps {
  jobName: string;
  jobType: string;
  location: string;
}

export const JobHeader = ({ jobName, jobType, location }: JobHeaderProps) => (
  <div className="px-32 py-24 bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-5">
        <LoaclIcon
          iconName="JobLogo"
          width={88}
          height={90}
        />
        <div className="space-y-1">
          <h1 className="text-[32px] font-semibold text-gray-800">{jobName}</h1>
          <p className="text-[20px] text-gray-500">
            {location} • {jobType}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <figure className="py-3 cursor-pointer border-r border-gray-300 pr-8 mr-7 flex items-center h-full">
          <LoaclIcon
            iconName="JobShare"
            width={32}
            height={33}
          />
        </figure>
        <button className="px-8 py-3 bg-indigo-600 text-white text-lg rounded-md hover:bg-indigo-700 transition-colors">
          Apply
        </button>
      </div>
    </div>
  </div>
);
