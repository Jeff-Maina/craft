"use client";

import { useRef, useState } from "react";
import ElementLayout from "../../../ElementLayout";
import { useCursorPosition } from "../../lib/useCursorPosition";
import { codeblock } from "./codeblock";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

const ArrowVariants = {
  initial: {
    x: -50,
    y: 50,
  },
  active: {
    x: 0,
    y: 0,
    transition: {
      x: {
        duration: 0.3,
      },
      y: {
        duration: 0.3,
      },
    },
  },
  inactive: {
    x: 0,
    y: 0,
    transition: {
      opacity: 0,
    },
  },
};

const Cursor003 = () => {
  const ref = useRef(null);
  const { x, y } = useCursorPosition(ref);

  const [isHovering, setIsHovering] = useState(false);
  const [hoverItem, setHoverItem] = useState("");
  const hover: () => void = () => setIsHovering(true);
  const unhover: () => void = () => {
    setIsHovering(false);
    setHoverItem("");
  };

  const newX = isHovering ? x - 90 : x - 30;
  const newY = y + 20;

  return (
    <ElementLayout codeBlock={codeblock} className="!pt-0">
      <div ref={ref} className="h-full w-full grid place-items-center relative overflow-hidden">
        <motion.div
          initial={{
            width: "8px",
          }}
          animate={{
            x: newX,
            y: newY,
            width: isHovering ? "120px" : "20px",
          }}
          transition={{
            x: {
              duration: 0.3,
            },
            y: {
              duration: 0.3,
            },
            width: {
              duration: 0.3,
            },
          }}
          className={`aspect-square bg-[#5e68f9] absolute inset-0 rounded-full pointer-events-none z-50 transition-size grid place-items-center overflow-hidden`}
        >
          <AnimatePresence mode="wait">
            {isHovering && (
              <motion.div
                variants={ArrowVariants}
                initial="initial"
                animate="active"
                exit="inactive"
              >
                {hoverItem === "link" && (
                  <ArrowUpRight className="h-[24px] w-[24px] stroke-white stroke-[3px]" />
                )}
                {hoverItem === "video" && (
                  <Play className="h-[24px] w-[24px] stroke-white fill-white" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="h-3/4 flex w-[60%] gap-6">
          <div
            onMouseEnter={() => {
              hover();
              setHoverItem("link");
            }}
            onMouseLeave={unhover}
            className="w-80 h-96 cursor-pointer border overflow-hidden group/cont"
          >
            <img
              src="https://i.pinimg.com/564x/0e/ef/09/0eef094a838b478027d4867ef51c4347.jpg"
              alt="image"
              className="w-full h-full object-cover group-hover/cont:scale-[105%] transition-all duration-500"
            />
          </div>
          <div
            onMouseEnter={() => {
              hover();
              setHoverItem("video");
            }}
            onMouseLeave={unhover}
            className="w-80 h-96 cursor-pointer border group/cont"
          >
            <img
              src="https://i.pinimg.com/736x/c7/79/9c/c7799ced1d6a05714ecd4ebc9a930bf6.jpg"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </ElementLayout>
  );
};

export default Cursor003;
