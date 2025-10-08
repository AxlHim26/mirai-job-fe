import { useAuthStore } from "@/stores";
import { AppSideBar } from "./side-bar";
import { ROLES } from "@/consts";
import { CandidateHeader } from "../candidate";
import { RecruiterHeader } from "../recruiter";

export const AppMain: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const role = useAuthStore((state) =>
    state.user ? state.user.role.name : "undefined"
  );

  return (
    <main className="flex flex-1 h-screen overflow-hidden">
      <AppSideBar />
      <div className="flex-1 flex flex-col">
        {role === ROLES.ROLE_CANDIDATE ? (
          <CandidateHeader />
        ) : (
          <RecruiterHeader />
        )}
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </main>
  );
};
