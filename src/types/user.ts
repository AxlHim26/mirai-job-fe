import { RoleTypes } from "@/hooks";

export type User = {
  email: string;
  fullName: string;
  avatar: string;
  role: {
    id: number;
    name: RoleTypes;
    authority: string;
  };
};
