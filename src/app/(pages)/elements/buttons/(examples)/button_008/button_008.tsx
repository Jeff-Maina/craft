"use client";

import { useEffect, useRef } from "react";
import ElementLayout from "../../../ElementLayout";
import { codeblock } from "./codeblock";
import { gsap } from "gsap";

const Button008 = () => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(buttonRef.current, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const yTo = gsap.quickTo(buttonRef.current, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });

    const button = buttonRef.current;

    if (!button) return;

    button.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { top, left, height, width } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x * 0.5);
      yTo(y * 0.7);
    });

    button.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return (
    <ElementLayout codeBlock={codeblock}>
      <button className="relative isolate">
        <div
          ref={buttonRef}
          className="w-36 lg:w-44 h-14 rounded-full border border-[#2a2a2a] bg-white grid place-items-center font-graphik-semibold lg:text-xl text-[#2a2a2a]"
        >
          Join us
        </div>
        <div className="w-36 lg:w-44 h-14 rounded-full bg-[#2a2a2a] absolute inset-0 -z-10 translate-x-4 translate-y-4"></div>
      </button>
    </ElementLayout>
  );
};

export default Button008;
