import { JwtPayload } from "jwt-decode";

export enum Position {
  MANAGER = "GERENTE",
  DRIVER = "MOTORISTA",
  CLIENT = "CLIENTE",
}

export type Person = {
  id: number;
  nome: string;
  cpf: string;
  email: string;
};

export type User = {
  id: number;
  username: string;
  senha: string;
  pessoa: Person;
  cargo: Position;
};

export type UserLogged = JwtPayload & {
  id: number;
  email: string;
  username: string;
};
