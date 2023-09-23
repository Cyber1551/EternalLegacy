import { RoleType } from "./roleType";

export interface UserRole {
  userRoleId: number;
  userId: number;
  legacyId: number;
  role: RoleType;
}
