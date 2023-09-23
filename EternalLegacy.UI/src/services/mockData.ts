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
  contentID: "QmXPxfPrAnfFgVYQAd9gEUroNLEWny53UMVMDaAi5DU5VG",
  caption: "He looks mad",
  date: new Date("2023-08-25T11:00:00"),
  dateType: DateType.date,
};

export const mockLegacyContent2: ILegacyContent = {
  legacyContentId: 2,
  legacyId: 1,
  order: 2,
  contentID: "QmdmK7UWhoRFP5Aq9wu92gH4bmUvY6AR7T9ivjHWKwNsiD",
  caption: "Yikes look at those lines",
  date: new Date("2023-09-25T11:00:00"),
  dateType: DateType.time,
};
