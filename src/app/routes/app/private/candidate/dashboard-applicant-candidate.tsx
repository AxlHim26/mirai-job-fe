import { DashboardApplicantCalendar } from "@/features/dashboard-applicant/components/calendar";
import { DashboardApplicantChart } from "@/features/dashboard-applicant/components/chart";
import { DashboardApplicantHistory } from "@/features/dashboard-applicant/components/history/dashboard-applicant-history";

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
