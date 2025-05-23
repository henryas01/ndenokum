import { PropsWithChildren } from "react";
import Image from "next/image";

export default function Navbar({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className="bg-gradient-to-r from-orange-100 to-orange-400 min-h-screen rounded-b-2xl">
      {/* Navbar */}
      <nav className="relative flex items-center justify-between px-6 py-4 z-10">
        <div className="flex items-center gap-2 font-bold text-white text-lg">
          <Image
            src="/logo.png"
            alt="logo"
            className="w-8 h-8"
            width={100}
            height={100}
          />
          Nde Nok
        </div>
        <ul className=" md:flex gap-6 font-semibold text-white">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Our outlets</li>
          <li className="hover:underline cursor-pointer">Order</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
        <ul className="md:flex text-white">
          <li className="hover:underline cursor-pointer ">search</li>
          <li className="hover:underline cursor-pointer">☰</li>
        </ul>
      </nav>

      {children}
    </div>
  );
}
