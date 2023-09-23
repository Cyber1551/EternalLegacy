/* eslint-disable @typescript-eslint/no-unused-vars */ //REMOVE AFTER IMPLEMENTATION

import { mockUser, mockUserRole } from "./mockData";
import { IUserRole } from "../models/userRole";
import { IUser } from "../models/user";

// USER --------------------------------
export const getUser = async (email: string): Promise<IUser> => {
  // return axios.get('URL HERE');
  return mockUser;
};

export const createUser = async (data: IUser): Promise<IUser> => {
  // actual axios
  return mockUser;
};

export const updateUser = async (data: IUser): Promise<IUser> => {
  // actual axios
  return mockUser;
};

export const removeUser = async (userKey: number): Promise<boolean> => {
  // return axios.get('URL HERE');
  return true;
};

// USER ROLES --------------------------
export const getUserRole = async (
  userKey: number,
  legacyKey: number
): Promise<IUserRole> => {
  // return axios.get('URL HERE');
  return mockUserRole;
};

export const createUserRole = async (data: IUserRole): Promise<IUserRole> => {
  // actual axios
  return mockUserRole;
};

export const updateUserRole = async (data: IUserRole): Promise<IUserRole> => {
  // actual axios
  return mockUserRole;
};

export const removeUserRole = async (
  userKey: number,
  legacyKey: number
): Promise<boolean> => {
  // return axios.get('URL HERE');
  return true;
};
