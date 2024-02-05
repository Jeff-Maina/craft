import { motion } from "framer-motion";
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
}

const Motiondiv: FC<Motionprops> = ({
  children,
  variants,
  isAnimationActive,
  className,
}) => {
  return (
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
