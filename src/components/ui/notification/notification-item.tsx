import React from "react";
import { Notification } from "./notification-popup";

type NotificationItemProps = {
  notification: Notification;
};

const getStatusColor = (color: string) => {
  switch (color) {
    case "yellow":
      return "bg-yellow-100 text-yellow-800";
    case "green":
      return "bg-green-100 text-green-800";
    case "red":
      return "bg-red-100 text-red-800";
    case "blue":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
}) => {
  return (
    <div className="p-4 hover:bg-gray-50">
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <img
          src={notification.avatar}
          alt={notification.name}
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-900 leading-5">
            {notification.message}
          </p>

          {/* Status Badge */}
          {notification.status && (
            <div className="mt-2">
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  notification.status.color
                )}`}
              >
                {notification.status.label}
              </span>
            </div>
          )}

          {/* Interview Details */}
          {notification.interviewDetails && (
            <div className="mt-3 ml-4 border-l-2 border-purple-200 pl-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {notification.interviewDetails.title}
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  {notification.interviewDetails.role}
                </p>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center">
                      <span className="text-xs text-white">📅</span>
                    </div>
                    <span>{notification.interviewDetails.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center">
                      <span className="text-xs text-white">🕐</span>
                    </div>
                    <span>{notification.interviewDetails.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={notification.interviewDetails.contactPerson.avatar}
                      alt={notification.interviewDetails.contactPerson.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <div>
                      <span className="font-medium">
                        {notification.interviewDetails.contactPerson.name}
                      </span>
                      <p className="text-xs text-gray-500">
                        {notification.interviewDetails.contactPerson.email}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  {notification.interviewDetails.timestamp}
                </p>
              </div>
            </div>
          )}

          {/* Timestamp */}
          <p className="text-xs text-gray-500 mt-2">{notification.timestamp}</p>
        </div>
      </div>
    </div>
  );
};
