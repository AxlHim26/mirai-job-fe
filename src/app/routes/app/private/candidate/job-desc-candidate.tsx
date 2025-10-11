import {
  JobHeader,
  JobPageContent,
  JobPageContentProps,
  JobBenefits,
  CompanyAboutSection,
} from "@/features/job-detail/components";
import { ApplicationModal } from "@/features/job-detail/components/application-modal";
import { useJobById } from "@/features/candidate/api/jobs";
import { useState } from "react";
import { useParams } from "react-router-dom";

const JobDescPage = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const { data: job, isLoading, error } = useJobById(jobId || "");
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading job details...</p>
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg font-medium mb-2">Job not found</p>
          <p className="text-gray-500">
            The job you're looking for doesn't exist or has expired.
          </p>
        </div>
      </div>
    );
  }

  const jobContentData: JobPageContentProps = {
    description: job.description,
    responsibilities: job.reponsibility
      ? job.reponsibility.split("\n").filter((s) => s.trim())
      : [],
    whoYouAre: job.whoAreYou
      ? job.whoAreYou.split("\n").filter((s) => s.trim())
      : [],
    niceToHave: job.niceToHave
      ? job.niceToHave.split("\n").filter((s) => s.trim())
      : [],
    appliedCount: job.appliedCount || 0,
    capacity: job.capacity,
    applyBefore: job.expiredDate,
    jobPostedOn: job.createdAt,
    jobType: job.jobType,
    salary: job.salary,
    categories: [job.category],
    requiredSkills: job.requireSkill
      ? job.requireSkill.split(",").map((s) => s.trim())
      : [],
  };

  return (
    <div className="min-h-screen overflow-y-auto">
      <JobHeader
        jobName={job.jobName}
        jobType={job.jobType}
        location={job.location || "Remote"}
        onApply={handleApply}
      />

      <JobPageContent {...jobContentData} />

      <JobBenefits benefits={[]} />
      <CompanyAboutSection
        companyName={job.company || "Company"}
        companyLogoSrc={
          job.logo ||
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center"
        }
        companyDescription="We are a leading technology company focused on innovation and excellence."
        companyGalleryImages={[]}
      />

      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={handleCloseModal}
        jobName={job.jobName}
        companyName={job.company || "Company"}
        location={job.location || "Remote"}
        jobType={job.jobType}
      />
    </div>
  );
};

export default JobDescPage;
