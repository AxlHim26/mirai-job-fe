import { LocalIcon } from "@/assets/icons/local-icon";
import { Button } from "@/components/ui";
import { useAuthStore } from "@/stores";

export const RecruiterHeader = () => {
  const { user } = useAuthStore();
  return (
    <header className="flex items-center justify-between px-8 py-8">
      <div className="flex items-center gap-4">
        <figure>
          <img
            src={user?.avatar || "/default-avatar.png"}
            alt="avatar"
            className="h-8 w-8"
          />
        </figure>
        <div className="flex flex-col">
          <span className="text-[16px] leading-[25.6px]">Company</span>
          <span className="text-[20px] font-semibold leading-[24px]">
            {user?.fullName}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <figure>
          <LocalIcon iconName="NotificationIcon" />
        </figure>
        <Button
          className="text-[16px] font-bold leading-[25.6px] px-[24px] py-[12px]"
          startIcon={<LocalIcon iconName="plus_icon" />}
        >
          Post a job
        </Button>
      </div>
    </header>
  );
};
