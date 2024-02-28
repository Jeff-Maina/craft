"use client";
import { tabs } from "./codeblock";
import ElementLayout from "../../../ElementLayout";
import { useState } from "react";
import Motiondiv from "@/components/Motiondiv";

const ButtonVariants = {
  initial: {
    y: "20%",
  },
  active: {
    y: "-50%",
    transition: {
      y: {
        duration: 0.3,
      },
    },
  },
  inactive: {
    y: "-120%",
    transition: {
      y: {
        duration: 0.3,
      },
    },
  },
};

const dependencies = [
  {
    label: "Framer motion",
    command: "npm install framer-motion",
  },
];

const Button004 = () => {
  const [isButtonHovered, setButtonHovered] = useState(false);
  const hoverButton: () => void = () => setButtonHovered(true);
  const unHoverButton: () => void = () => setButtonHovered(false);

  return (
    <ElementLayout dependencies={dependencies} tabs={tabs}>
      <button
        onMouseOver={hoverButton}
        onMouseLeave={unHoverButton}
        className="border border-black bg-white leading-none p-5 px-10 rounded-full group/button active:scale-105 outline-blue-500 relative isolate overflow-hidden transition-all duration-300"
      >
        <span className="relative md:text-lg text-white mix-blend-difference transition-colors duration-300">
          {" "}
          Join us today
        </span>

        <Motiondiv
          isAnimatePresence={true}
          isAnimationActive={isButtonHovered}
          variants={ButtonVariants}
          className="absolute bg-[#2a2a2a] size-52 rounded-full -z-10 top-2/4 left-0 pointer-events-none"
        ></Motiondiv>
      </button>
    </ElementLayout>
  );
};

export default Button004;

// feb 6 21:21
// feb 6 22:28
