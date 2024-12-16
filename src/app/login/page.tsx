"use client";
import { useLogin } from "@/http/auth/queries/useLogin";
import { loginSchema, LoginSchema } from "@/resolvers/auth/login.schema";
import { useStore } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TfiEmail, TfiLock } from "react-icons/tfi";
import { toast } from "sonner";

export default function Login() {
  const router = useRouter();
  const { mutate, isPending } = useLogin();
  const { login } = useStore.getState();

  const form = useForm<LoginSchema>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = (values: LoginSchema) => {
    mutate(values, {
      onSuccess: (res) => {
        const data = res.data;
        login(data.token, data.refreshToken);
        router.push("/routes");
      },
      onError: () => {
        toast.error("Erro ao tentar realizar o login", {
          description: "Usuário ou senha inválidos.",
        });
      },
    });
  };

  return (
    <div className="flex max-md:flex-col-reverse gap-8 items-center justify-center h-screen px-4">
      <div className="flex flex-col max-w-[442px] w-full">
        <h1 className="font-medium text-3xl">LOGIN</h1>

        <div className="flex flex-col gap-y-3 mt-5">
          <p>Se você não possui um login ativo</p>

          <Link href={"/register"} className="text-[#0C21C1] font-semibold">
            Cadastre-se aqui!
          </Link>
        </div>

        <form
          className="mt-12 flex flex-col"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <label className="text-xs text-gray-700">Nome de usuário</label>
          <div className="flex items-center gap-x-2.5 text-blue-500 border-b-2 focus-within:border-b-blue-500 border-b-gray-700 pb-2 mt-3">
            <TfiEmail size={16} />
            <input
              type="username"
              placeholder="Entre com seu nome de usuário"
              className="placeholder:text-blue-500 w-full outline-none"
              {...form.register("username")}
            />
          </div>
          <p className="text-red-500 text-xs mt-2">
            {form.formState.errors.username?.message}
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
            className="bg-green-900 py-3.5 rounded-[32px] w-full text-white-100 mt-14 shadow-2xl"
            disabled={isPending}
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
