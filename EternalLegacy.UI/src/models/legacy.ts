import { LegacyType } from "./legacyType";
import {DateType} from "./dateType.ts";

export interface ILegacy {
  legacyId: number;
  name: string;
  legacyType: LegacyType;
  openDate?: Date;
  published: boolean;
  legacyName: string;
  dateType: DateType;
}
