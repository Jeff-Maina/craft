import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

type variantsProps = {
  initial: {};
  active: {};
  inactive: {};
};

interface Motionprops {
  children: JSX.Element;
  variants: variantsProps;
  isAnimationActive?: boolean;
  className?: React.ComponentProps<"div">["className"];
  isAnimatePresence: boolean;
}

const Motiondiv: FC<Motionprops> = ({
  children,
  variants,
  isAnimationActive,
  className,
  isAnimatePresence,
}) => {
  return isAnimatePresence ? (
    <AnimatePresence mode="wait">
      {isAnimationActive ? (
        <motion.div
          variants={variants}
          initial={variants.initial}
          animate={variants.active}
          exit={variants.inactive}
          className={className}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  ) : (
    <motion.div
      variants={variants}
      initial={variants.initial}
      animate={isAnimationActive ? variants.active : variants.inactive}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Motiondiv;

// hehe
