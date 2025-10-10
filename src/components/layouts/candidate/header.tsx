import { LocalIcon } from "@/assets/icons/local-icon";
import { Button } from "@/components/ui";
import {
  NotificationBadge,
  NotificationPopup,
  mockNotifications,
} from "@/components/ui/notification";
import { paths } from "@/config/paths";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const CandidateHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  const handleMarkAllAsRead = () => {
    // TODO: Implement mark all as read functionality
    console.log("Mark all as read");
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  const title = (() => {
    const pathname = location.pathname;

    if (pathname.startsWith(paths.app.candidate.getHref())) {
      if (pathname.startsWith(paths.candidate.dashboard.getHref()))
        return "Dashboard";
      if (pathname.startsWith(paths.common.messages.getHref()))
        return "Messages";
      if (pathname.startsWith(paths.candidate.applications.getHref()))
        return "My Applications";
      if (pathname.startsWith(paths.candidate.search.getHref()))
        return "Find Jobs";
      if (pathname.startsWith(paths.candidate.browse.getHref()))
        return "Browse Companies";
      if (pathname.startsWith(paths.candidate.profile.getHref()))
        return "My Public Profile";
      if (pathname.startsWith(paths.candidate.findJobs.getHref()))
        return "Find Jobs";
      if (pathname.startsWith(paths.candidate.settings.getHref()))
        return "Settings";
      if (pathname.startsWith(paths.candidate.help.getHref()))
        return "Help Center";
      return "Candidate";
    }

    // Fallback for any other area rendered with this header
    return "";
  })();

  return (
    <header className="flex items-center justify-between p-[32px]">
      <span className="text-[32px] text-[#25324B] font-semibold leading-[38.4px]">
        {title}
      </span>
      <div className="flex items-center gap-10">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>

        {/* Notification Button */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <LocalIcon iconName="NotificationIcon" />
            <NotificationBadge
              number={3}
              size={16}
              className="absolute -top-1 -right-1"
            />
          </button>

          {/* Notification Popup */}
          {showNotifications && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40"
                onClick={handleCloseNotifications}
              />
              <NotificationPopup
                notifications={mockNotifications}
                onMarkAllAsRead={handleMarkAllAsRead}
                onClose={handleCloseNotifications}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
};
