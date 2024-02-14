"use client";

import { AnimatePresence, motion } from "framer-motion";
import ElementLayout from "../../../ElementLayout";
import { codeblock } from "./codeblock";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";

// animation variants
const LineVariants = {
  initial: {
    x: "-100%",
  },
  active: {
    x: "0%",
    transition: {
      x: {
        duration: 0.4,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    },
  },
  inactive: {
    x: "100%",
    transition: {
      x: {
        duration: 0.4,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    },
  },
};

const CircleVariants = {
  initial: {
    scale: 0,
  },
  active: {
    scale: 1,
  },
  inactive: {
    scale: 0,
  },
};

const SvgVariants = {
  initial: {
    transform: "translate(-130%,130%)",
    opacity: 0,
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
};

const Link011 = () => {
  const [isLinkHovered, setLinkHovered] = useState(false);
  const hoverlink: () => void = () => setLinkHovered(true);
  const unhoverlink: () => void = () => setLinkHovered(false);

  const circleRef = useRef(null);

  const handleMouseMove = ({ clientX, clientY }) => {
    const moveContainerY = gsap.quickTo(circleRef.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerX = gsap.quickTo(circleRef.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let { top, left } = circleRef.current?.getBoundingClientRect();

    moveContainerX(clientX - left);
    moveContainerY(clientY - top + 30);
  };

  return (
    <ElementLayout codeBlock={codeblock}>
      <a
        onMouseEnter={hoverlink}
        onMouseLeave={unhoverlink}
        onMouseMove={handleMouseMove}
        href=""
        className="relative font-graphik-regular h-10"
      >
        <span className="flex items-center gap-2 lg:text-2xl">
          <div className="size-2 rounded-full bg-orange-500"></div>
          info.care@gmail.com
        </span>
        <motion.div
          ref={circleRef}
          variants={CircleVariants}
          initial="initial"
          animate={isLinkHovered ? "active" : "inactive"}
          className="absolute inset-0 z-10 size-24 rounded-full bg-purple-500 grid place-items-center pointer-events-none"
        >
          <motion.div
            variants={SvgVariants}
            initial="initial"
            animate={isLinkHovered ? "active" : "inactive"}
            className=""
          >
            <ArrowUpRight className="stroke-4 stroke-white h-[24px] w-[24px]" />
          </motion.div>
        </motion.div>
        <AnimatePresence mode="wait">
          {isLinkHovered && (
            <div className="w-full h-[2px] absolute bottom-1 overflow-hidden pointer-events-none">
              <motion.div
                variants={LineVariants}
                initial="initial"
                animate="active"
                exit="inactive"
                className=" bg-purple-500 w-full h-full "
              ></motion.div>
            </div>
          )}
        </AnimatePresence>
      </a>
    </ElementLayout>
  );
};

export default Link011;
