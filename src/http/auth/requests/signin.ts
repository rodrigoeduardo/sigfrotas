import { api } from "@/services/api";

export type Credentials = {
  username: string;
  password: string;
};

export async function login({ username, password }: Credentials) {
  const response = await api.post("/auth", {
    username,
    password,
  });

  return response;
}
