"use client";
// 3rd party imports
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// component imports
import NavMenu from "./NavMenu";
import { DarkModeSvg } from "./Svgs";
import Tooltip from "./Tooltip";

const MenuIcon = () => {
  return (
    <div className="flex flex-col gap-[5px]">
      <div className="w-6 h-[2px] rounded-full bg-black"></div>
      <div className="w-6 h-[2px] rounded-full bg-black"></div>
    </div>
  );
};

const Navbar = () => {
  // Openin and closing menu logic.
  const [isMenuActive, setMenuActive] = useState(false);
  const OpenMenu = () => setMenuActive(true);
  const CloseMenu = () => setMenuActive(false);

  const path = usePathname();
  const isNavMenusPage = path.includes("navmenus/nav");
  console.log(path);
  return isNavMenusPage ? null : (
    <>
      <nav
        className={`w-full h-16 lg:h-20 border-b border-zinc-200/60 z-20  top-0 bg-white transition-all duration-0`}
      >
        <div className="flex items-center justify-between w-full h-full m-auto max-w-7xl lg:px-4">
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="font-campton-bold lg:text-2xl rounded-lg text-black pl-4 lg:pl-0 leading-none"
            >
              CRAFT.
            </a>
          </div>
          <div className=" items-center flex flex-row-reverse md:flex-row h-full">
            <ul className="h-full md:flex items-center font-satoshi-medium hidden text-lg">
              <li className="h-full">
                <Link
                  href="/elements"
                  className="hover:bg-black hover:text-white border-zinc-200/60 h-full flex items-center lg:px-10 transition-all duration-150  px-6 border-l hover:border-black "
                >
                  Elements
                </Link>
              </li>
              <li className="h-full">
                <Link
                  href="/sections"
                  className="hover:bg-black hover:border-black hover:text-white h-full flex items-center lg:px-10 border-l transition-all duration-150  px-6 border-zinc-200/60 "
                >
                  Sections
                </Link>
              </li>
            </ul>
            <button
              onClick={OpenMenu}
              className="h-full aspect-square flex items-center justify-center md:hidden"
            >
              <MenuIcon />
            </button>
            <button className="h-full aspect-square grid place-items-center p-2 transition-all duration-150 border-l border-r hover:bg-black group relative group/tooltip">
              <DarkModeSvg className="h-[24px] w-[24px] fill-black group-hover:fill-white group-hover:stroke-white stroke-black transition-all duration-150" />
              <Tooltip label="Coming soon :)" />
            </button>
          </div>
        </div>
      </nav>
      <NavMenu isMenuActive={isMenuActive} CloseMenu={CloseMenu} />
    </>
  );
};

export default Navbar;
