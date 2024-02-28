"use client";

import { FC, MouseEvent, useRef, useState } from "react";
import ElementLayout from "../../../ElementLayout";
import { tabs } from "./codeblock";
import { useAnimate } from "framer-motion";

const dependencies = [
  {
    label: "Framer Motion",
    command: "npm install framer-motion",
  },
];
const Cursor001: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [emoji, setEmoji] = useState("✨");
  const [scope, animate] = useAnimate();

  const emojis = ["😂", "⭐️", "✨", "❄️", "❤️", "🖤", "💖"];

  const animateEl = (el: HTMLElement) => {
    animate(
      el,
      {
        y: 100,
        opacity: 0,
        scale: 0.5,
      },
      {
        duration: 1.5,
      }
    );
  };

  const elClass = "absolute text-3xl pointer-events-none";

  const addElements = (x: Number, y: Number) => {
    const container = containerRef.current;
    if (!container) return;
    const el = document.createElement("div");
    el.innerHTML += emoji;
    el.className = elClass;

    el.style.top = y + "px";
    el.style.left = x + "px";
    container.appendChild(el);
    animateEl(el);
    setTimeout(() => {
      container.removeChild(el);
    }, 1100);
  };

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const { top, left } = container.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    const xDiff = Math.abs(position.x - x);
    const yDiff = Math.abs(position.y - y);
    if (xDiff >= 20 || yDiff >= 20) {
      addElements(x, y);
    } else return;
    setPosition({ x, y });
  };

  return (
    <ElementLayout dependencies={dependencies} tabs={tabs} className="pt-0">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="w-full h-full overflow-hidden relative"
      >
        <div className="flex items-center gap-1 absolute bottom-0 left-0 p-4 z-10">
          {emojis.map((emo, index) => (
            <button
              onClick={() => {
                setEmoji(emo);
              }}
              className={`${
                emo === emoji
                  ? "border-zinc-400"
                  : "border-zinc-200/ hover:border-zinc-400"
              } size-10 border  transition-all duration-300 `}
              key={index}
            >
              {emo}
            </button>
          ))}
        </div>
      </div>
    </ElementLayout>
  );
};

export default Cursor001;
