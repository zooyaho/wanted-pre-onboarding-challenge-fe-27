import { API_BASE_URL } from "@/constants/apiPaths";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      alert("토큰이 유효하지 않습니다. 다시 로그인해주세요.");

      window.location.href = "/auth/login"; // 로그인 페이지로 리다이렉트
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
