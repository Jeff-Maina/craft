import { opacityVariants } from "@/lib/animations";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

interface ModalProps {
  children: JSX.Element;
  isModalActive: boolean;
  closeModal: () => void;
}

const Modal: FC<ModalProps> = ({ children, isModalActive, closeModal }) => {
  return (
    <AnimatePresence mode="wait">
      {isModalActive && (
        <motion.section
          variants={opacityVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="fixed top-0 left-0 bg-[#00000061] h-screen w-screen backdrop-blur-sm flex flex-col items-center justify-center z-50"
          onClick={() => {
            closeModal();
            console.log(isModalActive);
          }}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Modal;
