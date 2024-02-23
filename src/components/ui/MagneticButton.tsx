import { gsap } from "gsap";
import React, { FC, useRef, ReactNode, useEffect } from "react";

interface MagnetProps {
  children: ReactNode;
}

const Magnetic: FC<MagnetProps> = ({ children }) => {
  const magnetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const magnet = magnetRef.current;

    if (!magnet) return;

    const xTo = gsap.quickTo(magnetRef.current, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const yTo = gsap.quickTo(magnetRef.current, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { top, left, height, width } = magnet.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.1);
      yTo(y * 0);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    magnet.addEventListener("mousemove", handleMouseMove);
    magnet.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      magnet.removeEventListener("mousemove", handleMouseMove);
      magnet.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return React.cloneElement(children as React.ReactElement, { ref: magnetRef });
};

export default Magnetic;
