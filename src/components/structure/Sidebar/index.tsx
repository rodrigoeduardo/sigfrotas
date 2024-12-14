"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegCompass } from "react-icons/fa";
import { RiTruckLine } from "react-icons/ri";

const PAGES = [
  {
    route: "/routes",
    title: "Rotas",
    icon: <FaRegCompass size={24} className="text-white-100" />,
  },
  {
    route: "/fleet",
    title: "Frota",
    icon: <RiTruckLine size={24} className="text-white-100" />,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen max-w-[120px] w-full bg-green-900 flex flex-col items-center">
      <Link
        href={"/"}
        className="w-full py-12 flex items-center justify-center"
      >
        <Image
          src={"/assets/icons/logo.svg"}
          alt="Logo"
          width={25}
          height={26}
        />
      </Link>

      <nav className="flex flex-col w-full">
        {PAGES.map(({ route, title, icon }) => (
          <Link
            href={route}
            key={route}
            className={cn(
              "w-full flex flex-col items-center gap-y-2 py-3 brightness-50 hover:brightness-110 duration-200",
              {
                "brightness-100 bg-green-400/10": pathname === route,
              }
            )}
          >
            {icon}
            <span className="text-green-400 text-xs font-medium">{title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
