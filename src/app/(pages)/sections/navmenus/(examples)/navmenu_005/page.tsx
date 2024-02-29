"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";

const Links = [
  "Introduction",
  "Current Market",
  "Products",
  "Team",
  "Careers",
  "White Paper",
  "FAQ",
  "Contact",
];

interface ButtonProps {
  isMenuActive: boolean;
  toggleMenu: () => void;
}
interface MaskProps {
  isMenuActive: boolean;
  closeMenu: () => void;
}

// Variants
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

const LinkVariants = {
  initial: {
    y: "-500%",
    opacity: 0,
  },
  active: (index: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      y: {
        duration: 0.3,
        delay: 1 - index * 0.1,
      },
      opacity: {
        duration: 0.5,
        delay: 0.8 - index * 0.1,
      },
    },
  }),
  inactive: (index: number) => ({
    y: "-500%",
    opacity: 0,
    transition: {
      y: {
        duration: 0.5,
        delay: index * 0.05,
        ease: "easeIn",
      },
    },
  }),
};

const Button: FC<ButtonProps> = ({ isMenuActive, toggleMenu }) => {
  const label = isMenuActive ? "Close" : "Menu";
  const svg = isMenuActive ? (
    <X className="stroke-white" size={16} />
  ) : (
    <Menu className="stroke-white" size={16} />
  );
  return (
    <button onClick={toggleMenu} className="text-white flex items-center gap-2">
      <span className="text-sm">{label}</span>
      <div>{svg}</div>
    </button>
  );
};

const NavMenu: FC<MaskProps> = ({ isMenuActive, closeMenu }) => {
  return (
    <AnimatePresence mode="wait">
      {isMenuActive ? (
        <motion.section
          variants={MaskVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="absolute top-full left-0 w-full h-[85vh]"
        >
          <div className="w-full h-full grid grid-cols-2 py-[6px] gap-[6px]">
            {Links.map((link, index) => {
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={LinkVariants}
                  initial="initial"
                  animate="active"
                  exit="inactive"
                  className="w-full aspect-square bg-black rounded-[0.3rem]"
                >
                  <p className="text-white">{0.8 - index * 0.1}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
};

const Mask: FC<MaskProps> = ({ isMenuActive, closeMenu }) => {
  return (
    <AnimatePresence mode="wait">
      {isMenuActive ? (
        <motion.section
          variants={MaskVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          onClick={closeMenu}
          className="fixed z-10 inset-0 h-screen w-screen bg-black/30"
        ></motion.section>
      ) : null}
    </AnimatePresence>
  );
};

const page: FC = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(!isMenuActive);
  const closeMenu = () => setMenuActive(false);
  return (
    <section className="w-full h-screen bg-[#ffffd4] font-graphik-regular">
      <nav className="fixed top-6 left-2/4 -translate-x-2/4 max-w-sm p-3 w-full rounded bg-black flex items-center justify-between z-20">
        <div className="h-full aspect-square grid place-items-center">
          <Link href="/sections/navmenus">
            <ChevronLeft size={18} className="stroke-white" />
          </Link>
        </div>
        <Button toggleMenu={toggleMenu} isMenuActive={isMenuActive} />
        <NavMenu isMenuActive={isMenuActive} closeMenu={closeMenu} />
      </nav>
      <Mask isMenuActive={isMenuActive} closeMenu={closeMenu} />
    </section>
  );
};

export default page;
