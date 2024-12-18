"use client";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdChevronRight } from "react-icons/md";

export function Header() {
  function handleSignOut() {
    // TODO
    return;
  }
  return (
    <header className="w-full h-full max-h-[94px] flex items-end justify-center shadow-xl">
      <div className="flex items-center gap-2 h-fit">
        <IoMdNotificationsOutline size={24} className="text-green-900" />

        <div className="flex items-center h-fit">
          <Image
            src={"https://github.com/rodrigoeduardo.png"}
            alt="User icon"
            width={24}
            height={24}
            className="w-6 h-6 rounded-full"
          />
          <MdChevronRight size={24} className="text-green-900 rotate-90" />
        </div>

        <button
          type="button"
          className="text-green-900 text-xs px-4 py-3 h-fit"
          onClick={handleSignOut}
        >
          Sair
        </button>
      </div>
    </header>
  );
}
