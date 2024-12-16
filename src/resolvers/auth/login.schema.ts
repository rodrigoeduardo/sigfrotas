import * as z from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, {
    message: "Adicione um nome de usuário válido.",
  }),
  password: z.string().min(1, { message: "Adicione uma senha válida." }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
