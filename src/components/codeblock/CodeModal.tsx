//component imports;
import Modal from "../Modal";

// 3rd party libraries;
import { FC, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import { ModalProps } from "./Interfaces";
import { Copy, Check } from "lucide-react";

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
  const activeClass = "bg-[#111] hover:!bg-[#111] text-white hover:!text-white";

  // copying the text to clipboard;
  const [hasCopied, setHasCopied] = useState(false);
  const buttonSvg = hasCopied ? (
    <Check className="h-[18px] md:h-[20px] w-[18px] md:w-[20px] stroke-green-500" />
  ) : (
    <Copy className="md:h-[20px] md:w-[20px] h-[18px] w-[18px] stroke-[#555] group-hover/icon:stroke-white transition-all duration-150" />
  );
  

  const currentLanguage = isJavaScript ? javascript : typescript;

  const copySnippet = () => {
    const copyText = isJavaScript ? javascript : typescript;

    setHasCopied(true);

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
    setTimeout(() => setHasCopied(false), 2500);
  };

  return (
    <Modal isModalActive={isModalActive} closeModal={closeModal}>
      <section
        onClick={(e) => {
          e.stopPropagation();
          openModal();
        }}
        className="w-[90%] transition-all duration-200 max-h-3/4  bg-black max-w-3xl overflow-hidden shadow-2xl"
      >
        <header className="w-full flex items-center  border-b border-[#1a1a1a] font-satoshi-medium text-[#555] justify-between">
          <div className="flex items-center text-sm lg:text-base h-12 border-r border-[#1a1a1a]">
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
            className="h-12 aspect-square grid place-items-center border-l border-[#1a1a1a] hover:bg-[#222] group/icon"
          >
            {buttonSvg}
          </button>
        </header>
        <div className="p-3 lg:p-4 h-full !pb-5 md:pb-10">
          <SyntaxHighlighter
            wrapLines={true}
            language="javascript"
            style={nord}
            // useInlineStyles={false}

            className="codeHighlighter !text-base h-full selection:bg-yellow-400 selection:text-black"
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
