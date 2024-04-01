"use client";
import { useState, useRef, MouseEvent, MouseEventHandler, FC } from "react";
import ElementLayout from "../../../ElementLayout";
import { tabs } from "./codeblock";
import { motion, useAnimate } from "framer-motion";

interface BubbleElement extends HTMLElement {
  className: string;
  style: CSSStyleDeclaration;
}

const Button011:FC = () => {
  const [colorCount, setColorCount] = useState(0);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [scope, animate] = useAnimate();

  const addBubble = async (el: BubbleElement) =>
    animate(el, { scale: 20 }, { duration: 0.6 });

  const removeBubble = async (el: Element) =>
    animate(el, { opacity: 0 }, { duration: 0.2 });

  const elementStyle = "bubble size-8 absolute rounded-full z-[5]";

  const addBubbles: MouseEventHandler = ({ clientX, clientY }: MouseEvent) => {
    setColorCount(colorCount + 1);

    const colors = ["red", "green", "orange"];
    const color = colors[(colorCount + 1) % 3];

    const parent = buttonRef.current;
    if (!parent) return;
    const { top, left } = parent.getBoundingClientRect();

    const bubble = document.createElement("div");
    bubble.className = elementStyle;

    bubble.style.backgroundColor = color;

    // used 16 coz those are the bubbles dimensions / 2
    const x = clientX - (left + 16);
    const y = clientY - (top + 16);

    bubble.style.left = x + "px";
    bubble.style.top = y + "px";
    parent.appendChild(bubble);

    addBubble(bubble);
  };
  const removeBubbles = () => {
    const bubbles = document.querySelectorAll(".bubble");
    bubbles.forEach((bubble) => removeBubble(bubble));

    setTimeout(() => bubbles.forEach((bubble) => removeBubble(bubble)), 250);
  };
  return (
    <ElementLayout dependencies={[]} tabs={tabs}>
      <button
        onMouseEnter={(e) => {
          e.stopPropagation();
          e.preventDefault();
          addBubbles(e);
        }}
        onMouseLeave={removeBubbles}
        ref={buttonRef}
        className="p-5 lg:p-6 px-12 lg:px-16 rounded-full bg-[#5267ab] text-white tracking-wider relative overflow-hidden"
      >
        <div className="flex uppercase lg:text-lg relative z-10">
          {Array.from("Readmore").map((char, index) => {
            return <div className={`${index === 3 && "mr-2"}`}>{char}</div>;
          })}
        </div>
      </button>
    </ElementLayout>
  );
};

export default Button011;
