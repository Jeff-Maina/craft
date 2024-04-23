import { linkCompProps } from "../../Interfaces";

const javascript: string = `import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Link = () => {
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
   <a ref={link} href="" className="lg:text-2xl"> About us </a>
  )
}

export default Link
`;

const typescript: string = `import { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Link:FC = () => {
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
   <a ref={link} href="" className="lg:text-2xl"> About us </a>
  )
}

export default Link
`;

const link: linkCompProps = {
  javascript,
  typescript,
  label: "link",
  dateCreated: "Tuesday, 13 February 2024",
};

export const tabs = [link];
