"use client";
import { Header } from "@/components/structure/Header";
import { useStore } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import BottomNavigation from "@/components/bottomnav";

import "../../utils/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const { isAuthenticated } = useStore.getState();

  useEffect(() => {
    if (!isAuthenticated) {
      //router.push("/login");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full flex-grow">
        <Header />
        <main className="mx-10 my-16">{children}</main>
      </div>
      <BottomNavigation />
    </div>
  );
}
