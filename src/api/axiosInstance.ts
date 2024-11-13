import { API_BASE_URL } from "@/constants/apiPaths";
import { ROUTES } from "@/constants/routes";
import { removeToken } from "@/features/auth/authSlice";
import store from "@/store/store";
import axios from "axios";

// 토큰이 필요한 요청에 사용하는 인스턴스
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    console.log("[interceptor]token >> ", token);
    if (!token) {
      alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
      window.location.href = ROUTES.AUTH.LOGIN;
      return Promise.reject(
        new Error("토큰이 없습니다. 요청이 중단되었습니다.")
      );
    }

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      store.dispatch(removeToken());
      alert("토큰이 유효하지 않습니다. 다시 로그인해주세요.");

      window.location.href = ROUTES.AUTH.LOGIN; // 로그인 페이지로 리다이렉트
    }
    return Promise.reject(error);
  }
);

// 토큰이 필요 없는 요청에 사용하는 인스턴스
export const publicAxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
