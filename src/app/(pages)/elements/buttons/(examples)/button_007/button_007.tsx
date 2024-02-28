"use client";

// 3rd party libraries;
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState, FC } from "react";
import { ArrowRight } from "lucide-react";

import ElementLayout from "../../../ElementLayout";
import { tabs } from "./codeblock";

const motionVariants: Variants = {
  initial: {
    x: "-10%",
  },
  active: {
    x: "100%",
    transition: {
      x: { duration: 0.4, easing: [0.29, 0.44, 0, 1.06] },
    },
  },
  inactive: {
    x: "200%",
    transition: {
      x: { duration: 0.4, easing: [0.29, 0.44, 0, 1.06] },
    },
  },
};

const dependencies = [
  {
    label: "Framer motion",
    command: "npm install framer-motion",
  },
  {
    label: "Lucide React",
    command: "npm install lucide-react",
  },
];

const Button007: FC = () => {
  const [isLinkHovered, setLinkHovered] = useState(false);
  const hoverLink: () => void = () => setLinkHovered(true);
  const unhoverLink: () => void = () => setLinkHovered(false);
  return (
    <ElementLayout dependencies={dependencies} tabs={tabs}>
      <button
        onMouseEnter={hoverLink}
        onMouseLeave={unhoverLink}
        className="group/button relative overflow-hidden isolate rounded-full flex items-center gap-5 p-1 md:p-2 pl-5 md:pl-5 lg:pl-7 text-white bg-white"
      >
        <span className="md:text-xl transition-all duration-300 relative z-10 mix-blend-difference">
          Discover our services
        </span>
        <div className="size-10 lg:size-16 rounded-full border border-black bg-white grid place-items-center relative z-10">
          <div className="relative overflow-hidden bg-white">
            <ArrowRight className="h-[18px] stroke-black w-[18px] md:h-[20px] md:w-[20px] group-hover/button:translate-x-full transition-all duration-500" />
            <ArrowRight className="absolute stroke-black inset-0 h-[18px] w-[18px] md:h-[20px] md:w-[20px] -translate-x-full group-hover/button:translate-x-0 transition-all duration-500" />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isLinkHovered ? (
            <motion.div
              variants={motionVariants}
              initial="initial"
              animate="active"
              exit="inactive"
              className="absolute h-full w-full top-0 right-full rounded-full bg-black z-[5]"
            ></motion.div>
          ) : null}
        </AnimatePresence>
      </button>
    </ElementLayout>
  );
};

export default Button007;
