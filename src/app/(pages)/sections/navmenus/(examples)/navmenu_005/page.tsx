"use client";

import { ChevronLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";
import { ButtonProps } from "./Interfaces";
import NavMenu from "./Navmenu";
import Mask from "./Mask";

const Button: FC<ButtonProps> = ({ isMenuActive, toggleMenu }) => {
  const label = isMenuActive ? "Close" : "Menu";
  const svg = isMenuActive ? (
    <X className="size-4 lg:size-5 stroke-white group-hover/button:stroke-red-500 transition-all duration-300" />
  ) : (
    <Menu
      className="size-4 lg:size-5 stroke-white group-hover/button:stroke-neutral-400 transition-all duration-300"
      size={16}
    />
  );
  return (
    <button
      onClick={toggleMenu}
      className="text-white flex items-center gap-3  p-3  px-6 lg:px-8 group/button"
    >
      <span
        className={`text-sm lg:text-lg ${
          isMenuActive
            ? "group-hover/button:text-red-500"
            : "group-hover/button:text-neutral-400"
        } transition-all duration-300`}
      >
        {label}
      </span>
      <div>{svg}</div>
    </button>
  );
};

const page: FC = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(!isMenuActive);
  const closeMenu = () => setMenuActive(false);
  
  return (
    <section className="w-full h-screen bg-[#ffffd4] font-graphik-regular">
      <nav className="fixed top-6 left-6 max-w-sm lg:max-w-2xl w-[90%] rounded lg:rounded-[0.5rem] bg-black flex items-center justify-between z-20">
        <div className=" p-3 lg:px-6 grid place-items-center ">
          <Link href="/sections/navmenus">
            <ChevronLeft size={18} className="stroke-white" />
          </Link>
        </div>
        <Button toggleMenu={toggleMenu} isMenuActive={isMenuActive} />
        <NavMenu isMenuActive={isMenuActive} closeMenu={closeMenu} />
      </nav>
      <Mask isMenuActive={isMenuActive} closeMenu={closeMenu} />
      <a
        target="_blank"
        href="https://github.com/Jeff-Maina/craft/tree/main/src/app/(pages)/sections/navmenus/(examples)/navmenu_005"
        className="fixed right-4 bottom-4 text-black z-[999] underline"
      >
        source code
      </a>
    </section>
  );
};

export default page;
