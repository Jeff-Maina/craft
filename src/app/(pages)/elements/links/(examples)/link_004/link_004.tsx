"use client";

import { ArrowRight } from "lucide-react";
import ElementLayout from "../../../ElementLayout";
import { codeblock } from "./codeblock";
import { FC, useState } from "react";
import { motion } from "framer-motion";

const MotionVariants = (index: number) => ({
  initial: {
    y: "0%",
  },
  hovered: {
    y: "-100%",
    transition: {
      y: {
        duration: 0.2,
        delay: index * 0.05,
      },
    },
  },
  unhovered: {
    y: "0%",
    transition: {
      y: {
        duration: 0.2,
        delay: index * 0.05,
      },
    },
  },
});

const Link004: FC = () => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  const hoverLink: () => void = () => setIsLinkHovered(true);
  const unhoverLink: () => void = () => setIsLinkHovered(false);
  const wordArray = Array.from("services");

  const WordElement = wordArray.map((char, index) => {
    return (
      <div className="">
        <motion.p
          variants={MotionVariants(index)}
          initial="initial"
          animate={isLinkHovered ? "hovered" : "unhovered"}
          key={index}
          className="text-lg xl:text-2xl !leading-none uppercase"
        >
          {char}
        </motion.p>
      </div>
    );
  });

  return (
    <ElementLayout codeBlock={codeblock}>
      <a
        onMouseEnter={hoverLink}
        onMouseLeave={unhoverLink}
        href="#"
        className="group/link relative max-w-fit overflow-hidden"
      >
        <div className="flex pointer-events-none">{WordElement}</div>
        <div className="flex pointer-events-none absolute top-full">
          {WordElement}
        </div>
      </a>
    </ElementLayout>
  );
};

export default Link004;

// feb 8 22:21
// feb 6 23:29
