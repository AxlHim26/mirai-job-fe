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
import { usePublicJobById } from "@/features/public/api/jobs";
import { useParams } from "react-router-dom";

const JobDescPage = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const { data: publicJob, isLoading, error } = usePublicJobById(jobId || "");
  const job = publicJob || mockJobDetail;
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  const jobContentData: JobPageContentProps = {
    description: publicJob?.description || job.description,
    responsibilities: publicJob?.responsibilities || job.responsibilities,
    whoYouAre: publicJob?.whoYouAre || job.whoYouAre,
    niceToHave: publicJob?.niceToHave || job.niceToHave,
    appliedCount: publicJob?.applicants || job.appliedCount,
    capacity: publicJob?.capacity || job.capacity,
    applyBefore: publicJob?.applyBefore || job.applyBefore,
    jobPostedOn: publicJob?.datePosted || job.jobPostedOn,
    jobType: publicJob?.jobType || job.jobType,
    salary: publicJob?.salaryRange || job.salary,
    categories: publicJob?.categories || job.categories,
    requiredSkills: publicJob?.requiredSkills || job.requiredSkills,
  };

  const handleApply = () => {
    setIsApplicationModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsApplicationModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-medium text-gray-900 mb-2">
            Loading job details...
          </div>
          <div className="text-sm text-gray-500">
            Please wait while we fetch the job information.
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-medium text-red-600 mb-2">
            Error loading job
          </div>
          <div className="text-sm text-gray-500">
            The job you're looking for could not be found.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-y-auto">
      <LandingHeader />
      <JobHeader
        jobName={publicJob?.jobTitle || job.jobName}
        jobType={publicJob?.jobType || job.jobType}
        location={publicJob?.location || job.location}
        companyName={publicJob?.companyName || job.company.name}
        companyLogo={publicJob?.companyLogo || job.company.logoSrc}
        onApply={handleApply}
      />

      <JobPageContent {...jobContentData} />

      <JobBenefits benefits={publicJob?.benefits || job.benefits} />
      <CompanyAboutSection
        companyName={publicJob?.companyName || job.company.name}
        companyLogoSrc={publicJob?.companyLogo || job.company.logoSrc}
        companyDescription={
          publicJob?.companyDescription || job.company.description
        }
        companyGalleryImages={
          publicJob?.companyGalleryImages || job.company.galleryImages
        }
      />
      <LandingFooter />

      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={handleCloseModal}
        jobName={publicJob?.jobTitle || job.jobName}
        companyName={publicJob?.companyName || job.company.name}
        location={publicJob?.location || job.location}
        jobType={publicJob?.jobType || job.jobType}
      />
    </div>
  );
};

export default JobDescPage;
