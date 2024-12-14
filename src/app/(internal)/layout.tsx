import { Header } from "@/components/structure/Header";
import { Sidebar } from "@/components/structure/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
