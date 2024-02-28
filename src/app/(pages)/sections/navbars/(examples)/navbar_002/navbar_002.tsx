"use client";

import React, { FC, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ElementLayout from "@/app/(pages)/elements/ElementLayout";
import { tabs } from "./codeblock";
import useScreenSize from "@/utils/hooks/useScreenSize";
import {
  opacityVariants,
  widthVariants,
  heightVariants,
  NavLinkVariants,
} from "./Variants";

// Types;
interface Link {
  label: string;
  link: string;
}

interface LinkAnimProps {
  isMenuActive: boolean;
  label: string;
}

// Data;
const Links: Link[] = [
  { label: "Product", link: "Product" },
  { label: "App", link: "App" },
  { label: "Company", link: "Company" },
  { label: "Community", link: "Community" },
];

const dependencies = [
  {
    label: "Framer Motion",
    command: "npm install framer-motion",
  },
  {
    label: "Lucide React",
    command: "npm install lucide-react",
  },
];

//! mini components;

const LinkAnim: FC<LinkAnimProps> = ({ isMenuActive, label }) => {
  const chars = Array.from(label);

  return (
    <AnimatePresence mode="wait">
      {isMenuActive && (
        <motion.div
          variants={opacityVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          whileHover="hover"
          className="flex !cursor-pointer"
        >
          {chars.map((char, index) => (
            <div key={index} className="overflow-hidden uppercase xl:!text-xs">
              <motion.div custom={index} variants={NavLinkVariants}>
                {char}
              </motion.div>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar002: FC = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [isAnimationAllowed, setAnimationAllowed] = useState(true);

  const { width } = useScreenSize();
  const isXlScreen = width > 1280;

  // Menu control functions

  const handleAnimationCooldown = () => {
    setAnimationAllowed(false);
    setTimeout(() => {
      setAnimationAllowed(true);
    }, 800);
  };

  const clickMenuOpen = () => {
    if (!isXlScreen && isAnimationAllowed) {
      setMenuActive(!isMenuActive);
      handleAnimationCooldown();
    }
  };

  const hoverMenuOpen = () => {
    if (isXlScreen && isAnimationAllowed) {
      setMenuActive(true);
      handleAnimationCooldown();
    }
  };

  const resetMenu = () => {
    setMenuActive(false);
  };

  const icon = isMenuActive ? (
    <X className="stroke-[#575349]" size={16} />
  ) : (
    <Menu className="stroke-[#575349]" size={16} />
  );

  return (
    <ElementLayout
      dependencies={dependencies}
      tabs={tabs}
      className="!pt-0 border-none"
    >
      <div className="w-full h-full flex items-start justify-center pt-5 lg:pt-10 text-sm xl:text-lg xl:pr-20 bg-[#c6c0b6]">
        <div
          onMouseLeave={resetMenu}
          className={`bg-[#f2efe9] ${
            isMenuActive ? "p-[3px] xl:p-[1px]" : "p-0 xl:p-[1px]"
          } text-[#575349] rounded-[0.6rem] xl:rounded-[0.8rem] transition-all duration-300 flex flex-col xl:flex-row-reverse xl:items-center xl:justify-start xl:ml-auto `}
        >
          <div
            className={`flex items-center h-14 xl:h-20 rounded-[0.4rem]  overflow-hidden ${
              isMenuActive ? "bg-[#d7d1c6] xl:bg-[#f2efe9]" : "bg-[#f2efe9]"
            } p-[3px] transition-all duration-500`}
          >
            <button
              onClick={clickMenuOpen}
              onMouseEnter={hoverMenuOpen}
              className="h-full aspect-square grid place-items-center"
            >
              {icon}
            </button>

            <div
              className={`h-full rounded-[0.3rem] xl:rounded-[0.5rem] px-6 ${
                isMenuActive ? "bg-[#f2efe9] xl:bg-[#d7d1c6]" : "bg-[#d7d1c6]"
              }  grid place-items-center transition-all duration-500 text-xs`}
            >
              <p className="uppercase">Preorder</p>
            </div>
          </div>
          <>
            <div className="lg:hidden">
              <motion.div
                variants={heightVariants}
                initial="initial"
                animate={isMenuActive ? "active" : "inactive"}
                className={`overflow-hidden w-full`}
              >
                <motion.ul
                  variants={opacityVariants}
                  initial="initial"
                  animate={isMenuActive ? "active" : "inactive"}
                  className="py-6 xl:py-0 px-2 flex flex-col xl:flex-row xl:pl-8 gap-5 xl:gap-10 items-center pt-6 text-[10px] xl:text-sm h-full w-full"
                >
                  {Links.map((link, index) => (
                    <LinkAnim
                      key={index}
                      label={link.label}
                      isMenuActive={isMenuActive}
                    />
                  ))}
                </motion.ul>
              </motion.div>
            </div>
            <div className="hidden lg:block">
              <motion.div
                variants={widthVariants}
                initial="initial"
                animate={isMenuActive ? "active" : "inactive"}
                className={`overflow-hidden w-full`}
              >
                <motion.ul
                  variants={opacityVariants}
                  initial="initial"
                  animate={isMenuActive ? "active" : "inactive"}
                  className="py-6 xl:py-0 px-2 flex flex-col xl:flex-row xl:pl-8 gap-5 xl:gap-10 items-center pt-6 text-[10px] xl:text-sm h-full w-full"
                >
                  {Links.map((link, index) => (
                    <LinkAnim
                      key={index}
                      label={link.label}
                      isMenuActive={isMenuActive}
                    />
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </>
        </div>
      </div>
    </ElementLayout>
  );
};

export default Navbar002;

// inspiration https://pebblelife.com/
