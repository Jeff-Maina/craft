"use client";

import { FC, useEffect, useRef } from "react";
import ElementLayout from "../../../ElementLayout";
import { codeblock } from "./codeblock";
import { gsap } from "gsap";

const Link013: FC = () => {
  const link = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(link.current, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const yTo = gsap.quickTo(link.current, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });

    link.current.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;

      const { top, height, left, width } = link.current.getBoundingClientRect();

      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x * 0.5);
      yTo(y * 0.5);
    });
    link.current.addEventListener("mouseleave", (e) => {
      xTo(0);
      yTo(0);
    });
  }, []);
  return (
    <ElementLayout codeBlock={codeblock}>
      <a ref={link} href="" className="lg:text-2xl">
        About us
      </a>
    </ElementLayout>
  );
};

export default Link013;
