import { UserLogged } from "@/types/user";
import { jwtDecode } from "jwt-decode";

export function jwtDecodeUtil(token: string) {
  const decoded: UserLogged = jwtDecode(token);

  return decoded;
}
