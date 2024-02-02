import { FC, useState } from "react";
import Modal from "../Modal";

type codeBlock = {
  javascript: string;
  typescript: string;
};

type modalProps = {
  isModalActive: boolean;
  codeBlock: codeBlock;
  setModalActive: (value: boolean) => void;
};

interface ModalProps {
  modalProps: modalProps;
}

const CodeModal: FC<ModalProps> = ({ modalProps }) => {
  const { setModalActive, isModalActive, codeBlock } = modalProps;

  // toggle modal functions;
  const closeModal = () => setModalActive(false);
  const openModal = () => setModalActive(true);

  // active codeblock state;
  const [activeLanguage, setActiveLanguage] = useState("JS");
  const setJs = () => setActiveLanguage("JS");
  const setTs = () => setActiveLanguage("TS");
  const isJavaScript = activeLanguage === "JS";
  const isTypeScript = activeLanguage === "TS";
  const activeClass = "bg-[#222] text-white hover:!text-white";

  return (
    <Modal isModalActive={isModalActive} closeModal={closeModal}>
      <section
        onClick={(e) => {
          e.stopPropagation();
          openModal();
        }}
        className="w-[90%] h-3/4 bg-black max-w-2xl rounded"
      >
        <header className="w-full flex items-center  border-b border-[#2a2a2a] font-satoshi-medium text-[#555] justify-between">
          <div className="flex items-center">
            <button
              className={`px-3 lg:px-6 py-2 hover:bg-[#222] hover:text-[#888] transition-all duration-150 ${
                isJavaScript && activeClass
              }`}
              onClick={setJs}
            >
              index.jsx
            </button>
            <button
              onClick={setTs}
              className={`px-3 lg:px-6 py-2 hover:bg-[#222] hover:text-[#888] transition-all duration-150 ${
                isTypeScript && activeClass
              }`}
            >
              index.tsx
            </button>
          </div>
          <button></button>
        </header>
      </section>
    </Modal>
  );
};

export default CodeModal;
