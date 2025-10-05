import { RoleTypes } from "@/hooks";
import { NavigateFunction } from "react-router-dom";
import { ROLE_SCOPE } from "@/consts/role";
import { DEFAULT_PATH } from "@/consts/default-path";

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
