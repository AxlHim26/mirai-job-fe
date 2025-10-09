import { ROLE_SCOPE } from "@/consts";
import { RoleTypes } from "@/hooks";

export const truePath = (path: string, role: RoleTypes): boolean => {
  if (!path?.startsWith("/")) return false;

  const scopes = ROLE_SCOPE[role];
  if (!scopes) return false;

  return scopes.some((scope) => path.startsWith(`/${scope}`));
};
