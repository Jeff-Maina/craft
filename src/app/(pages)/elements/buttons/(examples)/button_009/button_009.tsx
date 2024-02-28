"use client";

// 3rd party libraries
import { MouseEvent, MouseEventHandler, useRef } from "react";
import { useAnimate } from "framer-motion";

// components
import ElementLayout from "../../../ElementLayout";
import { tabs } from "./codeblock";

interface BubbleElement extends HTMLElement {
  className: string;
  style: CSSStyleDeclaration;
}

const dependencies = [
  {
    label: "Framer Motion",
    command: "npm install framer-motion",
  },
  
];

const Button009 = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [scope, animate] = useAnimate();

  const animateBubble = async (el: BubbleElement) => {
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

  const elementStyle =
    "size-8 absolute bg-[#7a7a7a] rounded-full opacity-[0.6] z-[5]";

  const addBubbles: MouseEventHandler = ({ clientX, clientY }: MouseEvent) => {
    const parent = buttonRef.current;
    if (!parent) return;
    const { top, left } = parent.getBoundingClientRect();

    const bubble = document.createElement("div");
    bubble.className = elementStyle;

    // used 16 coz those are the bubbles dimensions / 2
    const x = clientX - (left + 16);
    const y = clientY - (top + 16);

    bubble.style.left = x + "px";
    bubble.style.top = y + "px";
    parent.appendChild(bubble);

    animateBubble(bubble);

    setTimeout(() => {
      parent.removeChild(bubble);
    }, 1100);
  };

  return (
    <ElementLayout dependencies={dependencies} tabs={tabs}>
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
