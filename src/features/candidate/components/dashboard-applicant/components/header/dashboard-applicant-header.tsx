import { Bell } from "lucide-react";
import { Button } from "@/components/ui";

export const DashboardApplicantHeader = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex items-center gap-4">
        <Button
          variant="link"
          className="text-indigo-600 font-medium hover:text-indigo-700"
        >
          Back to homepage
        </Button>
        <Button
          variant="icon"
          size="icon"
          className="relative"
        >
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>
      </div>
    </div>
  );
};
