import { LocalIcon } from "@/assets/icons/local-icon";
import { Button } from "@/components/ui";

export const CandidateHeader = () => {
  return (
    <header className="flex items-center justify-between p-[32px]">
      <span className="text-[32px] text-[#25324B] font-semibold leading-[38.4px]">
        Message
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
