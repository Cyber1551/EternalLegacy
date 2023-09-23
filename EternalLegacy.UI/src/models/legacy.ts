import { LegacyType } from "./legacyType";

export interface Legacy {
  legacyId: number;
  legacyType: LegacyType;
  openDate: Date;
  published: boolean;
}
