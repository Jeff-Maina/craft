import { opacityVariants } from "@/lib/animations";
import { AnimatePresence, motion } from "framer-motion";
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
      variants={opacityVariants}
      className="fixed top-0 left-0 bg-[#00000061] h-screen w-screen backdrop-blur-sm flex flex-col items-center justify-center z-50"
    >
      <section
        onClick={() => {
          closeModal();
          console.log(isModalActive);
        }}
        className="h-full w-full grid place-items-center"
      >
        {children}
      </section>
    </Motiondiv>
  );
};

export default Modal;

// *