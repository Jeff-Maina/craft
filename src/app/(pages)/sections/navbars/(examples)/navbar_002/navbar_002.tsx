"use client";

import ElementLayout from "@/app/(pages)/elements/ElementLayout";
import { codeblock } from "./codeblock";

// 3rd party libraries;
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

//  Types;
type link = {
  label: string;
  link: string;
};

// Animation Variants;
const heightVariants = {
  initial: { height: 0 },
  active: {
    height: "auto",
    transition: {
      height: {
        duration: 0.4,
      },
    },
  },
  inactive: {
    height: 0,
    transition: {
      height: {
        duration: 0.4,
      },
    },
  },
};
const widthVariants = {
  initial: { width: 0 },
  active: {
    width: "auto",
    transition: {
      width: {
        duration: 0.5,
      },
    },
  },
  inactive: {
    width: 0,
    transition: {
      width: {
        duration: 0.5,
      },
    },
  },
};
const opacityVariants = {
  initial: { opacity: 0 },
  active: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.4,
      },
    },
  },
  inactive: {
    opacity: 0,
    transition: {
      opacity: {
        duration: 0.4,
      },
    },
  },
};

const Links: Array<link> = [
  { label: "Product", link: "Product" },
  { label: "App", link: "App" },
  { label: "Company", link: "Company" },
  { label: "Community", link: "Community" },
];

//
const Navbar002 = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(!isMenuActive);

  const icon = isMenuActive ? (
    <X className="stroke-[#575349]" size={16} />
  ) : (
    <Menu className="stroke-[#575349]" size={16} />
  );

  return (
    <ElementLayout codeBlock={codeblock}>
      <div className="w-full h-full flex items-start justify-center pt-5 lg:pt-10 text-sm xl:text-lg xl:pr-20">
        <div
          className={`bg-[#f2efe9] ${
            isMenuActive ? "p-[6px] xl:p-[4px]" : "p-0 xl:p-[4px]"
          } text-[#575349] rounded-[0.6rem] xl:rounded-[0.8rem]  transition-all duration-300 flex flex-col xl:flex-row-reverse xl:items-center xl:justify-start xl:ml-auto `}
        >
          <div
            className={`flex items-center h-14 xl:h-20 rounded-[0.4rem]  overflow-hidden ${
              isMenuActive ? "bg-[#d7d1c6] xl:bg-[#f2efe9]" : "bg-[#f2efe9]"
            } p-[3px] transition-colors duration-300`}
          >
            <button
              onClick={toggleMenu}
              className="h-full aspect-square grid place-items-center xl:hidden"
            >
              {icon}
            </button>
            <button
              onMouseEnter={toggleMenu}
              onMouseLeave={toggleMenu}
              className="h-full aspect-square xl:grid place-items-center hidden"
            >
              {icon}
            </button>
            <div
              className={`h-full rounded-[0.3rem] xl:rounded-[0.5rem] px-6 ${
                isMenuActive ? "bg-[#f2efe9] xl:bg-[#d7d1c6]" : "bg-[#d7d1c6]"
              }  grid place-items-center transition-colors duration-300 text-xs xl:text-base`}
            >
              <p className="uppercase">Preorder</p>
            </div>
          </div>
          <motion.div
            variants={heightVariants}
            initial="initial"
            animate={isMenuActive ? "active" : "inactive"}
            className="overflow-hidden xl:!hidden"
          >
            <motion.ul
              variants={opacityVariants}
              initial="initial"
              animate={isMenuActive ? "active" : "inactive"}
              className="py-6 xl:py-0 px-2 flex flex-col xl:flex-row xl:pl-8 gap-5 items-center pt-6 text-[10px] xl:text-sm h-full"
            >
              {Links.map((link, index) => (
                <li key={index} className="uppercase">
                  {link.label}
                </li>
              ))}
            </motion.ul>
          </motion.div>{" "}
          <motion.div
            onMouseEnter={() => setMenuActive(true)}
            onMouseLeave={() => setMenuActive(false)}
            variants={widthVariants}
            initial="initial"
            animate={isMenuActive ? "active" : "inactive"}
            className="overflow-hidden !hidden xl:!block max-w-fit h-20 "
          >
            <motion.ul
              variants={opacityVariants}
              initial="initial"
              animate={isMenuActive ? "active" : "inactive"}
              className="py-6 xl:py-0 px-2 flex flex-col xl:flex-row xl:pl-8 gap-10 items-center pt-6 text-[10px] xl:text-sm h-full"
            >
              {Links.map((link, index) => (
                <li key={index} className="uppercase">
                  {link.label}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </ElementLayout>
  );
};

export default Navbar002;
