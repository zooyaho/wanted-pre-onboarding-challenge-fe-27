import axiosInstance from "./axiosInstance";

export const postLogin = async (email: string, password: string) => {
  const response = await axiosInstance.post("/users/login", {
    email,
    password,
  });
  return response.data;
};

export const postSignUp = async (email: string, password: string) => {
  const response = await axiosInstance.post("/users/create", {
    email,
    password,
  });
  return response.data;
};
