import { AnimatePresence } from "framer-motion";
import { FC } from "react";

interface ModalProps {
  children: JSX.Element;
  isModalActive: boolean;
  setModalActive: () => void;
}


const Modal: FC<ModalProps> = ({ children, isModalActive, setModalActive }) => {
  return (
    <AnimatePresence mode="wait">
      {isModalActive && <section>{children}</section>}
    </AnimatePresence>
  );
};

export default Modal;
