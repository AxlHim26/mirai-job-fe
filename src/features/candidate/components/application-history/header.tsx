import { ArrowLeft, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui";

export const ApplicationHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-4">
        <Link
          to="/app/candidate/dashboard"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back to homepage</span>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">My Applications</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="icon"
          size="icon"
          className="relative"
        >
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            1
          </span>
        </Button>
      </div>
    </div>
  );
};
