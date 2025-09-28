import { useAuthStore } from "@/stores/auth-store";
import { ROLES } from "@/consts";

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
