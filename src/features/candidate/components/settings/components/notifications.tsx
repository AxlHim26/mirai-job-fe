import { useState } from "react";
import { Button, Toggle } from "@/components/ui";

export const Notifications = () => {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
    marketingEmails: false,
    jobAlerts: true,
    applicationUpdates: true,
  });

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = async () => {
    // TODO: Implement notification settings API call
    console.log("Notification settings:", notifications);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Notification Preferences
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Email Notifications
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Email Notifications
                </div>
                <div className="text-sm text-gray-500">
                  Receive notifications via email
                </div>
              </div>
              <Toggle
                checked={notifications.emailNotifications}
                onCheckedChange={() => handleToggle("emailNotifications")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Job Alerts
                </div>
                <div className="text-sm text-gray-500">
                  Get notified about new job opportunities
                </div>
              </div>
              <Toggle
                checked={notifications.jobAlerts}
                onCheckedChange={() => handleToggle("jobAlerts")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Application Updates
                </div>
                <div className="text-sm text-gray-500">
                  Get notified about application status changes
                </div>
              </div>
              <Toggle
                checked={notifications.applicationUpdates}
                onCheckedChange={() => handleToggle("applicationUpdates")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Marketing Emails
                </div>
                <div className="text-sm text-gray-500">
                  Receive promotional emails and updates
                </div>
              </div>
              <Toggle
                checked={notifications.marketingEmails}
                onCheckedChange={() => handleToggle("marketingEmails")}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Other Notifications
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Push Notifications
                </div>
                <div className="text-sm text-gray-500">
                  Receive push notifications on your device
                </div>
              </div>
              <Toggle
                checked={notifications.pushNotifications}
                onCheckedChange={() => handleToggle("pushNotifications")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">
                  SMS Notifications
                </div>
                <div className="text-sm text-gray-500">
                  Receive notifications via SMS
                </div>
              </div>
              <Toggle
                checked={notifications.smsNotifications}
                onCheckedChange={() => handleToggle("smsNotifications")}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Preferences
          </Button>
        </div>
      </div>
    </div>
  );
};
