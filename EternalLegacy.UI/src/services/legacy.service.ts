/* eslint-disable @typescript-eslint/no-unused-vars */ //REMOVE AFTER IMPLEMENTATION
import axios from "axios";
import {
  mockLegacies,
  mockLegacyContent1,
  mockLegacyContent2,
} from "./mockData";
import { ILegacy } from "../models/legacy";
import { ILegacyContent } from "../models/legacyContent";

// LEGACY -------------------------------
export const getLegacies = async (
  userEmail: string
): Promise<Array<ILegacy>> => {
  // return axios.get('URL HERE');
  return mockLegacies;
};

export const getLegacyById = async (
    legacyId: number
): Promise<ILegacy | undefined> => {
  // return axios.get('URL HERE');
  return mockLegacies.find(x => x.legacyId === legacyId)
};


export const createLegacy = async (legacy: ILegacy): Promise<ILegacy> => {
  // actual axios
  return mockLegacies[0];
};

export const updateLegacy = async (legacy: ILegacy): Promise<ILegacy> => {
  // actual axios
  return mockLegacies[0];
};

export const removeLegacy = async (legacyId: number): Promise<boolean> => {
  // return axios.get('URL HERE');
  return true;
};

// LEGACY CONTENT -----------------------
export const addLegacyContent = async (
  content: ILegacyContent
): Promise<ILegacyContent> => {
  // actual axios
  return mockLegacyContent1;
};

export const updateLegacyContent = async (
  content: ILegacyContent
): Promise<ILegacyContent> => {
  // actual axios
  return mockLegacyContent1;
};

export const getLegacyContentForLegacy = async (
  legacyId: number
): Promise<ILegacyContent[]> => {
  // actual axios
  return [mockLegacyContent1, mockLegacyContent2];
};

export const removeLegacyContent = async (
  legacyContentId: number
): Promise<boolean> => {
  // return axios.get('URL HERE');
  return true;
};
