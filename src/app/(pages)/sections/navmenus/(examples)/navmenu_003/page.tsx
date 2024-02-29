"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FC, useState } from "react";
import { ButtonProps, MenuProps } from "./Interfaces";
import { MenuVariants, LinkVariants } from "./Variants";
import { ArrowRight, ChevronLeft } from "lucide-react";

const Links = [
  "Home",
  "Works",
  "Products",
  "Patterns",
  "Exhibitions",
  "About",
  "Contact",
];

const Button: FC<ButtonProps> = ({ toggleMenu, isMenuActive, openMenu }) => {
  return (
    <div className="relative z-10">
      <button
        onMouseEnter={openMenu}
        onClick={toggleMenu}
        className="rounded-full overflow-hidden relative"
      >
        <div className="py-2 text-white grid place-items-center text-sm px-4 lg:px-10 tracking-wider bg-black">
          <div className="overflow-hidden">
            <p
              style={{
                transform: !isMenuActive
                  ? "translate(0,0)"
                  : "translate(0,-100%)",
              }}
              className="transition-all duration-500"
            >
              MENU
            </p>
          </div>
        </div>
        <div
          style={{
            transform: isMenuActive ? "translate(0,0)" : "translate(0,100%)",
            borderRadius: isMenuActive ? 0 : "50%",
          }}
          className={`absolute inset-0 z-10  py-2 bg-purple-500 text-white text-sm px-4 lg:px-10 tracking-wider transition-all duration-500`}
        >
          CLOSE
        </div>
      </button>
    </div>
  );
};

const NavMenu: FC<MenuProps> = ({ isMenuActive, closeMenu }) => {
  return (
    <AnimatePresence mode="wait">
      {isMenuActive && (
        <motion.section
          variants={MenuVariants}
          initial="initial"
          animate="active"
          onMouseLeave={closeMenu}
          exit="inactive"
          className="fixed w-[80%] lg:max-w-lg bg-black top-3 lg:top-6 right-3 lg:right-6 rounded-[0.5rem] p-10 lg:p-16 py-16 lg:py-24"
        >
          <div className="flex flex-col gap-3 lg:gap-5  text-white items-start">
            {Links.map((link, index) => {
              return (
                <div
                  key={index}
                  className="overflow-hidden flex items-center gap-2 group/link"
                >
                  <motion.p
                    custom={index}
                    variants={LinkVariants}
                    initial="initial"
                    animate="active"
                    exit="inactive"
                    className="text-2xl lg:text-4xl font-semibold group-hover/link:text-purple-500 transition-colors duration-300 cursor-pointer"
                  >
                    {link}
                  </motion.p>
                  <ArrowRight
                    strokeWidth={4}
                    size={20}
                    className="opacity-0 -translate-x-2 translate-y-2 group-hover/link:translate-x-0 group-hover/link:opacity-100 group-hover/link:translate-y-0 stroke-white hidden lg:block -rotate-45 transition-all duration-500"
                  />
                </div>
              );
            })}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

const Page = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(!isMenuActive);
  const openMenu = () => setMenuActive(true);
  const closeMenu = () => setMenuActive(false);

  return (
    <section className="w-full h-screen font-satoshi-medium">
      <nav className="p-6 lg:p-10 flex items-center justify-between">
        <Link href="/sections/navmenus" className="underline">
          <ChevronLeft />
        </Link>
        <Button
          toggleMenu={toggleMenu}
          openMenu={openMenu}
          isMenuActive={isMenuActive}
        />
        <NavMenu closeMenu={closeMenu} isMenuActive={isMenuActive} />
      </nav>
    </section>
  );
};

export default Page;

//  Thursday, Feb 29, 2024
