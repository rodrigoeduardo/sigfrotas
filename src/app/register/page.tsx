"use client";
import { useRegisterUser } from "@/http/users/queries/use-register-user";
import { UserRegister } from "@/http/users/requests/register-user";
import {
  registerSchema,
  RegisterSchema,
} from "@/resolvers/auth/register.schema";
import { Position } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Register() {
  const router = useRouter();

  const { mutate, isPending } = useRegisterUser();

  const form = useForm<RegisterSchema>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      cpf: "",
      email: "",
      position: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = (values: RegisterSchema) => {
    const user: UserRegister = {
      username: values.username,
      senha: values.password,
      cargo: values.position as Position,
      pessoa: {
        cpf: values.cpf,
        email: values.email,
        nome: values.name,
      },
    };

    mutate(user, {
      onSuccess: () => {
        toast.success("Usuário cadastrado com sucesso!", {
          description: "Faça login com suas credenciais.",
        });
        router.push("/login");
      },
      onError: () => {
        toast.error("Erro ao tentar realizar o cadastro", {
          description: "Por favor, tente novamente em instantes.",
        });
      },
    });
  };

  return (
    <div className="flex max-lg:flex-col-reverse gap-8 items-center justify-center lg:h-screen px-4 my-4">
      <div className="flex flex-col max-w-[760px] w-full px-7 py-6 border border-gray-600 rounded-[10px]">
        <h1 className="font-medium text-3xl">Cadastre-se</h1>

        <form
          className="mt-12 flex flex-col"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3">
            <div>
              <label className="text-black">Nome</label>
              <input
                type="text"
                placeholder="Digite aqui"
                className="placeholder:text-gray-200 text-sm font-light w-full border border-black-400 rounded-md px-5 py-3 mt-2.5"
                {...form.register("name")}
              />
              <p className="text-red-500 text-xs mt-2">
                {form.formState.errors.name?.message}
              </p>
            </div>

            <div>
              <label className="text-black">CPF</label>
              <input
                type="text"
                placeholder="Digite aqui"
                className="placeholder:text-gray-200 text-sm font-light w-full border border-black-400 rounded-md px-5 py-3 mt-2.5"
                {...form.register("cpf")}
              />
              <p className="text-red-500 text-xs mt-2">
                {form.formState.errors.cpf?.message}
              </p>
            </div>

            <div>
              <label className="text-black">E-mail</label>
              <input
                type="email"
                placeholder="Digite aqui"
                className="placeholder:text-gray-200 text-sm font-light w-full border border-black-400 rounded-md px-5 py-3 mt-2.5"
                {...form.register("email")}
              />
              <p className="text-red-500 text-xs mt-2">
                {form.formState.errors.email?.message}
              </p>
            </div>

            <div>
              <label className="text-black">Cargo</label>
              <select
                className="placeholder:text-gray-200 text-sm font-light w-full border border-black-400 rounded-md px-5 py-3 mt-2.5"
                defaultValue={undefined}
                {...form.register("position")}
              >
                <option value={Position.MANAGER}>Gerente</option>
                <option value={Position.DRIVER}>Motorista</option>
                {<option value={Position.CLIENT}>Cliente</option>}
              </select>
              <p className="text-red-500 text-xs mt-2">
                {form.formState.errors.position?.message}
              </p>
            </div>
          </div>

          <label className="text-black mt-3">Nome de usuário</label>
          <input
            type="text"
            placeholder="Digite aqui"
            className="placeholder:text-gray-200 text-sm font-light w-full border border-black-400 rounded-md px-5 py-3 mt-2.5"
            {...form.register("username")}
          />
          <p className="text-red-500 text-xs mt-2">
            {form.formState.errors.username?.message}
          </p>

          <label className="text-black mt-3">Senha</label>
          <input
            type="password"
            placeholder="Digite aqui"
            className="placeholder:text-gray-200 text-sm font-light w-full border border-black-400 rounded-md px-5 py-3 mt-2.5"
            {...form.register("password")}
          />
          <p className="text-red-500 text-xs mt-2">
            {form.formState.errors.password?.message}
          </p>

          <label className="text-black mt-3">Confirmar senha</label>
          <input
            type="password"
            placeholder="Digite aqui"
            className="placeholder:text-gray-200 text-sm font-light w-full border border-black-400 rounded-md px-5 py-3 mt-2.5"
            {...form.register("confirmPassword")}
          />
          <p className="text-red-500 text-xs mt-2">
            {form.formState.errors.confirmPassword?.message}
          </p>

          <button
            type="submit"
            className="bg-black-100 py-4 rounded-md w-full text-white-100 mt-10 shadow-2xl"
            disabled={isPending}
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
