"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FC, useState, useLayoutEffect } from "react";

interface button {
  toggleMenu: () => void;
  isMenuActive: boolean;
}

interface mask {
  isMenuActive: boolean;
}

const Button: FC<button> = ({ toggleMenu, isMenuActive }) => {
  const [hasAnimationPlayed, setAnimationPlayed] = useState(false);
  const [isButtonHovered, setButtonHovered] = useState(false);
  const [isCancelHovered, setCancelHovered] = useState(false);

  const hoverButton = () => setButtonHovered(true);
  const unhoverButton = () => setButtonHovered(false);
  const hoverCancel = () => setCancelHovered(true);
  const unhoverCancel = () => setCancelHovered(false);

  useLayoutEffect(() => {
    setAnimationPlayed(true);
  }, []);

  return (
    <motion.div
      initial={{
        transform: "translate(-50%,-250%) rotate(-10deg)",
      }}
      animate={{
        transform: "translate(0%,0%) rotate(0deg)",
      }}
      transition={{
        transform: {
          duration: 0.8,
        },
      }}
      onClick={toggleMenu}
      onMouseEnter={() => {
        hoverButton();
        hoverCancel();
      }}
      onMouseLeave={() => {
        unhoverButton();
        unhoverCancel();
      }}
      className="max-w-fit h-[50px] md:m-auto cursor-pointer origin-bottom relative z-20"
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 z-10 h-[50px] w-[50px] lg:h-[55px] lg:w-[55px]"
      >
        <path
          d="M0 0V29.9819L10.0181 40H20.0116V30.0062H30.0064V20.0122H40.0002V10.0186L29.982 0H0Z"
          fill="black"
        ></path>
        <path
          d="M29.2422 9.25379H19.2473V19.2474H9.25351V29.2418H0.739746V0.740433H29.2422V9.25379Z"
          fill="white"
        ></path>
      </svg>
      <div className="w-36 lg:w-[150px] h-full relative pl-3">
        <motion.div
          initial={{
            width: "0%",
          }}
          animate={{
            width: "100%",
          }}
          transition={{
            width: {
              delay: 0.8,
              duration: 0.3,
              ease: [0.09, 0.48, 0.91, 0.91],
            },
          }}
          className="bg-black h-[24px] lg:h-[26px]"
        ></motion.div>
        <motion.div
          initial={{
            width: "0%",
          }}
          animate={{
            width: "91%",
          }}
          transition={{
            width: {
              delay: 1,
              duration: 0.3,
              ease: [0.09, 0.48, 0.91, 0.91],
            },
          }}
          className="w-full bg-black h-[14px] lg:h-[16px]"
        ></motion.div>
        <motion.div
          initial={{
            width: "0%",
          }}
          animate={{
            width: "70%",
          }}
          transition={{
            width: {
              delay: 1.2,
              duration: 0.3,
              ease: [0.09, 0.48, 0.91, 0.91],
            },
          }}
          className="bg-black h-[12px] lg:h-[13px] translate-x-3"
        ></motion.div>

        <div className="absolute z-[11] text-sm lg:text-lg overflow-hidden w-[60%] top-2/4 tracking-tight left-2/4 font-graphik-semibold -translate-x-2/4 -translate-y-2/4  text-white uppercase h-5">
          <AnimatePresence mode="wait">
            {!isMenuActive ? (
              <div className="absolute w-full h-full">
                <div className="absolute flex items-center justify-center inset-0">
                  {Array.from("Menu").map((char, index) => {
                    return (
                      <motion.div
                        initial={{ y: "90%" }}
                        animate={{
                          y: isMenuActive || isButtonHovered ? "-60%" : "5%",
                        }}
                        exit={{
                          y: "-60%",
                        }}
                        transition={{
                          y: {
                            delay: hasAnimationPlayed
                              ? index * 0.03
                              : 1.2 + index * 0.04,
                            duration: 0.3,
                          },
                        }}
                        key={index}
                        className="leading-0"
                      >
                        {char}
                      </motion.div>
                    );
                  })}
                </div>
                <div className="absolute flex items-center justify-center inset-0">
                  {Array.from("Menu").map((char, index) => {
                    return (
                      <motion.div
                        initial={{ y: "100%" }}
                        animate={{
                          y: isMenuActive || isButtonHovered ? "5%" : "100%",
                        }}
                        transition={{
                          y: {
                            delay: hasAnimationPlayed
                              ? index * 0.03
                              : 1.2 + index * 0.04,
                            duration: 0.3,
                          },
                        }}
                        key={index}
                        className="leading-0"
                      >
                        {char}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="absolute w-full h-full">
                <div className="absolute flex items-center justify-center inset-0">
                  {Array.from("Close").map((char, index) => {
                    return (
                      <motion.div
                        initial={{ y: "90%" }}
                        animate={{
                          y: isMenuActive || isCancelHovered ? "-60%" : "5%",
                        }}
                        transition={{
                          y: {
                            delay: hasAnimationPlayed
                              ? index * 0.03
                              : 1.2 + index * 0.04,
                            duration: 0.3,
                          },
                        }}
                        key={index}
                        className="leading-0"
                      >
                        {char}
                      </motion.div>
                    );
                  })}
                </div>
                <div className="absolute flex items-center justify-center inset-0">
                  {Array.from("Close").map((char, index) => {
                    return (
                      <motion.div
                        initial={{ y: "100%" }}
                        animate={{
                          y: isMenuActive || isCancelHovered ? "5%" : "100%",
                        }}
                        transition={{
                          y: {
                            delay: hasAnimationPlayed
                              ? index * 0.03
                              : 1.2 + index * 0.04,
                            duration: 0.3,
                          },
                        }}
                        key={index}
                        className="leading-0"
                      >
                        {char}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const Mask: FC<mask> = ({ isMenuActive }) => {
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
          transition={{
            opacity: {
              duration: 0.3,
            },
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 h-screen w-full bg-[#ce04f769]"
        ></motion.section>
      ) : null}
    </AnimatePresence>
  );
};

const NavMenu_001 = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(!isMenuActive);
  return (
    <section className="h-screen p-6 font-satoshi-medium lg:pt-10">
      <Link
        href="/sections/navmenus"
        className="underline fixed top-10 right-4 lg:left-10 z-50 text-sm md:text-lg"
      >
        Back
      </Link>
      <nav className="w-full fixed top-0 left-0 p-6 lg:p-8">
        <Button toggleMenu={toggleMenu} isMenuActive={isMenuActive} />
        <Mask isMenuActive={isMenuActive} />
      </nav>
    </section>
  );
};

export default NavMenu_001;
