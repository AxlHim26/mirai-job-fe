import { RoleTypes } from "@/hooks";

export enum ROLES {
  ROLE_RECRUITER = "ROLE_RECRUITER",
  ROLE_CANDIDATE = "ROLE_CANDIDATE",
  ROLE_ADMIN = "ROLE_ADMIN",
}

export const ROLE_SCOPE: Record<RoleTypes, string[]> = {
  ROLE_CANDIDATE: ["app/candidate"],
  ROLE_RECRUITER: ["app/recruiter"],
  ROLE_ADMIN: ["app/admin"],
};
