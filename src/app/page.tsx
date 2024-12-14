import { redirect } from "next/navigation";

export default async function Home() {
  const user = undefined;

  if (!user) {
    redirect("/login");
  }

  return <>Home</>;
}
