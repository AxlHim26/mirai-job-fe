import { JobDetailsSidebar } from "./job-description-sidebar";
import { JobDescriptionContent } from "./job-description-content";

export interface JobPageContentProps {
  description: string;
  responsibilities: string[];
  whoYouAre: string[];
  niceToHave: string[];
  appliedCount: number;
  capacity: number;
  applyBefore: string;
  jobPostedOn: string;
  jobType: string;
  salary: string;
  categories: string[];
  requiredSkills: string[];
}

export const JobPageContent = (props: JobPageContentProps) => {
  const {
    description,
    responsibilities,
    whoYouAre,
    niceToHave,
    ...detailsProps
  } = props;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 pt-8 mt-16 px-32 ">
        <JobDescriptionContent
          description={description}
          responsibilities={responsibilities}
          whoYouAre={whoYouAre}
          niceToHave={niceToHave}
        />

        <JobDetailsSidebar {...detailsProps} />
      </div>
      <div className="w-[83%] border-b border-gray-400 mx-auto" />
    </>
  );
};
