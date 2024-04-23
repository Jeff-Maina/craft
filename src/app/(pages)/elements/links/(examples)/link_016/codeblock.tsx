import { linkCompProps } from "../../Interfaces";

const javascript: string = `import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Link = () => {
  const bubbleRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const bubble = bubbleRef.current;

    if (!bubble) return;

    const xTo = gsap.quickTo(bubble, "x", {
      duration: 0.6,
      ease: "power3",
    });
    const yTo = gsap.quickTo(bubble, "y", {
      duration: 0.6,
      ease: "power3",
    });

    const Link = parentRef.current;

    if (!Link) return;

    Link.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;

      if (!Link) return;

      const { top, left, width } = Link.getBoundingClientRect();

      const x = clientX - (left + width);
      const y = clientY - top;

      xTo(x * 0.3);
      yTo(y);
    });

    Link.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return (
     <div
        ref={parentRef}
        className="font-inter text-3xl md:text-5xl lg:text-6xl tracking-tighter font-medium relative cursor-pointer group/link py-2"
      >
        <p className="text-green-800">New Machines</p>
        <div
          ref={bubbleRef}
          className="grid place-items-center absolute top-0 md:-top-2 -right-4 pointer-events-none"
        >
          <div className="size-2 md:size-4 group-hover/link:size-1 group-hover/link:md:size-3 rounded-full bg-green-900 relative z-10 transition-all duration-300"></div>
          <div className="size-4 md:size-8 rounded-full absolute bg-green-900/80 animate-ping-slow"></div>
        </div>
    </div>
  );
};

export default Link;`;

const typescript: string = `import { useRef, useEffect, FC } from "react";
import { gsap } from "gsap";

const Link:FC = () => {
  const bubbleRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bubble = bubbleRef.current;

    if (!bubble) return;

    const xTo = gsap.quickTo(bubble, "x", {
      duration: 0.6,
      ease: "power3",
    });
    const yTo = gsap.quickTo(bubble, "y", {
      duration: 0.6,
      ease: "power3",
    });

    const Link = parentRef.current;

    if (!Link) return;

    Link.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;

      if (!Link) return;

      const { top, left, width } = Link.getBoundingClientRect();

      const x = clientX - (left + width);
      const y = clientY - top;

      xTo(x * 0.3);
      yTo(y);
    });

    Link.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return (
     <div
        ref={parentRef}
        className="font-inter text-3xl md:text-5xl lg:text-6xl tracking-tighter font-medium relative cursor-pointer group/link py-2"
      >
        <p className="text-green-800">New Machines</p>
        <div
          ref={bubbleRef}
          className="grid place-items-center absolute top-0 md:-top-2 -right-4 pointer-events-none"
        >
          <div className="size-2 md:size-4 group-hover/link:size-1 group-hover/link:md:size-3 rounded-full bg-green-900 relative z-10 transition-all duration-300"></div>
          <div className="size-4 md:size-8 rounded-full absolute bg-green-900/80 animate-ping-slow"></div>
        </div>
    </div>
  );
};

export default Link;`;

const link: linkCompProps = {
  javascript,
  typescript,
  label: "component",
  dateCreated: "Saturday, 2 March 2024",
};

export const tabs = [link];
