import { RoleType } from "./roleType";

export interface IUserRole {
  userRoleId: number;
  userId: number;
  legacyId: number;
  role: RoleType;
}
