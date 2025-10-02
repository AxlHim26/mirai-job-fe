import { LocalIcon } from "@/assets/icons/local-icon";
import { Button } from "@/components/ui";
import { useLocation } from "react-router-dom";

export const CandidateHeader = () => {
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname.includes("/messages")) {
      return "Messages";
    } else if (location.pathname.includes("/applicant")) {
      return "Dashboard";
    } else if (location.pathname.includes("/candidate")) {
      return "Dashboard";
    }
    return "Dashboard";
  };

  return (
    <header className="flex items-center justify-between p-[32px]">
      <span className="text-[32px] text-[#25324B] font-semibold leading-[38.4px]">
        {getPageTitle()}
      </span>
      <div className="flex items-center gap-10">
        <Button variant="ghost">Back to Home</Button>
        <figure>
          <LocalIcon iconName="NotificationIcon" />
        </figure>
      </div>
    </header>
  );
};
