"use client";

import { motion } from "framer-motion";
import ElementLayout from "../../../ElementLayout";
import { codeblock } from "./codeblock";
import { useRef, useState } from "react";
import { PlayIcon } from "lucide-react";
import { gsap } from "gsap";

const textVariants = {
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
const textVariants2 = {
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
const lineVariants = {
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
const lineVariants2 = {
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
const iconVariants = {
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

const SvgVariants = {
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

const Link012 = () => {
  const [isLinkHovered, setLinkHovered] = useState(false);
  const hoverLink: () => void = () => setLinkHovered(true);
  const unhoverlink: () => void = () => setLinkHovered(false);
  const iconRef = useRef(null);

  const moveIcon = ({ clientX, clientY }) => {
    const moveContainerY = gsap.quickTo(iconRef.current, "top", {
      duration: 0.4,
      ease: "power3",
    });
    const moveContainerX = gsap.quickTo(iconRef.current, "left", {
      duration: 0.4,
      ease: "power3",
    });
    let { top, left, width } = iconRef.current?.getBoundingClientRect();

    moveContainerX(clientX - left + width);
    moveContainerY(clientY - top );
  };

  return (
    <ElementLayout codeBlock={codeblock}>
      <a
        href=""
        className="font-satoshi-medium lg:text-4xl relative"
        onMouseEnter={hoverLink}
        onMouseLeave={unhoverlink}
        onMouseMove={moveIcon}
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
