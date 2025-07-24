import { RoleTypes } from "@/hooks";
import { paths } from "@/config/paths";
import {
  NavigateFunction,
} from "react-router-dom";

export const DEFAULT_PATH: Record<RoleTypes, string> = {
  ROLE_CANDIDATE: paths.app.candidate.path,
  ROLE_RECRUITER: paths.app.recruiter.path,
  ROLE_ADMIN: paths.app.admin.path,
};

const ROLE_SCOPE: Record<RoleTypes, string[]> = {
  ROLE_CANDIDATE: ["candidate"],
  ROLE_RECRUITER: ["recruiter"],
  ROLE_ADMIN: ["admin"],
};

const isValidRedirect = (
  redirectTo: string | undefined,
  role: RoleTypes
): boolean =>
  Boolean(
    redirectTo &&
      redirectTo.startsWith("/") &&
      ROLE_SCOPE[role]?.some((scope) => redirectTo.startsWith(`/${scope}`))
  );

/**
 * How to use:
 * ```typescript
 * redirectAfterLogin({
 *  redirectTo: "/some-path",
 *  role: user.role.name as ROLES,
 *  navigate: useNavigate(),
 * });
 */
export const redirect = ({
  redirectTo,
  role,
  navigate,
}: {
  redirectTo?: string;
  role: RoleTypes;
  navigate: NavigateFunction;
}) => {
  navigate(
    isValidRedirect(redirectTo, role) ? redirectTo! : DEFAULT_PATH[role],
    { replace: true }
  );
};
