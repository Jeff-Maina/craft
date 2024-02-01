import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

interface ModalProps {
  children: JSX.Element;
  isModalActive: boolean;
  closeModal: () => void;
}

const ModalVariants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.3,
      },
    },
  },
  inactive: {
    opacity: 0,
    transition: {
      opacity: {
        duration: 0.3,
      },
    },
  },
};

const Modal: FC<ModalProps> = ({ children, isModalActive, closeModal }) => {
  return (
    <AnimatePresence mode="wait">
      {isModalActive && (
        <motion.section
          variants={ModalVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="fixed top-0 left-0 bg-[#00000061] h-screen w-screen backdrop-blur-sm"
          onClick={closeModal}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Modal;
