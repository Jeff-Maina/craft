"use client";

import { useState, FC } from "react";
import ElementLayout from "../../../ElementLayout";
import { tabs } from "./codeblock";
import { motion } from "framer-motion";

const dependencies = [
  {
    label: "Framer motion",
    command: "npm install framer-motion",
  },
];

const Button010 = () => {
  const [isButtonHovered, setButtonHovered] = useState(false);
  const hoverButton = () => setButtonHovered(true);
  const unHoveredButton = () => setButtonHovered(false);
  return (
    <ElementLayout dependencies={dependencies} tabs={tabs}>
      <button
        onMouseEnter={hoverButton}
        onMouseLeave={unHoveredButton}
        className="p-6 px-8 rounded-[0.5rem] border border-zinc-300 leading-none relative mix-blend-difference text-white bg-white overflow-hidden text-lg tracking-tighter"
      >
        <div className="overflow-hidden relative z-10 mix-blend-difference select-none">
          <div className="flex items-center">
            {Array.from("Web Development").map((char, index) => {
              return (
                <motion.div
                  initial={{
                    y: "0%",
                  }}
                  animate={{
                    y: isButtonHovered ? "-110%" : "0%",
                  }}
                  transition={{
                    y: {
                      duration: 0.2,
                      delay: 0.01 * index,
                      ease: "easeOut",
                    },
                  }}
                  className={`${index === 2 && "mr-1"}`}
                >
                  {char}
                </motion.div>
              );
            })}
          </div>
          <div className="flex items-center absolute inset-0">
            {Array.from("Web Development").map((char, index) => {
              return (
                <motion.div
                  initial={{
                    y: "110%",
                  }}
                  className={`${index === 2 && "mr-1"}`}
                  animate={{
                    y: isButtonHovered ? "0%" : "110%",
                  }}
                  transition={{
                    y: {
                      duration: 0.2,
                      delay: 0.01 * index,
                      ease: "easeOut",
                    },
                  }}
                >
                  {char}
                </motion.div>
              );
            })}
          </div>
        </div>
        <div
          style={{
            transform: isButtonHovered
              ? "translate(0,0%)"
              : "translate(0,100%)",
            transition: "all 0.3s ease",
          }}
          className="absolute inset-0 h-full w-full bg-black rounded-[0.5rem] pointer-events-none"
        ></div>
      </button>
    </ElementLayout>
  );
};

export default Button010;
