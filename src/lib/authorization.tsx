import { useAuthorization } from "@/hooks";
import { ROLES } from "@/consts";

type AuthorizationProps = {
  allowedRoles: ROLES[];
  forbiddenFallback?: React.ReactNode;
  children: React.ReactNode;
};

export const Authorization = ({
  allowedRoles,
  forbiddenFallback = null,
  children,
}: AuthorizationProps) => {
  const { checkAccess } = useAuthorization();
  const canAccess = checkAccess({ allowedRoles });

  return <>{canAccess ? children : forbiddenFallback}</>;
};
