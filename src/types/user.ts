import { RoleTypes } from "@/hooks";

export type User = {
  email: string;
  fullName: string;
  role: {
    id: number;
    name: RoleTypes;
    authority: string;
  };
};
