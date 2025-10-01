import { SidebarSection } from "./sidebar-section";
import { ApplyProgressBar } from "./apply-progress-bar";
import { InfoRow } from "./info-row";
import { TagList } from "./tag-list";

interface JobDetailsProps {
  appliedCount: number;
  capacity: number;
  applyBefore: string;
  jobPostedOn: string;
  jobType: string;
  salary: string;
  categories: string[];
  requiredSkills: string[];
}

export const JobDetailsSidebar = ({
  appliedCount,
  capacity,
  applyBefore,
  jobPostedOn,
  jobType,
  salary,
  categories,
  requiredSkills,
}: JobDetailsProps) => (
  <div className="w-full md:w-1/3">
    <SidebarSection title="About this role">
      <ApplyProgressBar
        applied={appliedCount}
        capacity={capacity}
      />
      <div className="space-y-3">
        <InfoRow
          label="Apply Before"
          value={applyBefore}
        />
        <InfoRow
          label="Job Posted On"
          value={jobPostedOn}
        />
        <InfoRow
          label="Job Type"
          value={jobType}
        />
        <InfoRow
          label="Salary"
          value={salary}
        />
      </div>
    </SidebarSection>

    <div className="w-[90%] border-b border-gray-300 mx-auto " />

    <SidebarSection title="Categories">
      <TagList
        items={categories}
        isColor={true}
      />
    </SidebarSection>

    <div className="w-[90%] border-b border-gray-300 mx-auto " />

    <SidebarSection title="Required Skills">
      <TagList items={requiredSkills} />
    </SidebarSection>
  </div>
);
