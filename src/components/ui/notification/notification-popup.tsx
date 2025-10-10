import React from "react";
import { NotificationItem } from "./notification-item";

export type Notification = {
  id: string;
  avatar: string;
  name: string;
  message: string;
  status?: {
    label: string;
    color: "yellow" | "green" | "red" | "blue";
  };
  timestamp: string;
  interviewDetails?: {
    title: string;
    role: string;
    date: string;
    time: string;
    contactPerson: {
      name: string;
      email: string;
      avatar: string;
    };
    timestamp: string;
  };
};

type NotificationPopupProps = {
  notifications: Notification[];
  onMarkAllAsRead: () => void;
  onClose: () => void;
};

export const NotificationPopup: React.FC<NotificationPopupProps> = ({
  notifications,
  onMarkAllAsRead,
}) => {
  return (
    <div className="fixed top-20 right-8 w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-[600px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
        <button
          onClick={onMarkAllAsRead}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          Mark all as read
        </button>
      </div>

      {/* Notifications List */}
      <div className="overflow-y-auto max-h-[500px]">
        {notifications.map((notification, index) => (
          <div key={notification.id}>
            <NotificationItem notification={notification} />
            {index < notifications.length - 1 && (
              <div className="border-b border-gray-100" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
