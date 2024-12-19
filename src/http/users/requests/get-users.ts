import { api } from "@/services/api";
import { User } from "@/types/user";

export function getUsers() {
  return api.get<User[]>("/users");
}
