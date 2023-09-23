import { DateType } from "./dateType";

export interface LegacyContent {
  legacyContentId: number;
  legacyId: number;
  order: number;
  contentID: string;
  caption: string;
  date: Date;
  dateType: DateType;
}
