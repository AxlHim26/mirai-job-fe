import { Authorization } from "@/lib/authorization";
import { ROLES } from "@/hooks";
import { Outlet } from "react-router-dom";

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
      <>
        <Outlet />
      </>
    </Authorization>
  );
};

export default CandidateRoute;
