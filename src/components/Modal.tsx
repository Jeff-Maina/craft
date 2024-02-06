import { MaskVariants, ModalVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { FC } from "react";
import Motiondiv from "./Motiondiv";

interface ModalProps {
  children: JSX.Element;
  isModalActive: boolean;
  closeModal: () => void;
}

const Modal: FC<ModalProps> = ({ children, isModalActive, closeModal }) => {
  return (
    <Motiondiv
      isAnimatePresence={true}
      isAnimationActive={isModalActive}
      variants={MaskVariants}
      className="fixed inset-0 bg-[#00000061] h-[100dvb] overflow-hidden w-full backdrop-blur-xl flex flex-col items-center justify-center z-50"
    >
      <motion.section
        variants={ModalVariants}
        initial="initial"
        animate="active"
        exit="inactive"
        onClick={() => {
          closeModal();
          console.log(isModalActive);
        }}
        className="h-full w-full flex items-center justify-center"
      >
        {children}
      </motion.section>
    </Motiondiv>
  );
};

export default Modal;

// *
