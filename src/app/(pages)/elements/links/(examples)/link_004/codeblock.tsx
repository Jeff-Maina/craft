const javascript: string = 
`<a href="#" className="group/link relative max-w-fit overflow-hidden">
  <span className="lg:text-xl">example@design.com</span>
  <div className="absolute bottom-0 h-[1px] w-full bg-black -translate-x-[250%]  group-hover/link:translate-x-0 transition-all duration-700 ease-in-out"></div>
  <div className="absolute bottom-0 h-[1px] w-full bg-black group-hover/link:translate-x-[250%]  transition-all duration-700 ease-in-out"></div>
</a>`;

const typescript: string = 
`"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";

// framer motion variants;
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

const Link: FC = () => {
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

export default Link;

// feb 8 22:21
// feb 6 23:29
`;

export const codeblock = {
  javascript,
  typescript,
};
