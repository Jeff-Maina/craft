"use client";

import { AnimatePresence, Variants, motion } from "framer-motion";
import Link from "next/link";
import { useState, FC } from "react";

interface MenuProps {
  isMenuActive: boolean;
  closeMenu: () => void;
}
type link = string;

// Variants
const MenuVariants: Variants = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  active: {
    opacity: 1,
    y: "0%",
    transition: {
      opacity: {
        duration: 1.3,
      },
      y: {
        duration: 1.1,
        ease: [0.9, 0.04, 0.08, 0.99],
      },
    },
  },
  inactive: {
    opacity: 0,
    y: "-100%",
    transition: {
      opacity: {
        duration: 1,
        delay: 0.5,
      },
      y: {
        duration: 1.1,
        delay: 0.5,
        ease: [0.9, 0.04, 0.08, 0.99],
      },
    },
  },
};

const linkVariants: (index: number) => Variants = (index: number) => ({
  initial: {
    opacity: 0,
    y: "250%",
    x: "-5%",
    rotate: "30deg",
  },
  active: {
    opacity: 1,
    y: "0%",
    x: "0%",
    rotate: "0deg",
    transition: {
      opacity: {
        duration: 0.5,
        delay: 0.8 + index * 0.05,
      },
      y: {
        duration: 0.6,
        delay: 0.8 + index * 0.05,
        ease: "easeOut",
      },
      x: {
        duration: 0.6,
        delay: 0.8 + index * 0.05,
        ease: "easeOut",
      },
      rotate: {
        duration: 0.5,
        delay: 0.8 + index * 0.05,
        ease: "easeOut",
      },
    },
  },
  inactive: {
    opacity: 0,
    y: "250%",
    x: "-5%",
    rotate: "30deg",
    transition: {
      opacity: {
        duration: 0.3,
        delay: 0.4 - index * 0.1,
      },
      y: {
        duration: 0.5,
        delay: 0.4 - index * 0.1,
        ease: "easeIn",
      },
      x: {
        duration: 0.5,
        delay: 0.4 - index * 0.1,
        ease: "easeIn",
      },
      rotate: {
        duration: 0.4,
        delay: 0.4 - index * 0.1,
        ease: "easeIn",
      },
    },
  },
});

const buttonVariants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 1.4,
    },
  },
  inactive: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};
// Data

const Links: Array<link> = [
  "Home",
  "Consitutional banking",
  "Mortgage Banking",
  "About",
  "Contact",
];

const Menu: FC<MenuProps> = ({ isMenuActive, closeMenu }) => {
  return (
    <AnimatePresence mode="wait">
      {isMenuActive ? (
        <motion.section
          variants={MenuVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="fixed inset-0 h-screen w-screen z-10 bg-white flex flex-col justify-between p-6"
        >
          <nav className="flex justify-end p-10">
            <div onClick={closeMenu} className="size-7 relative">
              <div className="h-[1px] bg-zinc-600 w-[39px] absolute left-0 top-0 origin-left -translate-y-2/4 rotate-45"></div>
              <div className="h-[1px] bg-zinc-600 w-[39px] absolute left-0 bottom-0 -translate-y-2/4 origin-left -rotate-45"></div>
            </div>
          </nav>
          <motion.div className="p-6 flex flex-col gap-10 text-2xl">
            {Links.map((link, index) => (
              <motion.div
                custom={index}
                variants={linkVariants(index)}
                initial="initial"
                animate="active"
                exit="inactive"
                key={index}
                className="origin-left"
              >
                {link}
              </motion.div>
            ))}
          </motion.div>
          <div className="w-full">
            <motion.button
              variants={buttonVariants}
              initial="initial"
              animate="active"
              exit="inactive"
              className="h-16 text-white bg-black w-full"
            >
              Login{" "}
            </motion.button>
          </div>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
};

const NavMenu002 = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const closeMenu = () => setIsMenuActive(false);
  const openMenu = () => setIsMenuActive(true);

  return (
    <section className="w-full h-screen font-graphik-regular bg-black">
      <nav className="p-10 flex items-center justify-between">
        <Link href="/" className="underline text-white">
          back
        </Link>
        <div
          className="flex flex-col gap-4 size-10 items-end justify-center relative"
          onClick={openMenu}
        >
          <div className="h-[1px] w-2/4 bg-white"></div>
          <div className="h-[1px] w-full bg-white"></div>
        </div>
      </nav>
      <Menu isMenuActive={isMenuActive} closeMenu={closeMenu} />
    </section>
  );
};

export default NavMenu002;

// inspiration https://www.nexbank.com/
