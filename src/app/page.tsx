import { redirect } from "next/navigation";

export default async function Home() {
  const user = {};

  if (!user) {
    redirect("/login");
  }

  redirect("/routes");
}
