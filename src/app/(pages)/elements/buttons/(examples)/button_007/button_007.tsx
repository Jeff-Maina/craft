import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState, FC } from "react";

import { ArrowRight } from "lucide-react";
import ElementLayout from "../../../ElementLayout";
import { codeblock } from "./codeblock";

const motionVariants: Variants = {
  initial: {
    x: "-10%",
  },
  active: {
    x: "100%",
    transition: {
      x: { duration: 0.4, easing: [0.29, 0.44, 0, 1.06] },
    },
  },
  inactive: {
    x: "200%",
    transition: {
      x: { duration: 0.4, easing: [0.29, 0.44, 0, 1.06] },
    },
  },
};

const Button007: FC = () => {
  const [isLinkHovered, setLinkHovered] = useState(false);
  const hoverLink: () => void = () => setLinkHovered(true);
  const unhoverLink: () => void = () => setLinkHovered(false);
  return (
    <ElementLayout codeBlock={codeblock}>
      <button
        onMouseEnter={hoverLink}
        onMouseLeave={unhoverLink}
        className="group/button relative overflow-hidden isolate rounded-full"
      >
        <div className="flex items-center gap-5 p-1 md:p-2 rounded-full pl-5 md:pl-5 lg:pl-7 pointer-events-none">
          <span className="lg:text-xl group-hover/button:text-white transition-all duration-300">
            Discover our services
          </span>
          <div className="size-10 lg:size-16 rounded-full border border-black bg-white grid place-items-center">
            <div className="relative overflow-hidden">
              <ArrowRight className="h-[18px] w-[18px] md:h-[24px] md:w-[24px] group-hover/button:translate-x-full transition-all duration-500" />
              <ArrowRight className="absolute inset-0 h-[18px] w-[18px] md:h-[24px] md:w-[24px] -translate-x-full group-hover/button:translate-x-0 transition-all duration-500" />
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isLinkHovered ? (
            <motion.div
              variants={motionVariants}
              initial="initial"
              animate="active"
              exit="inactive"
              className="absolute h-full w-full top-0 right-full rounded-full bg-black -z-[10]"
            ></motion.div>
          ) : null}
        </AnimatePresence>
      </button>
    </ElementLayout>
  );
};

export default Button007;
