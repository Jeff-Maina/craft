"use client";

import { useState } from "react";
import NavMenu from "./NavMenu";
import Link from "next/link";
import { DarkModeSvg } from "./Svgs";

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
  const OpenMenu = () => setMenuActive(true);
  const CloseMenu = () => setMenuActive(false);

  return (
    <>
      <nav className="w-full h-20 border-b">
        <div className="flex items-center justify-between w-full h-full m-auto max-w-[90rem] ">
          <div className="flex items-center gap-2 pl-6">
            <a
              href="/"
              className="text-xl bg-[#2a2a2a] text-white font-satoshi-medium px-4 leading-none py-2 rounded-lg"
            >
              Craft.
            </a>
          </div>
          <div className=" lg:gap-10 items-center flex flex-row-reverse md:flex-row h-full">
            <div className="h-full md:flex items-center gap-5 font-satoshi-medium hidden text-lg">
              <Link href="/elements" className="hover:underline">Elements</Link>
              <Link href="/sections" className="hover:underline">Sections</Link>
            </div>{" "}
            <button
              onClick={OpenMenu}
              className="h-full aspect-square flex items-center justify-center md:hidden border-l"
            >
              <MenuIcon />
            </button>
            <button className="h-full aspect-square grid place-items-center p-2 transition-all duration-200 border-l">
              <DarkModeSvg className="h-[24px] w-[24px]" />
            </button>
          </div>
        </div>
      </nav>
      <NavMenu isMenuActive={isMenuActive} CloseMenu={CloseMenu} />
    </>
  );
};

export default Navbar;
