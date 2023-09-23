import { DateType } from "../models/dateType";
import { ILegacy } from "../models/legacy";
import { ILegacyContent } from "../models/legacyContent";
import { LegacyType } from "../models/legacyType";
import { RoleType } from "../models/roleType";
import { IUser } from "../models/user";
import { IUserRole } from "../models/userRole";

//MOCK DATA
export const mockUser: IUser = {
  userId: 1,
  userEmail: "Justin.Morrow@kiewit.com",
};

export const mockLegacy: ILegacy = {
  legacyId: 1,
  legacyType: LegacyType.Presentation,
  published: true,
};

export const mockUserRole: IUserRole = {
  userRoleId: 1,
  userId: 1,
  legacyId: 1,
  role: RoleType.Owner,
};

export const mockLegacyContent1: ILegacyContent = {
  legacyContentId: 1,
  legacyId: 1,
  order: 1,
  contentID: "content ID for 1 here",
  caption: "Caption 1 here",
  date: new Date("2023-08-25T11:00:00"),
  dateType: DateType.date,
};

export const mockLegacyContent2: ILegacyContent = {
  legacyContentId: 2,
  legacyId: 1,
  order: 2,
  contentID: "content ID for 2 here",
  caption: "Caption 2 here",
  date: new Date("2023-09-25T11:00:00"),
  dateType: DateType.time,
};