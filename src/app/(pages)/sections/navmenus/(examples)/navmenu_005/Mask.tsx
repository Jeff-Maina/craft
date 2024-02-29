import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { MaskProps } from "./Interfaces";
import { MaskVariants } from "./Variants";

const Mask: FC<MaskProps> = ({ isMenuActive, closeMenu }) => {
  return (
    <AnimatePresence mode="wait">
      {isMenuActive ? (
        <motion.section
          variants={MaskVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          onClick={closeMenu}
          className="fixed z-10 inset-0 h-screen w-screen bg-black/60"
        ></motion.section>
      ) : null}
    </AnimatePresence>
  );
};

export default Mask;
