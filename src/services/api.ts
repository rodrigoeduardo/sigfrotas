import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
// import { toast } from "sonner";

import { useStore } from "@/store";
import { refreshToken } from "@/http/auth/requests/refresh-token";
import { toast } from "sonner";

export const api = axios.create({
  timeout: 60000,
  headers: {
    common: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  },
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + "",
});

const nonAuthRoutes = ["/auth/login"];

api.interceptors.request.use(async (instance: InternalAxiosRequestConfig) => {
  const accessToken = useStore.getState().accessToken;

  if (accessToken && instance.url && !instance.url.includes("/refresh")) {
    instance.headers.Authorization = `Bearer ${accessToken}`;
    instance.timeout = 10000;
  }

  return instance;
});

const handleTokenRefresh = async () => {
  try {
    const res = await refreshToken(useStore.getState().refreshToken);

    const data = res.data.data;

    useStore.setState({
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    });

    return data.accessToken;
  } catch (error) {
    useStore.setState({
      accessToken: null,
      userLogged: null,
      isAuthenticated: false,
    });
    toast.error("Sessão expirada, faça login novamente");
    throw error;
  }
};

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const requestedRoute = error.config?.url;
    const isNonAuthRoute =
      requestedRoute && nonAuthRoutes.includes(requestedRoute);

    if (error?.response?.status === 401 && !isNonAuthRoute && error?.config) {
      try {
        const newAccessToken = await handleTokenRefresh();

        error.config.headers.Authorization = `Bearer ${newAccessToken}`;

        return api.request(error?.config);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
