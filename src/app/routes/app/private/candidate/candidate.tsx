import { Authorization, ROLES } from "@/lib/authorization";
import { ProtectedRoute } from "@/lib/auth";

const CandidateRoute = () => {
  return (
    <ProtectedRoute>
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
    </ProtectedRoute>
  );
};

export default CandidateRoute;
