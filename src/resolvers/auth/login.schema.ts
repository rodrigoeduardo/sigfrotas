import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Adicione um e-mail válido.",
  }),
  password: z.string().min(1, { message: "Adicione uma senha válida." }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
