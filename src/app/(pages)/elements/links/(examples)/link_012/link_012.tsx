"use client";

import { motion, Variants } from "framer-motion";
import { PlayIcon } from "lucide-react";
import { gsap } from "gsap";

import ElementLayout from "../../../ElementLayout";
import { tabs } from "./codeblock";
import { MouseEvent, MouseEventHandler, useRef, useState } from "react";

const textVariants: Variants = {
  initial: {
    x: 0,
  },
  active: {
    x: "110%",
    transition: {
      x: {
        duration: 0.7,
        delay: 0.15,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    },
  },
  inactive: {
    x: 0,
    transition: {
      x: {
        duration: 0,
      },
    },
  },
};
const textVariants2: Variants = {
  initial: {
    x: "-110%",
  },
  active: {
    x: "0%",
    transition: {
      x: {
        duration: 0.7,
        delay: 0.15,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    },
  },
  inactive: {
    x: "-110%",
    transition: {
      x: {
        duration: 0,
      },
    },
  },
};
const lineVariants: Variants = {
  initial: {
    x: 0,
  },
  active: {
    x: "110%",
    transition: {
      x: {
        duration: 0.8,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    },
  },
  inactive: {
    x: 0,
    transition: {
      x: {
        duration: 0,
      },
    },
  },
};
const lineVariants2: Variants = {
  initial: {
    x: "-110%",
  },
  active: {
    x: "0%",
    transition: {
      x: {
        duration: 0.8,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    },
  },
  inactive: {
    x: "-110%",
    transition: {
      x: {
        duration: 0,
      },
    },
  },
};
const iconVariants: Variants = {
  initial: {
    scale: 0,
  },
  hidden: {
    scale: 0,
  },
  active: {
    scale: 1,
  },
};
const SvgVariants: Variants = {
  initial: {
    transform: "translate(-130%,130%)",
    opacity: 0,
  },
  hidden: {
    transform: "translate(-130%,130%)",
    opacity: 0,
    transition: {
      duration: 0.2,
      opacity: {
        duration: 0,
      },
    },
  },
  active: {
    transform: "translate(0%,0%)",
    opacity: 1,
    transition: {
      transform: {
        duration: 0.3,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
      opacity: {
        duration: 0.4,
      },
    },
  },
};

const dependencies = [
  {
    label: "Lucide React",
    command: "npm install lucide-react",
  },
  {
    label: "Framer Motion",
    command: "npm install framer-motion",
  },
  {
    label: "GSAP",
    command: "npm install gsap",
  },
];

const Link012 = () => {
  const [isLinkHovered, setLinkHovered] = useState(false);
  const hoverLink: () => void = () => setLinkHovered(true);
  const unhoverlink: () => void = () => setLinkHovered(false);
  const iconRef = useRef<HTMLDivElement>(null);

  const moveIcon: MouseEventHandler = ({
    clientX,
    clientY,
  }: MouseEvent<HTMLButtonElement>) => {
    const moveContainerY = gsap.quickTo(iconRef.current, "top", {
      duration: 0.4,
      ease: "power3",
    });
    const moveContainerX = gsap.quickTo(iconRef.current, "left", {
      duration: 0.4,
      ease: "power3",
    });

    const icon = iconRef.current;
    if (!icon) return;

    let { top, left, width } = icon.getBoundingClientRect();

    moveContainerX(clientX - left + width);
    moveContainerY(clientY - top);
  };

  return (
    <ElementLayout tabs={tabs} dependencies={dependencies}>
      <a
        href=""
        className="font-satoshi-medium lg:text-4xl relative"
        onMouseEnter={hoverLink}
        onMouseLeave={unhoverlink}
        onMouseMove={(e) => moveIcon(e)}
      >
        <div className="relative overflow-hidden">
          <motion.p
            variants={textVariants}
            initial="initial"
            animate={isLinkHovered ? "active" : "inactive"}
          >
            Watch now
          </motion.p>
          <motion.p
            variants={textVariants2}
            initial="initial"
            animate={isLinkHovered ? "active" : "inactive"}
            className="absolute inset-0"
          >
            Watch now
          </motion.p>
        </div>
        <div className="relative overflow-hidden mt-1">
          <motion.div
            variants={lineVariants}
            initial="initial"
            animate={isLinkHovered ? "active" : "inactive"}
            className="h-[2px] w-full bg-red-500"
          ></motion.div>
          <motion.div
            variants={lineVariants2}
            initial="initial"
            animate={isLinkHovered ? "active" : "inactive"}
            className="h-[2px] w-full bg-red-500 absolute inset-0"
          ></motion.div>
        </div>
        <motion.div
          ref={iconRef}
          variants={iconVariants}
          initial="initial"
          animate={isLinkHovered ? "active" : "inactive"}
          className="bg-red-500 size-12 rounded-full absolute inset-0 grid place-items-center"
        >
          <motion.div
            variants={SvgVariants}
            initial="initial"
            animate={isLinkHovered ? "active" : "inactive"}
          >
            <PlayIcon className="fill-white stroke-white h-[16px] w-[16px]" />
          </motion.div>
        </motion.div>
      </a>
    </ElementLayout>
  );
};

export default Link012;
