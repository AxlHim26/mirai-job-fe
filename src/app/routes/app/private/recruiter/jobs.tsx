import { lazy } from "react";

const JobPage = lazy(() =>
  import("@/features/jobs/components/job/job-page").then((module) => ({
    default: module.JobPage,
  }))
);

export default function JobPostingRoute() {
  return <JobPage />;
}
