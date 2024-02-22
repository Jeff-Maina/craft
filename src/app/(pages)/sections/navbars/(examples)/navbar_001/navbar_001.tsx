"use client";

import ElementLayout from "@/app/(pages)/elements/ElementLayout";
import { codeblock } from "./codeblock";
import { useState } from "react";
import { motion } from "framer-motion";

interface links {
  link: string;
  color: string;
  label: string;
  hasDropdown: boolean;
}

const Links: Array<links> = [
  {
    link: "Home",
    color: "298, 70%, 66%",
    label: "Home",
    hasDropdown: false,
  },
  {
    link: "About",
    color: "38, 100%, 60%",
    label: "About",
    hasDropdown: false,
  },
  {
    link: "Work",
    // color: "204, 88%, 71%",
    color: "102, 48%, 49%",
    label: "Work",
    hasDropdown: true,
  },
  {
    link: "Expertise",
    color: "337, 100%, 50%",
    label: "Expertise",
    hasDropdown: false,
  },
  {
    link: "Contact",
    color: "54, 100%, 56%",
    label: "Contact",
    hasDropdown: false,
  },
];

const Navbar001 = () => {
  const [activeColor, setActiveColor] = useState<String>(Links[0].color);
  const [hoverTabIndex, setHoverTabIndex] = useState<Number>(0);
  const [activeTabIndex, setActiveTabIndex] = useState<Number>(0);
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<Number>(0);

  const handleTabs = (color: String, index: Number, hasDropdown: boolean) => {
    const newIndex = hasDropdown === true ? activeTabIndex : index;
    setActiveColor(color);
    setActiveTabIndex(newIndex);
    setIsDropDownActive(hasDropdown);
    if (!hasDropdown) return;
    setHoveredDropdown(index);
    console.log(hoveredDropdown);
  };

  return (
    <ElementLayout codeBlock={codeblock} className="!pt-0">
      <div
        style={{
          backgroundColor: `hsl(${activeColor},30%)`,
        }}
        onClick={() => {
          setIsDropDownActive(false);
        }}
        className="w-full h-full flex items-start justify-center transition-all duration-200 pt-20"
      >
        <nav
          className={`relative bg-white rounded-[2rem] ${
            isDropDownActive ? "shadow" : "shadow-none"
          } transition-all duration-300`}
        >
          <ul
            onMouseLeave={() => {
              const newIndex = !isDropDownActive
                ? activeTabIndex
                : hoveredDropdown;
              console.log(newIndex, hoveredDropdown);
              setHoverTabIndex(newIndex);
            }}
            className="flex items-center rounded-full bg-white p-[7px] relative z-10"
          >
            {Links.map((link, index) => {
              const isTabActive = index === activeTabIndex;

              return (
                <li
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTabs(link.color, index, link.hasDropdown);
                  }}
                  onMouseEnter={() => {
                    setHoverTabIndex(index);
                  }}
                  key={index}
                  style={{
                    color: isTabActive ? `hsl(${link.color})` : "#000",
                  }}
                  className="p-[6px] px-4 cursor-pointer relative transition-colors duration-200"
                >
                  {index === hoverTabIndex && (
                    <motion.div
                      layoutId="ghostIndicator"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                      style={{
                        backgroundColor: `hsl(${activeColor},10%)`,
                      }}
                      className="absolute inset-0 w-full h-full rounded-full"
                    ></motion.div>
                  )}
                  {index === activeTabIndex && (
                    <motion.div
                      layoutId="tabIndicator"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                      className="absolute inset-0 bg-black w-full h-full rounded-full z-[5]"
                    ></motion.div>
                  )}
                  <span className="relative z-10 leading-0 text-sm">
                    {link.label}
                  </span>
                </li>
              );
            })}
          </ul>
          <motion.div
            initial={{
              height: 0,
            }}
            animate={{
              height: isDropDownActive ? 200 : 0,
            }}
            transition={{
              height: {
                type: "spring",
                bounce: isDropDownActive ? 0.2 : 0,
                duration: 0.4,
              },
            }}
            className="w-full rounded-3xl relative overflow-hidden"
          ></motion.div>
        </nav>
      </div>
    </ElementLayout>
  );
};

export default Navbar001;
