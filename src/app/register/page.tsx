"use client";
import {
  registerSchema,
  RegisterSchema,
} from "@/resolvers/auth/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Register() {
  const form = useForm<RegisterSchema>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      cnpj: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = (data: RegisterSchema) => {
    console.log(data);
    return data;
  };

  return (
    <div className="flex max-md:flex-col-reverse gap-8 items-center justify-center h-screen px-4">
      <div className="flex flex-col max-w-[442px] w-full px-7 py-6 border border-gray-600 rounded-[10px]">
        <h1 className="font-medium text-3xl">Cadastre-se</h1>

        <form
          className="mt-12 flex flex-col"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <label className="text-black">CNPJ</label>
          <input
            type="text"
            placeholder="Digite aqui"
            className="placeholder:text-gray-200 text-sm font-light w-full border border-black-400 rounded-md px-7 py-5 mt-2.5"
            {...form.register("cnpj")}
          />
          <p className="text-red-500 text-xs mt-2">
            {form.formState.errors.cnpj?.message}
          </p>

          <label className="text-black mt-3">E-mail</label>
          <input
            type="email"
            placeholder="Digite aqui"
            className="placeholder:text-gray-200 text-sm font-light w-full border border-black-400 rounded-md px-7 py-5 mt-2.5"
            {...form.register("email")}
          />
          <p className="text-red-500 text-xs mt-2">
            {form.formState.errors.email?.message}
          </p>

          <label className="text-black mt-3">Nome de usuário</label>
          <input
            type="text"
            placeholder="Digite aqui"
            className="placeholder:text-gray-200 text-sm font-light w-full border border-black-400 rounded-md px-7 py-5 mt-2.5"
            {...form.register("username")}
          />
          <p className="text-red-500 text-xs mt-2">
            {form.formState.errors.username?.message}
          </p>

          <label className="text-black mt-3">Senha</label>
          <input
            type="password"
            placeholder="Digite aqui"
            className="placeholder:text-gray-200 text-sm font-light w-full border border-black-400 rounded-md px-7 py-5 mt-2.5"
            {...form.register("password")}
          />
          <p className="text-red-500 text-xs mt-2">
            {form.formState.errors.password?.message}
          </p>

          <label className="text-black mt-3">Confirmar senha</label>
          <input
            type="password"
            placeholder="Digite aqui"
            className="placeholder:text-gray-200 text-sm font-light w-full border border-black-400 rounded-md px-7 py-5 mt-2.5"
            {...form.register("confirmPassword")}
          />
          <p className="text-red-500 text-xs mt-2">
            {form.formState.errors.confirmPassword?.message}
          </p>

          <button
            type="submit"
            className="bg-black-100 py-4 rounded-md w-full text-white-100 mt-10 shadow-2xl"
          >
            Cadastrar
          </button>
        </form>

        <p className="mt-6 font-light text-gray-600 text-center">
          Já possui uma conta?{" "}
          <Link href={"/"} className="font-semibold text-black-100">
            Login
          </Link>
        </p>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src="/assets/images/truck-2.png"
          alt="Sigfrotas"
          width={660}
          height={485}
        />
      </div>
    </div>
  );
}
