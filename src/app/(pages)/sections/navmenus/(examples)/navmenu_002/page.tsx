"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import { useState, FC } from "react";
import {
  MenuVariants,
  linkVariants,
  buttonVariants,
  closeButtonVariants,
  closeLabelVariants,
  nestedMenuVariants,
  nestedLinkVariants,
} from "./variants";

interface MenuProps {
  isMenuActive: boolean;
  closeMenu: () => void;
}
type link = {
  link: string;
  nestedLinks: Array<string>;
};

interface MaskProps {
  isMenuActive: boolean;
  closeMenu: () => void;
}

// Data

const Links: Array<link> = [
  {
    link: "Institutional Banking",
    nestedLinks: [
      "Financial Institutions",
      "Treasury Management",
      "Tithe Services",
    ],
  },
  {
    link: "Consitutional Banking",
    nestedLinks: [
      "Commercial Lending",
      "Commercial Real Estate Lending",
      "Financial Institutions",
    ],
  },
  {
    link: "Mortgage Banking",
    nestedLinks: [
      "Wholesale and Correspondent Lending",
      "Warehouse Lending",
      "Become a Client",
    ],
  },
  { link: "About", nestedLinks: [] },
  { link: "Contact", nestedLinks: [] },
];

// Mini Components;
const Menu: FC<MenuProps> = ({ isMenuActive, closeMenu }) => {
  const [hoveredLinkIndex, sethoveredLinkIndex] = useState(100);

  return (
    <AnimatePresence mode="wait">
      {isMenuActive ? (
        <motion.section
          variants={MenuVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="fixed top-0 right-0 h-screen md:h-3/4 w-screen md:w-[85%] max-w-[98rem] z-20 bg-white grid place-items-center p-10 md:p-20"
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
                  className="absolute right-[200%] top-2/4 text-[8px] text-zinc-500 uppercase z-20 tracking-[0.3rem] hidden md:block"
                >
                  close
                </motion.div>
                <motion.div
                  variants={closeButtonVariants}
                  initial="initial"
                  animate="active"
                  exit="inactive"
                  onClick={closeMenu}
                  className="size-7 relative cursor-pointer"
                >
                  <div className="h-[1px] bg-zinc-600 w-[39px] absolute left-0 top-0 origin-left -translate-y-2/4 rotate-45"></div>
                  <div className="h-[1px] bg-zinc-600 w-[39px] absolute left-0 bottom-0 -translate-y-2/4 origin-left -rotate-45"></div>
                </motion.div>
              </div>
            </nav>
            <div className=" h-3/4 md:h-[60%] flex flex-col md:flex-row-reverse justify-between md:items-end lg:justify-between  md:gap-16 w-full">
              <div
                className="md:max-w-4xl lg:flex items-center w-full lg:h-full lg:gap-20 xl:gap-32"
                onMouseLeave={() => sethoveredLinkIndex(100)}
              >
                <motion.div className="pb-6 md:p-0 md:pb-0 flex flex-col  text-xl md:text-lg md:w-full">
                  {Links.map((link, index) => {
                    const isHovered = index === hoveredLinkIndex;
                    return (
                      <motion.div
                        custom={index}
                        variants={linkVariants(index)}
                        initial="initial"
                        animate="active"
                        exit="inactive"
                        key={index}
                        className="origin-left cursor-pointer max-w-md relative pb-5 md:pb-6 transition-colors duration-500 group/link xl:text-xl trascking-tight"
                      >
                        <div
                          onMouseEnter={() => sethoveredLinkIndex(index)}
                          className="flex items-center lg:gap-20 xl:gap-32 group/span z-50 relative"
                        >
                          <div className="hidden xl:block overflow-hidden">
                            <MoveRight
                              strokeWidth={0.7}
                              className="-translate-x-full opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-[1] transition-all duration-700"
                            />
                          </div>
                          <p className="text-zinc-500 group-hover/link:text-black transition-all duration-500 max-w-fit">
                            {link.link}
                          </p>
                        </div>
                        <AnimatePresence mode="wait">
                          {isHovered ? (
                            <motion.div
                              variants={nestedMenuVariants}
                              initial="initial"
                              animate="active"
                              exit="inactive"
                              onMouseLeave={() => {
                                if (isHovered) {
                                  sethoveredLinkIndex(100);
                                }
                              }}
                              className={`absolute inset-0 left-full min-w-fit hidden xl:block ${
                                isHovered ? "!z-[100]" : "!-z-10"
                              } min-h-fit`}
                            >
                              <div className="flex flex-col gap-4 xl:gap-6 w-64">
                                {link.nestedLinks.map((l, index) => (
                                  <motion.p
                                    key={index}
                                    custom={index}
                                    variants={nestedLinkVariants(index)}
                                    initial="initial"
                                    animate="active"
                                    exit="inactive"
                                    className="text-xs xl:text-[13px] text-zinc-500 hover:text-black transition-colors duration-500"
                                  >
                                    {l}
                                  </motion.p>
                                ))}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
              <div className="w-full md:max-w-fit md:h-full flex items-start md:items-end xl:pb-8">
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

const Mask: FC<MaskProps> = ({ isMenuActive, closeMenu }) => {
  return (
    <AnimatePresence mode="wait">
      {isMenuActive ? (
        <motion.section
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            opacity: {
              duration: 0.8,
              delay: 0.4,
            },
          }}
          onClick={closeMenu}
          className="h-full w-full fixed inset-0 bg-[#00000088] z-10 backdrop-blur-sm"
        ></motion.section>
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
      <nav className="p-10 flex items-center justify-between xl:p-20">
        <Link href="/sections/navmenus/">
          <ChevronLeft className="stroke-white" />
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
          className="flex flex-col gap-[14px] size-10 items-end justify-center relative cursor-pointer"
          onClick={openMenu}
        >
          <div className="h-[1px] w-2/4 bg-white"></div>
          <div className="h-[1px] w-full bg-white"></div>
        </motion.div>
      </nav>
      <Menu isMenuActive={isMenuActive} closeMenu={closeMenu} />
      <Mask isMenuActive={isMenuActive} closeMenu={closeMenu} />
      <a
        target="_blank"
        href="https://github.com/Jeff-Maina/craft/tree/main/src/app/(pages)/sections/navmenus/(examples)/navmenu_002"
        className="fixed right-4 bottom-4 text-white z-[999] underline"
      >
        source code
      </a>
    </section>
  );
};

export default NavMenu002;

// inspiration https://www.nexbank.com/
