import { api } from "@/services/api";

export type Credentials = {
  username: string;
  password: string;
};

type LoginResponse = {
  token: string;
  refreshToken: string;
};

export async function login({ username, password }: Credentials) {
  const response = await api.post<LoginResponse>("/auth/login", {
    username,
    senha: password,
  });

  return response;
}
