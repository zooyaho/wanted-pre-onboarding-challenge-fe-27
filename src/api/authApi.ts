import { API_PATHS } from "@/constants/apiPaths";
import axiosInstance from "./axiosInstance";

export const postLogin = async (email: string, password: string) => {
  const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
    email,
    password,
  });
  return response.data;
};

export const postSignUp = async (email: string, password: string) => {
  const response = await axiosInstance.post(API_PATHS.AUTH.SIGNUP, {
    email,
    password,
  });
  return response.data;
};
