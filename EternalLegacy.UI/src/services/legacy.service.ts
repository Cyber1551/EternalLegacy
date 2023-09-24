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
  const response = await axios.get(
    `https://localhost:44364/GetLegaciesByLegacyId/${legacyId}`
  );
  return response.data;
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
  const response = await axios.post(`https://localhost:44364/Create`, legacy);
  return response.data;
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
  const response = await axios.post(
    `https://localhost:44364/Content`,
    legacyContent
  );
  return response.data;
};

export const getLegacyContentForLegacy = async (
  legacyId: number
): Promise<ILegacyContent[]> => {
  // actual axios
  const response = await axios.get(
    `https://localhost:44364/GetLegacyContentByLegacyId/${legacyId}`
  );
  return response.data;
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
