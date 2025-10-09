import { paths } from "@/config/paths";
import { RoleTypes } from "@/hooks";

export const DEFAULT_PATH: Record<RoleTypes, string> = {
  ROLE_CANDIDATE: paths.app.candidate.path,
  ROLE_RECRUITER: paths.app.recruiter.path,
  ROLE_ADMIN: paths.app.admin.path,
};
