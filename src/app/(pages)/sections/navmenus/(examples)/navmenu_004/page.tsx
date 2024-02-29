"use client";

import Link from "next/link";

import { FC, useState } from "react";
import { HamburgerProps, MenuProps, MaskProps } from "./Interfaces";
import { ChevronLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = ["Home", "Work", "Services", "About", "News", "Contact"];

const MenuVariants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.4,
        delay: 0.3,
      },
    },
  },
  inactive: {
    opacity: 0,
    transition: {
      opacity: {
        duration: 0.2,
      },
    },
  },
};

const MaskVariants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  inactive: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const Menu: FC<MenuProps> = ({ isMenuActive }) => {
  return (
    <AnimatePresence mode="wait">
      {isMenuActive ? (
        <motion.div
          variants={MenuVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="w-full h-full white flex items-center  justify-center"
        >
          <div className="w-full h-[80%] px-8 lg:px-12 flex flex-col gap-10">
            <p className="uppercase text-sm text-zinc-500">Menu</p>
            <div className="flex flex-col gap-2 lg:gap-5 text-[#18181a] group/navmenu">
              {links.map((link, index) => (
                <div>
                  <p className="text-2xl lg:text-4xl cursor-pointer group-hover/navmenu:text-zinc-400 hover:!text-black transition-all duration-500">
                    {link}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

const Hamburger: FC<HamburgerProps> = ({
  isMenuActive,
  closeMenu,
  toggleMenu,
}) => {
  return (
    <div
      className={`${
        !isMenuActive
          ? "h-12 w-12 lg:h-16 lg:w-16"
          : "h-[23rem] lg:h-[31rem] w-64 lg:w-[23rem]"
      } bg-white rounded-3xl lg:rounded-[2rem] absolute right-6 top-6 lg:top-16 lg:right-16  transition-all duration-500 overflow-hidden z-20`}
    >
      <button
        onClick={toggleMenu}
        className={`size-12 lg:size-16 bg-white rounded-full flex flex-col items-center justify-center gap-1 absolute ${
          isMenuActive ? "top-4 right-4" : "top-0 right-0"
        } transition-all duration-500`}
      >
        <div
          style={{
            transform: isMenuActive
              ? "rotate(45deg) translate(10%,100%)"
              : "rotate(0deg) translate(0%,0%)",
          }}
          className="h-[2px] w-[40%] rounded-full bg-[#18181a] origin-center transition-all duration-500"
        ></div>
        <div
          style={{
            transform: isMenuActive
              ? "rotate(-45deg) translate(10%,-100%)"
              : "rotate(0deg) translate(0%,0%)",
          }}
          className="h-[2px] w-[40%] rounded-full bg-[#18181a] origin-center transition-all duration-500"
        ></div>
      </button>
      <Menu isMenuActive={isMenuActive} />
    </div>
  );
};

const Mask: FC<MaskProps> = ({ isMenuActive, closeMenu }) => {
  return (
    <AnimatePresence mode="wait">
      {isMenuActive && (
        <motion.div
          onClick={closeMenu}
          variants={MaskVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="fixed inset-0 bg-[#00000044] w-screen h-screen z-10 backdrop-blur"
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

const Page = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const closeMenu: () => void = () => setMenuActive(false);
  const toggleMenu: () => void = () => setMenuActive(!isMenuActive);

  return (
    <section className="h-screen w-full bg-[#18181a] font-satoshi-medium">
      <nav className="flex items-center justify-between relative">
        <div className="fixed top-6 left-6 lg:top-16 lg:left-16 ">
          <Link href="/sections/navmenus">
            <ChevronLeft className="stroke-white" />
          </Link>
        </div>
        <Hamburger
          isMenuActive={isMenuActive}
          closeMenu={closeMenu}
          toggleMenu={toggleMenu}
        />
      </nav>
      <Mask isMenuActive={isMenuActive} closeMenu={closeMenu} />
   
    </section>
  );
};

export default Page;
