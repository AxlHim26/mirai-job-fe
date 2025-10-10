import { lazy } from "react";

const JobPage = lazy(() =>
  import("@/features/recruiter/components/jobs/job-page").then((module) => ({
    default: module.JobPage,
  }))
);

export default function JobPostingRoute() {
  return <JobPage />;
}
