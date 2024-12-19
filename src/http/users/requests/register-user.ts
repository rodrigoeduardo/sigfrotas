import { api } from "@/services/api";
import { Person, User } from "@/types/user";

export type UserRegister = Omit<User, "id" | "pessoa"> & {
  pessoa: Omit<Person, "id">;
};

export async function registerUser(user: UserRegister) {
  return api.post<User>("/auth/register", user);
}
