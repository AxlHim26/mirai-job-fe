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
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  // Check if we have publicJob data
  const isPublicJob = !!publicJob;

  const jobContentData: JobPageContentProps = {
    description: isPublicJob
      ? publicJob.description
      : mockJobDetail.description,
    responsibilities: isPublicJob
      ? publicJob.responsibilities
      : mockJobDetail.responsibilities,
    whoYouAre: isPublicJob ? publicJob.whoYouAre : mockJobDetail.whoYouAre,
    niceToHave: isPublicJob ? publicJob.niceToHave : mockJobDetail.niceToHave,
    appliedCount: isPublicJob
      ? publicJob.applicants
      : mockJobDetail.appliedCount,
    capacity: isPublicJob ? publicJob.capacity : mockJobDetail.capacity,
    applyBefore: isPublicJob
      ? publicJob.applyBefore
      : mockJobDetail.applyBefore,
    jobPostedOn: isPublicJob ? publicJob.datePosted : mockJobDetail.jobPostedOn,
    jobType: isPublicJob ? publicJob.jobType : mockJobDetail.jobType,
    salary: isPublicJob ? publicJob.salaryRange : mockJobDetail.salary,
    categories: isPublicJob ? publicJob.categories : mockJobDetail.categories,
    requiredSkills: isPublicJob
      ? publicJob.requiredSkills
      : mockJobDetail.requiredSkills,
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
        jobName={isPublicJob ? publicJob.jobTitle : mockJobDetail.jobName}
        jobType={isPublicJob ? publicJob.jobType : mockJobDetail.jobType}
        location={isPublicJob ? publicJob.location : mockJobDetail.location}
        companyName={
          isPublicJob ? publicJob.companyName : mockJobDetail.company.name
        }
        companyLogo={
          isPublicJob ? publicJob.companyLogo : mockJobDetail.company.logoSrc
        }
        onApply={handleApply}
      />

      <JobPageContent {...jobContentData} />

      <JobBenefits
        benefits={isPublicJob ? publicJob.benefits : mockJobDetail.benefits}
      />
      <CompanyAboutSection
        companyName={
          isPublicJob ? publicJob.companyName : mockJobDetail.company.name
        }
        companyLogoSrc={
          isPublicJob ? publicJob.companyLogo : mockJobDetail.company.logoSrc
        }
        companyDescription={
          isPublicJob
            ? publicJob.companyDescription
            : mockJobDetail.company.description
        }
        companyGalleryImages={
          isPublicJob
            ? publicJob.companyGalleryImages
            : mockJobDetail.company.galleryImages
        }
      />
      <LandingFooter />

      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={handleCloseModal}
        jobName={isPublicJob ? publicJob.jobTitle : mockJobDetail.jobName}
        companyName={
          isPublicJob ? publicJob.companyName : mockJobDetail.company.name
        }
        location={isPublicJob ? publicJob.location : mockJobDetail.location}
        jobType={isPublicJob ? publicJob.jobType : mockJobDetail.jobType}
      />
    </div>
  );
};

export default JobDescPage;
