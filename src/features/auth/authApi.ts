import { API_PATHS } from "@/constants/apiPaths";
import { publicAxiosInstance } from "@/api/axiosInstance";

export const postLogin = async (email: string, password: string) => {
  const response = await publicAxiosInstance.post(API_PATHS.AUTH.LOGIN, {
    email,
    password,
  });
  return response.data;
};

export const postSignUp = async (email: string, password: string) => {
  const response = await publicAxiosInstance.post(API_PATHS.AUTH.SIGNUP, {
    email,
    password,
  });
  return response.data;
};
