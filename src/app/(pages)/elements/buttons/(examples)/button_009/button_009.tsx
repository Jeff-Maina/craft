"use client";

import { useRef, useState } from "react";
import ElementLayout from "../../../ElementLayout";
import { codeblock } from "./codeblock";
import { AnimatePresence, motion, useAnimate } from "framer-motion";

const Button009 = () => {
  const buttonRef = useRef(null);
  const [scope, animate] = useAnimate();

  const animateBubble = async (el) => {
    animate(
      el,
      {
        scale: 15,
        opacity: 0,
      },
      {
        duration: 1,
      }
    );
  };

  const addBubbles = ({ clientX, clientY }) => {
    const parent = buttonRef.current;
    const bubble = document.createElement("div");
    bubble.style.height = "30px";
    bubble.style.width = "30px";
    bubble.style.position = "absolute";
    bubble.style.backgroundColor = "#7a7a7a";
    bubble.style.borderRadius = "50%";
    bubble.style.opacity = "0.6";
    bubble.style.zIndex = "4";
    // Positions;
    const { top, left, width, height } = parent.getBoundingClientRect();

    const x = clientX - (left + 15);
    const y = clientY - (top + 15);

    console.log(x, y);

    bubble.style.left = x + "px";
    bubble.style.top = y + "px";
    parent.appendChild(bubble);

    animateBubble(bubble);

    setTimeout(() => {
      // parent.removeChild(bubble);
    }, 1100);
  };

  return (
    <ElementLayout codeBlock={codeblock}>
      <button
        ref={buttonRef}
        onClick={addBubbles}
        className="bg-[#2a2a2a] text-white py-4 px-10 rounded-full relative overflow-hidden isolate"
      >
        <span className="text-xl relative z-10">click me</span>
      </button>
    </ElementLayout>
  );
};

export default Button009;
