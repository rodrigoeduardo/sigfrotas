import { api } from "@/services/api";

export async function refreshToken(refreshToken: string | null) {
  return await api.post("/auth/refresh", { refreshToken });
}
