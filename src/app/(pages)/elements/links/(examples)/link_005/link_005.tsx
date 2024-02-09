"use client";

import { useState } from "react";
import ElementLayout from "../../../ElementLayout";
import { codeblock } from "./codeblock";
import { AnimatePresence, motion } from "framer-motion";
import Motiondiv from "@/components/Motiondiv";

const motionVariants = {
  initial: {
    x: "-100%",
  },
  active: {
    x: "0%",
    transition: {
      x: {
        duration: 0.5,
      },
    },
  },
  inactive: {
    x: "100%",
    transition: {
      x: {
        duration: 0.4,
      },
    },
  },
};

const Link005 = () => {
  const [isLinkHovered, setLinkHovered] = useState(false),
    hoverLink: () => void = () => setLinkHovered(true),
    unhoverLink: () => void = () => setLinkHovered(false);

  return (
    <ElementLayout codeBlock={codeblock}>
      <a
        href="#"
        onMouseEnter={hoverLink}
        onMouseLeave={unhoverLink}
        className="group/link relative overflow-hidden"
      >
        <span className="text-lg lg:text-xl">join the team</span>
        <Motiondiv
          variants={motionVariants}
          isAnimatePresence={true}
          isAnimationActive={isLinkHovered}
          className="h-[1px] bottom-0 absolute w-full bg-orange-500"
        ></Motiondiv>
      </a>
    </ElementLayout>
  );
};

export default Link005;

// feb 9 24:39
// feb 9 1:00
