"use client";

import { useState } from "react";
import ElementLayout from "../../../ElementLayout";
import { tabs } from "./codeblock";
import { motion } from "framer-motion";

const Link015 = () => {
  const [isButtonHovered, setButtonHovered] = useState(false);
  const hoverButton = () => setButtonHovered(true);
  const unHoveredButton = () => setButtonHovered(false);

  return (
    <ElementLayout tabs={tabs} dependencies={[]}>
      <div
        onMouseEnter={hoverButton}
        onMouseLeave={unHoveredButton}
        className="font-alfa text-5xl md:text-6xl relative cursor-pointer leading-none origin-left group/link"
      >
        <div className="flex select-none origin-left rotate-0 group-hover/link:-rotate-[4deg] transition-all duration-300">
          {Array.from("Bordeaux").map((char, index) => {
            return (
              <motion.div
                initial={{
                  color: "#000",
                  scale: 1,
                }}
                animate={{
                  color: isButtonHovered ? ["#FC6736", "#0C2D57"] : "#000",
                  scale: isButtonHovered ? [1, 1.3, 1] : 1,
                }}
                transition={{
                  color: {
                    duration: 0.3,
                    delay: 0.05 * index,
                  },
                  scale: {
                    duration: 0.3,
                    delay: 0.05 * index,
                  },
                }}
              >
                {char}
              </motion.div>
            );
          })}
        </div>
      </div>
    </ElementLayout>
  );
};

export default Link015;
