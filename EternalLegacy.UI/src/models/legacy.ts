import { LegacyType } from "./legacyType";

export interface ILegacy {
  legacyId: number;
  legacyType: LegacyType;
  openDate?: Date;
  published: boolean;
}
