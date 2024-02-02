import { FC, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Modal from "../Modal";
import { CopySvg, DoneSvg } from "../Svgs";

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
  const { typescript, javascript } = codeBlock;

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

  // copying the text to clipboard;
  const [hasCopied, setHasCopied] = useState(false);
  const buttonSvg = hasCopied ?  <DoneSvg className="h-[20px] w-[20px] stroke-green-500" /> : 
    <CopySvg className="h-[20px] w-[20px] fill-[#555] hover:!fill-white transition-all duration-150" />
  
  const currentLanguage = isJavaScript ? javascript : typescript;
  const copySnippet = () => {
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2500);
  };
  return (
    <Modal isModalActive={isModalActive} closeModal={closeModal}>
      <section
        onClick={(e) => {
          e.stopPropagation();
          openModal();
        }}
        className="w-[90%] h-3/4 bg-black max-w-2xl rounded"
      >
        <header className="w-full flex items-center  border-b border-[#2a2a2a] font-satoshi-medium text-[#555] justify-between pr-2">
          <div className="flex items-center text-sm md:text-base">
            <button
              className={`px-4 lg:px-6 py-2 hover:bg-[#222] hover:text-[#888] transition-all duration-150 ${
                isJavaScript && activeClass
              }`}
              onClick={setJs}
            >
              index.jsx
            </button>
            <button
              onClick={setTs}
              className={`px-4 lg:px-6 py-2 hover:bg-[#222] hover:text-[#888] transition-all duration-150 ${
                isTypeScript && activeClass
              }`}
            >
              index.tsx
            </button>
          </div>
          <button
            onClick={copySnippet}
            className="h-full aspect-square grid place-items-center p-2"
          >
            {buttonSvg}
          </button>
        </header>
        <div>
          <SyntaxHighlighter
            showLineNumbers
            language="javascript"
            style={nord}
            className="codeHighlighter"
          >
            {currentLanguage}
          </SyntaxHighlighter>
        </div>
      </section>
    </Modal>
  );
};

export default CodeModal;
