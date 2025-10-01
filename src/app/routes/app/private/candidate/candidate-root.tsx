import { Authorization } from "@/lib/authorization";
import { ROLES } from "@/consts";
import { Outlet } from "react-router-dom";
import { AppMain } from "@/components/layouts";

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
        <AppMain>
          <Outlet />
        </AppMain>
      </>
    </Authorization>
  );
};

export default CandidateRoute;
