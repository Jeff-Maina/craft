"use client";

import { useState } from "react";
import NavMenu from "./NavMenu";

const MenuIcon = () => {
  return (
    <div className="flex flex-col gap-[5px]">
      <div className="w-6 h-[2px] rounded-full bg-[#2a2a2a]"></div>
      <div className="w-6 h-[2px] rounded-full bg-[#2a2a2a]"></div>
      <div className="w-6 h-[2px] rounded-full bg-[#2a2a2a]"></div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  return (
    <>
      <nav className="w-full h-20 border-b px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a
            href="/"
            className="text-xl bg-[#2a2a2a] text-white font-satoshi-medium px-4 leading-none py-2 rounded-lg"
          >
            Craft.
          </a>
        </div>
        <button className="h-full aspect-square flex items-center justify-end">
          <MenuIcon />
        </button>
      </nav>
      <NavMenu isMenuActive={isMenuActive} setMenuActive={setMenuActive} />
    </>
  );
};

export default Navbar;
