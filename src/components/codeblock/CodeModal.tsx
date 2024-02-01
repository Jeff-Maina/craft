import { FC } from "react";
import Modal from "../Modal";

type codeBlock = {
  javascript: string;
  typescript: string;
}

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
  return (
    <Modal isModalActive={isModalActive} closeModal={closeModal}>
      <section className=""></section>
    </Modal>
  );
};

export default CodeModal;
