//component imports;
import Modal from "../Modal";
import { CopySvg, DoneSvg } from "../Svgs";

// 3rd party libraries;
import { FC, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import { ModalProps } from "./Interfaces";

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
  const activeClass = "bg-[#222] hover:!bg-[#222] text-white hover:!text-white";

  // copying the text to clipboard;
  const [hasCopied, setHasCopied] = useState(false);
  const buttonSvg = hasCopied ? (
    <DoneSvg className="h-[20px] w-[20px] stroke-green-500" />
  ) : (
    <CopySvg className="h-[20px] w-[20px] fill-[#555] group-hover/icon:fill-white transition-all duration-150" />
  );

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
        className="w-[90%] h-auto transition-all duration-200 max-h-3/4  bg-black max-w-3xl overflow-hidden"
      >
        <header className="w-full flex items-center  border-b border-[#2a2a2a] font-satoshi-medium text-[#555] justify-between">
          <div className="flex items-center text-sm lg:text-base h-8 md:h-12 border-r border-[#2a2a2a]">
            <button
              className={`px-6 h-full hover:bg-[#111] hover:text-[#888] transition-all duration-150 ${
                isJavaScript && activeClass
              }`}
              onClick={setJs}
            >
              index.jsx
            </button>
            <button
              onClick={setTs}
              className={`px-6 h-full hover:bg-[#222] hover:text-[#888] transition-all duration-150 ${
                isTypeScript && activeClass
              }`}
            >
              index.tsx
            </button>
          </div>
          <button
            onClick={copySnippet}
            className="h-8 md:h-12 aspect-square grid place-items-center border-l border-[#2a2a2a] hover:bg-[#222] group/icon"
          >
            {buttonSvg}
          </button>
        </header>
        <div className="p-3 lg:p-4 h-full !pb-0 md:pb-10">
          <SyntaxHighlighter
            wrapLines={true} 
            language="javascript" 
            style={nord}
            className="codeHighlighter !text-xs md:!text-sm lg:!text-base h-full selection:bg-yellow-400 selection:text-black"
          >
            {currentLanguage}
          </SyntaxHighlighter>
        </div>
      </section>
    </Modal>
  );
};

export default CodeModal;

// *