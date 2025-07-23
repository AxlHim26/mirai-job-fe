import { Authorization } from "@/lib/authorization";
import { ROLES } from "@/hooks";

const RecruiterRoute = () => {
  return (
    <Authorization
      allowedRoles={[ROLES.ROLE_RECRUITER]}
      forbiddenFallback={
        <div className="flex items-center justify-center h-full">
          <h1 className="text-2xl font-bold text-red-500">Access Denied</h1>
        </div>
      }
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-bold mb-4">Recruiter Dashboard</h1>
        <p className="text-gray-600">Welcome to your recruiter dashboard!</p>
        {/* Add more recruiter-specific components or information here */}
      </div>
    </Authorization>
  );
};

export default RecruiterRoute;
