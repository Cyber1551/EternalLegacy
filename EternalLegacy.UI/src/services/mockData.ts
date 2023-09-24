import {DateType} from "../models/dateType";
import {ILegacy} from "../models/legacy";
import {ILegacyContent} from "../models/legacyContent";
import {LegacyType} from "../models/legacyType";
import {RoleType} from "../models/roleType";
import {IUser} from "../models/user";
import {IUserRole} from "../models/userRole";

//MOCK DATA
export const mockUser: IUser = {
  userId: 1,
  userEmail: "Justin.Morrow@kiewit.com",
};

export const mockLegacies: Array<ILegacy> = [
  {
    legacyId: 1,
    name: "legacy with content",
    legacyType: LegacyType.Presentation,
    published: true,
    legacyName: "Legacy one",
    dateType: DateType.year
  },
  {
    legacyId: 2,
    name: "legacy without content",
    legacyType: LegacyType.Memorium,
    published: false,
    legacyName: "Legacy two",
    dateType: DateType.month
  },
  {
    legacyId: 3,
    legacyType: LegacyType.Memorium,
    published: false,
    legacyName: "Legacy three",
    dateType: DateType.day
  },
  {
    legacyId: 4,
    legacyType: LegacyType.Memorium,
    published: false,
    legacyName: "Legacy four",
    dateType: DateType.hour
  },
];

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
};

export const mockLegacyContent2: ILegacyContent = {
  legacyContentId: 2,
  legacyId: 1,
  order: 2,
  contentID: "QmR5uZMmt6rzsyW4iyHjFSb8ieUqqrWJWz7ea2iA6pBV1M",
  caption: "Yikes look at those lines",
  date: new Date("2025-09-25T11:00:00"),
};

export const mockLegacyContent3: ILegacyContent = {
  legacyContentId: 3,
  legacyId: 1,
  order: 3,
  contentID: "QmYmUzdZ8nEQ92uPe1RnNqYW8vihy512N8rqKP9AypgmCM",
  caption: "Justine Justine AHHHH",
  date: new Date("2025-09-25T11:00:00"),
};
