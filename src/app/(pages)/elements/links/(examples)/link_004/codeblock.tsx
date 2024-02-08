const javascript: string = 
`"use client";

import {  useState } from "react";
import {  motion } from "framer-motion";

const MotionVariants = {
  initial: {
    y: "0%",
  },
  hovered: (index) => ({
    y: "-100%",
    transition: {
      y: {
        duration: 0.2,
        delay: index * 0.05,
      },
    },
  }),
  unhovered: (index) => ({
    y: "0%",
    transition: {
      y: {
        duration: 0.2,
        delay: index * 0.05,
      },
    },
  }),
};


const Link = () => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  const hoverLink = () => setIsLinkHovered(true);
  const unhoverLink = () => setIsLinkHovered(false);

  const wordArray = Array.from("services");

  const WordElement = wordArray.map((char, index) => {
    return (
      <div className="">
        <motion.p
          key={index}
          custom={index}
          variants={MotionVariants}
          initial="initial"
          animate={isLinkHovered ? "hovered" : "unhovered"}
          className="text-lg xl:text-2xl !leading-none uppercase"
        >
          {char}
        </motion.p>
      </div>
    );
  });

  return (
    <a
      onMouseEnter={hoverLink}
      onMouseLeave={unhoverLink}
      href="#"
      className="group/link relative max-w-fit overflow-hidden"
    >
        <div className="flex pointer-events-none">{WordElement}</div>
        <div className="flex pointer-events-none absolute top-full">{WordElement}</div>
    </a>
  );
};

export default Link;
`;

const typescript: string = 
`"use client";

import { FC, useState } from "react";
import { Variants, motion } from "framer-motion";

const MotionVariants: Variants = {
  initial: {
    y: "0%",
  },
  hovered: (index : number) => ({
    y: "-100%",
    transition: {
      y: {
        duration: 0.2,
        delay: index * 0.05,
      },
    },
  }),
  unhovered: (index : number) => ({
    y: "0%",
    transition: {
      y: {
        duration: 0.2,
        delay: index * 0.05,
      },
    },
  }),
};


const Link: FC = () => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  const hoverLink: () => void = () => setIsLinkHovered(true);
  const unhoverLink: () => void = () => setIsLinkHovered(false);

  const wordArray = Array.from("services");

  const WordElement = wordArray.map((char, index) => {
    return (
      <div className="">
        <motion.p
          key={index}
          custom={index}
          variants={MotionVariants}
          initial="initial"
          animate={isLinkHovered ? "hovered" : "unhovered"}
          className="text-lg xl:text-2xl !leading-none uppercase"
        >
          {char}
        </motion.p>
      </div>
    );
  });

  return (
    <a
      onMouseEnter={hoverLink}
      onMouseLeave={unhoverLink}
      href="#"
      className="group/link relative max-w-fit overflow-hidden"
    >
        <div className="flex pointer-events-none">{WordElement}</div>
        <div className="flex pointer-events-none absolute top-full">{WordElement}</div>
    </a>
  );
};

export default Link;
`;

export const codeblock = {
  javascript,
  typescript,
};
