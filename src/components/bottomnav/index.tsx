"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNavigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Mapa", href: "/map/1", icon: "🗺️" },
    { name: "Pedidos", href: "/orders", icon: "📦" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-lg">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center text-sm ${
              pathname === item.href
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
          >
            <span className="text-lg">{item.icon}</span>{" "}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
