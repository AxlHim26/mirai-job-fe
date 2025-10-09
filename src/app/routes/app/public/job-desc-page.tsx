import {
  JobHeader,
  JobPageContent,
  JobPageContentProps,
  JobBenefits,
  CompanyAboutSection,
} from "@/features/job-detail/components";
import { mockJobDetail } from "@/features/job-detail/api/job.mock";
import { LandingFooter, LandingHeader } from "@/components/layouts";

const JobDescPage = () => {
  const job = mockJobDetail;

  const jobContentData: JobPageContentProps = {
    description: job.description,
    responsibilities: job.responsibilities,
    whoYouAre: job.whoYouAre,
    niceToHave: job.niceToHave,
    appliedCount: job.appliedCount,
    capacity: job.capacity,
    applyBefore: job.applyBefore,
    jobPostedOn: job.jobPostedOn,
    jobType: job.jobType,
    salary: job.salary,
    categories: job.categories,
    requiredSkills: job.requiredSkills,
  };

  return (
    <div className="min-h-screen overflow-y-auto">
      <LandingHeader />
      <JobHeader
        jobName={job.jobName}
        jobType={job.jobType}
        location={job.location}
      />

      <JobPageContent {...jobContentData} />

      <JobBenefits benefits={job.benefits} />
      <CompanyAboutSection
        companyName={job.company.name}
        companyLogoSrc={job.company.logoSrc}
        companyDescription={job.company.description}
        companyGalleryImages={job.company.galleryImages}
      />
      <LandingFooter />
    </div>
  );
};

export default JobDescPage;
