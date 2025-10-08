import { LandingFooter, LandingHeader } from "@/components/layouts/landing";
import { Hero } from "@/components/sections/landing";
import JobList from "@/components/sections/landing/job-list";

const FindJobsRoute = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      <Hero />
      <JobList />
      <LandingFooter />
    </div>
  );
};

export default FindJobsRoute;
