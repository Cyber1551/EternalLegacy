import { LegacyType } from "./legacyType";
import {DateType} from "./dateType.ts";

export interface ILegacy {
  legacyId: number;
  legacyType: LegacyType;
  openDate?: Date;
  published: boolean;
  legacyName: string;
  dateType: DateType;
}
