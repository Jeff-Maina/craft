import { FC } from "react";

interface ModalProps {
  children: JSX.Element;
  isModalActive: boolean;
  setModalActive: () => void;
}

const Modal: FC<ModalProps> = ({ children, isModalActive, setModalActive }) => {
  return <section>{children}</section>;
};

export default Modal;
