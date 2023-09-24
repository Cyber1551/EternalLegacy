/* eslint-disable @typescript-eslint/no-unused-vars */ //REMOVE AFTER IMPLEMENTATION
import axios from "axios";
import {
  mockLegacies,
  mockLegacyContent1,
  mockLegacyContent2,
  mockLegacyContent3,
} from "./mockData";
import { ILegacy } from "../models/legacy";
import { ILegacyContent } from "../models/legacyContent";

// LEGACY -------------------------------
export const getLegacyById = async (
  legacyId: number
): Promise<ILegacy | undefined> => {
  return axios.get(
    `https://localhost:44364/Legacy/GetLegaciesByLegacyId/${legacyId}`
  );
  //return mockLegacies.find((x) => x.legacyId === legacyId);
};

export const getLegacyByUserEmail = async (
  userEmail: string
): Promise<Array<ILegacy> | undefined> => {
  const response = await axios.get(
    `https://localhost:44364/GetLegaciesByUserEmail/${userEmail}`
  );
  return response.data;
  //return mockLegacies.find((x) => x.legacyId === legacyId);
};

export const createLegacy = async (legacy: ILegacy): Promise<ILegacy> => {
  return axios.post(`https://localhost:44364/Legacy/create/legacy`, legacy);
  return mockLegacies[0];
};

export const updateLegacy = async (legacy: ILegacy): Promise<ILegacy> => {
  // actual axios
  return mockLegacies[0];
};

export const removeLegacy = async (legacyId: number): Promise<boolean> => {
  // actual axios
  return true;
};

// LEGACY CONTENT -----------------------
export const addLegacyContent = async (
  legacyContent: ILegacyContent
): Promise<ILegacyContent> => {
  // actual axios FIGURE OUT HOW
  return axios.post(
    `https://localhost:44364/Legacy/content/legacyContent`,
    legacyContent
  );
  return mockLegacyContent1;
};

export const getLegacyContentForLegacy = async (
  legacyId: number
): Promise<ILegacyContent[]> => {
  // actual axios
  return axios.get(
    `https://localhost:44364/Legacy/GetLegacyContentByLegacyId/${legacyId}`
  );
  return [mockLegacyContent1, mockLegacyContent2];
};

export const updateLegacyContent = async (
  content: ILegacyContent
): Promise<ILegacyContent> => {
  // actual axios
  return mockLegacyContent1;
};

export const removeLegacyContent = async (
  legacyContentId: number
): Promise<boolean> => {
  // return axios.get('URL HERE');
  return true;
};
