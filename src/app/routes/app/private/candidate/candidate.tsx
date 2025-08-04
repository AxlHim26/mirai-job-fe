import { Authorization } from "@/lib/authorization";
import { ROLES } from "@/hooks";

const CandidateRoute = () => {
  return (
    <Authorization
      allowedRoles={[ROLES.ROLE_CANDIDATE]}
      forbiddenFallback={
        <div className="flex items-center justify-center h-full">
          <h1 className="text-2xl font-bold text-red-500">Access Denied</h1>
        </div>
      }
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-bold mb-4">Candidate Dashboard</h1>
        {/* Additional candidate-specific content can go here */}
      </div>
    </Authorization>
  );
};

export default CandidateRoute;
