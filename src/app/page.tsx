"use client";
import { loginSchema, LoginSchema } from "@/resolvers/auth/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { TfiEmail, TfiLock } from "react-icons/tfi";

export default function Home() {
  const form = useForm<LoginSchema>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: LoginSchema) => {
    console.log(data);
    return data;
  };

  return (
    <div className="flex max-md:flex-col-reverse gap-8 items-center justify-center h-screen px-4">
      <div className="flex flex-col max-w-[442px] w-full">
        <h1 className="font-medium text-3xl">LOGIN</h1>

        <div className="flex flex-col gap-y-3 mt-5">
          <p>Se você não possui um login ativo</p>

          <Link href={"/"} className="text-[#0C21C1] font-semibold">
            Cadastre-se aqui!
          </Link>
        </div>

        <form
          className="mt-12 flex flex-col"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <label className="text-xs text-gray-700">E-mail</label>
          <div className="flex items-center gap-x-2.5 text-blue-500 border-b-2 focus-within:border-b-blue-500 border-b-gray-700 pb-2 mt-3">
            <TfiEmail size={16} />
            <input
              type="email"
              placeholder="Entre com seu endereço de e-mail"
              className="placeholder:text-blue-500 w-full outline-none"
              {...form.register("email")}
            />
          </div>
          <p className="text-red-500 text-xs mt-2">
            {form.formState.errors.email?.message}
          </p>

          <label className="mt-12 text-xs text-gray-700">Senha</label>
          <div className="flex items-center gap-x-2.5 text-blue-500 border-b-2 focus-within:border-b-blue-500 border-b-gray-700 pb-2 mt-3">
            <TfiLock size={16} />
            <input
              type="password"
              placeholder="Entre com sua senha"
              className="placeholder:text-blue-500 w-full outline-none"
              {...form.register("password")}
            />
          </div>
          <p className="text-red-500 text-xs mt-2">
            {form.formState.errors.password?.message}
          </p>

          <button
            type="submit"
            className="bg-green-900 py-3.5 rounded-[32px] w-full text-white mt-14 shadow-2xl"
          >
            Login
          </button>
        </form>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-publicSans font-bold text-6xl max-md:text-4xl">
          SIGFROTAS
        </h1>
        <Image
          src="/assets/images/truck.png"
          alt="Sigfrotas"
          width={720}
          height={493}
        />
      </div>
    </div>
  );
}
