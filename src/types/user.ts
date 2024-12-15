import { JwtPayload } from "jwt-decode";

export type UserLogged = JwtPayload & {
  id: number;
  email: string;
  username: string;
};
