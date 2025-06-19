import * as React from 'react';
import { useUser } from './auth';

export enum ROLES {
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_RECRUITER = 'ROLE_RECRUITER',
  ROLE_CANDIDATE = 'ROLE_CANDIDATE'
}

type RoleTypes = keyof typeof ROLES;

// This hook is used to check if the user has access to certain roles
export const useAuthorization = () => {
  const user = useUser();

  if (!user.data) {
    throw Error('User does not exist!');
  }

  const checkAccess = React.useCallback(
    ({ allowedRoles }: { allowedRoles: RoleTypes[] }) => {
      return allowedRoles.includes(user.data.role as RoleTypes);
    },
    [user.data],
  );

  return { checkAccess, role: user.data.role };
};

type AuthorizationProps = {
  allowedRoles: RoleTypes[];
  forbiddenFallback?: React.ReactNode;
  children: React.ReactNode;
};


/**
 * how to use: 
 * ```tsx
 * <Authorization allowedRoles={[ROLES.ROLE_ADMIN, ...]}>
 *   <YourComponent />
 * </Authorization>
 * ```
 */
export const Authorization = ({
  allowedRoles,
  forbiddenFallback = null,
  children,
}: AuthorizationProps) => {
  const { checkAccess } = useAuthorization();
  const canAccess = checkAccess({ allowedRoles });

  return <>{canAccess ? children : forbiddenFallback}</>;
};
