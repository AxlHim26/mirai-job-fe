import {
  JobHeader,
  JobPageContent,
  JobPageContentProps,
  JobBenefits,
  CompanyAboutSection,
} from "@/features/job-detail/components";
import { ApplicationModal } from "@/features/job-detail/components/application-modal";
import { mockJobDetail } from "@/features/job-detail/api/job.mock";
import { LandingFooter, LandingHeader } from "@/components/layouts";
import { useState } from "react";

const JobDescPage = () => {
  const job = mockJobDetail;
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

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

  const handleApply = () => {
    setIsApplicationModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsApplicationModalOpen(false);
  };

  return (
    <div className="min-h-screen overflow-y-auto">
      <LandingHeader />
      <JobHeader
        jobName={job.jobName}
        jobType={job.jobType}
        location={job.location}
        onApply={handleApply}
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

      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={handleCloseModal}
        jobName={job.jobName}
        companyName={job.company.name}
        location={job.location}
        jobType={job.jobType}
      />
    </div>
  );
};

export default JobDescPage;
