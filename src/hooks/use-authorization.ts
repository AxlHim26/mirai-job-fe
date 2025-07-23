import { useAuthStore } from "@/stores/auth-store";

export enum ROLES {
  ROLE_RECRUITER = "ROLE_RECRUITER",
  ROLE_CANDIDATE = "ROLE_CANDIDATE",
  ROLE_ADMIN = "ROLE_ADMIN",
}

export type RoleTypes = keyof typeof ROLES;

export const useAuthorization = () => {
  const user = useAuthStore((state) => state.user);

  if (user == null) {
    throw Error("User does not exist!");
  }

  const checkAccess = ({ allowedRoles }: { allowedRoles: RoleTypes[] }) => {
    return allowedRoles.includes(user.role.name as RoleTypes);
  };

  return { checkAccess, role: user.role };
};
