"use client";

import { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";

import ElementLayout from "../../../ElementLayout";
import { tabs } from "./codeblock";

const dependencies = [
  {
    label: "GSAP",
    command: "npm install gsap",
  },
];

const Link013: FC = () => {
  const link = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(link.current, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const yTo = gsap.quickTo(link.current, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });

    const Link = link.current;

    if (!Link) return;

    Link.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;

      const { top, height, left, width } = Link.getBoundingClientRect();

      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x * 0.5);
      yTo(y * 0.5);
    });
    Link.addEventListener("mouseleave", (e) => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return (
    <ElementLayout dependencies={dependencies} tabs={tabs}>
      <a ref={link} href="" className="lg:text-2xl">
        About us
      </a>
    </ElementLayout>
  );
};

export default Link013;
