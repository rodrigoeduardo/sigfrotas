import { useMutation } from "@tanstack/react-query";
import { registerUser, UserRegister } from "../requests/register-user";

export function useRegisterUser() {
  return useMutation({
    mutationFn: (user: UserRegister) => registerUser(user),
  });
}
