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
      className="fixed inset-0 bg-[#00000038] h-[100dvb] overflow-hidden w-full flex flex-col items-center justify-center z-50"
    >
      {/* <motion.section
        variants={ModalVariants}
        initial="initial"
        animate="active"
        exit="inactive"
        onClick={() => {
          closeModal();
        }}
        className="h-full w-full flex items-center justify-center"
      > */}
      <div
        onClick={() => {
          closeModal();
        }}
        className="w-full h-full relative flex items-center py-5"
      >
        {children}
      </div>
      {/* </motion.section> */}
    </Motiondiv>
  );
};

export default Modal;

// *
