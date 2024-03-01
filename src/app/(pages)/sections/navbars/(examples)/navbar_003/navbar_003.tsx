"use client";
import { motion } from "framer-motion";

import ElementLayout from "@/app/(pages)/elements/ElementLayout";
import { tabs } from "./codeblock";
import { useState } from "react";

const depndencies = [
  {
    label: "Framer Motion",
    command: "npm install framer-motion",
  },
];

const links = ["Home", "About", "Contact"];

const Navbar003 = () => {
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState(0);
  const moveIndicator = (index: number) => setHoveredLinkIndex(index);

  return (
    <ElementLayout tabs={tabs} dependencies={depndencies} className="!pt-0">
      <div className="h-full w-full flex justify-end p-8">
        <nav className="max-w-fit relative z-10">
          <div className="flex items-center bg-[#000000ab] text-white rounded-[0.3rem] group/nav backdrop-blur">
            {links.map((link, index) => {
              const isHovered = hoveredLinkIndex === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => moveIndicator(index)}
                  className="py-3 px-6 cursor-pointer relative"
                >
                  <div className="relative z-10 h-full w-full">{link}</div>
                  {isHovered && (
                    <motion.div
                      layoutId="indicator"
                      transition={{
                        duration: 0.3,
                      }}
                      className="absolute w-full h-full inset-0 !opacity-0 group-hover/nav:!opacity-100 transition-opacity duration-300 p-1"
                    >
                      <div className="w-full h-full bg-[#2a2a2a] rounded pointer-events-none"></div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>
        <div  className="absolute inset-0 h-full w-full object-cover bg-blue-200"  />
      </div>
    </ElementLayout>
  );
};

export default Navbar003;
