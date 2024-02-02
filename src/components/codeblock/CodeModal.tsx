import { FC } from "react";
import Modal from "../Modal";

type codeBlock = {
  javascript: string;
  typescript: string;
};

interface ModalProps {
  isModalActive: boolean;
  codeBlock: codeBlock;
  setModalActive: (value: boolean) => void;
}

const CodeModal: FC<ModalProps> = ({
  isModalActive,
  codeBlock,
  setModalActive,
}) => {
  const closeModal = () => setModalActive(false);
  const openModal = () => setModalActive(true);
  return (
    <Modal isModalActive={isModalActive} closeModal={closeModal}>
      <section
        onClick={(e) => {
          e.stopPropagation();
          openModal();
        }}
        className="w-[90%] h-3/4 bg-black"
      ></section>
    </Modal>
  );
};

export default CodeModal;
