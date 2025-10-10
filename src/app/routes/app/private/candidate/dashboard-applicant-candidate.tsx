import { DashboardApplicantCalendar } from "@/features/candidate/components/dashboard-applicant/components/calendar";
import { DashboardApplicantChart } from "@/features/candidate/components/dashboard-applicant/components/chart";
import { DashboardApplicantHistory } from "@/features/candidate/components/dashboard-applicant/components/history/dashboard-applicant-history";

const DashboardApplicant = () => {
  return (
    <div className="p-6">
      <DashboardApplicantCalendar />
      <DashboardApplicantChart />
      <DashboardApplicantHistory />
    </div>
  );
};

export default DashboardApplicant;
