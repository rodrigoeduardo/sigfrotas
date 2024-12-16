import * as z from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, { message: "Adicione um nome válido" }),
    cpf: z.string().min(11, { message: "Adicione um CPF válido." }),
    email: z.string().email({
      message: "Adicione um e-mail válido.",
    }),
    position: z.string().min(1, { message: "Escolha um cargo." }),
    username: z
      .string()
      .min(3, { message: "Adicione um nome de usuário válido." }),
    password: z.string().min(1, { message: "Adicione uma senha válida." }),
    confirmPassword: z.string().min(1, { message: "Confirme sua senha." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam ser iguais.",
    path: ["confirmPassword"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
