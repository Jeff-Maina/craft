"use client";

import { AnimatePresence, Variants, motion } from "framer-motion";
import { ArrowBigRight, MoveRight } from "lucide-react";
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
    y: "300%",
    x: "-10%",
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
    y: "300%",
    x: "-10%",
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

const closeButtonVariants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 1,
    },
  },
  inactive: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const closeLabelVariants = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  active: {
    opacity: 1,
    x: "0%",
    transition: {
      x: {
        duration: 1,
        delay: 1,
      },
      opacity: {
        duration: 0.5,
        delay: 1,
      },
    },
  },
  inactive: {
    opacity: 0,
    x: "-100%",
    transition: {
      x: {
        duration: 1,
        delay: 0,
      },
      opacity: {
        duration: 0.5,
        delay: 0,
      },
    },
  },
};

// Data

const Links: Array<link> = [
  "Institutional Banking",
  "Consitutional Banking",
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
          className="fixed top-0 right-0 h-screen md:h-3/4 w-screen md:w-[85%] max-w-[98rem] z-10 bg-white grid place-items-center p-10 md:p-20"
        >
          <div className="h-full w-full flex flex-col md:gap-20 justify-between">
            <nav className="flex justify-end h-[15%] items-start">
              <div className="relative max-h-max">
                <motion.div
                  variants={closeLabelVariants}
                  initial="initial"
                  animate="active"
                  exit="inactive"
                  onClick={closeMenu}
                  className="absolute right-[200%] top-2/4 -translate-y-2/4 text-[8px] lg text-zinc-500 uppercase z-20 tracking-[0.3rem] hidden md:block"
                >
                  close
                </motion.div>
                <motion.div
                  variants={closeButtonVariants}
                  initial="initial"
                  animate="active"
                  exit="inactive"
                  onClick={closeMenu}
                  className="size-7 relative"
                >
                  <div className="h-[1px] bg-zinc-600 w-[39px] absolute left-0 top-0 origin-left -translate-y-2/4 rotate-45"></div>
                  <div className="h-[1px] bg-zinc-600 w-[39px] absolute left-0 bottom-0 -translate-y-2/4 origin-left -rotate-45"></div>
                </motion.div>
              </div>
            </nav>
            <div className=" h-3/4 md:h-[60%] border-black flex flex-col md:flex-row-reverse justify-between md:items-end lg:justify-between  md:gap-16 w-full">
              <div className="md:max-w-4xl lg:flex items-center w-full lg:h-full lg:gap-20 xl:gap-32">
                <motion.div className="pb-6 md:p-0 md:pb-0 flex flex-col gap-10 md:gap-6 text-xl md:text-lg md:w-full">
                  {Links.map((link, index) => (
                    <motion.div
                      custom={index}
                      variants={linkVariants(index)}
                      initial="initial"
                      animate="active"
                      exit="inactive"
                      key={index}
                      className="origin-left text-zinc-500 cursor-pointer group/link max-w-md flex items-center lg:gap-20 xl:gap-32 relative"
                    >
                      <div className="hidden xl:block overflow-hidden">
                        <MoveRight strokeWidth={1} className="-translate-x-full opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-[1] transition-all duration-700" />
                      </div>
                      {link}
                      <div className="absolute top-0 left-full size-32 bg-green-400 hidden xl:block">

                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <div className="w-full md:max-w-fit md:h-full flex items-start md:items-end">
                <motion.button
                  variants={buttonVariants}
                  initial="initial"
                  animate="active"
                  exit="inactive"
                  className="h-16 md:h-auto  text-white bg-black md:bg-white  md:underline w-full md:max-w-fit underline-offset-4 md:text-sm md:text-zinc-600 decoration-black"
                >
                  Online Banking Login
                </motion.button>
              </div>
            </div>
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
        <motion.div
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: isMenuActive ? 0 : 1,
          }}
          transition={{
            opacity: {
              duration: 0.4,
              delay: isMenuActive ? 0 : 1,
            },
          }}
          className="flex flex-col gap-[14px] size-10 items-end justify-center relative"
          onClick={openMenu}
        >
          <div className="h-[1px] w-2/4 bg-white"></div>
          <div className="h-[1px] w-full bg-white"></div>
        </motion.div>
      </nav>
      <Menu isMenuActive={isMenuActive} closeMenu={closeMenu} />
    </section>
  );
};

export default NavMenu002;

// inspiration https://www.nexbank.com/
