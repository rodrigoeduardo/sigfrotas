"use client";
import { Header } from "@/components/structure/Header";
import { Sidebar } from "@/components/structure/Sidebar";
import { useStore } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const { isAuthenticated } = useStore.getState();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <main className="mx-10 my-16">{children}</main>
      </div>
    </div>
  );
}
