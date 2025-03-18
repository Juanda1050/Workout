import { ApiResponse, ApiError } from "@/store/api";
import useAuthStore from "@/store/authStore";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router";

const api = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<unknown>>) => response,
  (error: AxiosError<ApiError>) => {
    const navigate = useNavigate();

    if (error.response?.status === 401) {
      const { clearAuth } = useAuthStore.getState();
      clearAuth();

      navigate("/login", { replace: true });
    }

    console.error(
      `Error en la API: ${error.response?.data?.message || error.message}`
    );

    return Promise.reject(error);
  }
);

export default api;
