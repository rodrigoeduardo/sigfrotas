import { useMutation } from "@tanstack/react-query";
import { Credentials, login } from "../requests/login";

export function useLogin() {
  return useMutation({
    mutationFn: (params: Credentials) => login(params),
  });
}
