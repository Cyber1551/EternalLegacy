import { ContentType } from "./contentType.ts";

export interface ILegacyContent {
  legacyContentId: number;
  legacyId: number;
  order: number;
  contentId: string;
  caption: string;
  date: Date;
  contentType: ContentType;
}
