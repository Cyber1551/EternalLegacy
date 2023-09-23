import { LegacyType } from "./legacyType";

export interface ILegacy {
  legacyId: number;
  name: string;
  legacyType: LegacyType;
  openDate?: Date;
  published: boolean;
}
