"use client";

import { useState } from "react";
import ElementLayout from "../../../ElementLayout";
import { codeblock } from "./codeblock";
import { AnimatePresence, motion } from "framer-motion";

const Button009 = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const toggleState = () => {
    console.log(isButtonClicked);
    setIsButtonClicked(!isButtonClicked);
  };
  return (
    <ElementLayout codeBlock={codeblock}>
      <button
        onClick={(e) => {
          toggleState();
        }}
        className="bg-zinc-200 rounded-full h-14 md:text-xl px-10"
      >
        <AnimatePresence mode="wait">
          {isButtonClicked ? (
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                opacity: {
                  duration: 0.2,
                },
              }}
              className="pointer-events-none"
            >
              Settings
            </motion.p>
          ) : null}
        </AnimatePresence>{" "}
        <AnimatePresence mode="wait">
          {!isButtonClicked ? (
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  opacity: 0,
                },
              }}
              transition={{
                opacity: {
                  duration: 0.2,
                },
              }}
              className="pointer-events-none"
            >
              Home
            </motion.p>
          ) : null}
        </AnimatePresence>
      </button>
    </ElementLayout>
  );
};

export default Button009;
