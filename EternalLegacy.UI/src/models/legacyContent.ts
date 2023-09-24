import {ContentType} from "./contentType.ts";

export interface ILegacyContent {
  legacyContentId: number;
  legacyId: number;
  order: number;
  contentID: string;
  caption: string;
  date: Date;
  contentType: ContentType;
}
