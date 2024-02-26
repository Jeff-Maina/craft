// //component imports;
// import Modal from "../Modal";

// // 3rd party libraries;
// import { FC, useState } from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";

// import { ModalProps } from "./Interfaces";
// import { Copy, Check } from "lucide-react";

// const CodeModal: FC<ModalProps> = ({ modalProps }) => {
//   const { setModalActive, isModalActive, codeBlock } = modalProps;
//   const { typescript, javascript } = codeBlock;

//   // toggle modal functions;
//   const closeModal = () => setModalActive(false);
//   const openModal = () => setModalActive(true);

//   // active codeblock state;
//   const [activeLanguage, setActiveLanguage] = useState("JS");
//   const setJs = () => setActiveLanguage("JS");
//   const setTs = () => setActiveLanguage("TS");
//   const isJavaScript = activeLanguage === "JS";
//   const isTypeScript = activeLanguage === "TS";
//   const activeClass = "bg-[#111] hover:!bg-[#111] text-white hover:!text-white";

//   // copying the text to clipboard;
//   const [hasCopied, setHasCopied] = useState(false);
//   const buttonSvg = hasCopied ? (
//     <Check className="h-[18px] md:h-[20px] w-[18px] md:w-[20px] stroke-green-500" />
//   ) : (
//     <Copy className="md:h-[20px] md:w-[20px] h-[18px] w-[18px] stroke-[#555] group-hover/icon:stroke-white transition-all duration-150" />
//   );

//   const currentLanguage = isJavaScript ? javascript : typescript;

//   const copySnippet = () => {
//     const copyText = isJavaScript ? javascript : typescript;

//     setHasCopied(true);

//     // Copy the text inside the text field
//     navigator.clipboard.writeText(copyText);
//     setTimeout(() => setHasCopied(false), 2500);
//   };

//   return (
//     <Modal isModalActive={isModalActive} closeModal={closeModal}>
//       <section
//         onClick={(e) => {
//           e.stopPropagation();
//           openModal();
//         }}
//         className="w-[90%] transition-all duration-200 bg-black max-w-3xl shadow-2xl"
//       >
//         <header className="w-full flex items-center  border-b border-[#1a1a1a] font-satoshi-medium text-[#555] justify-between">
//           <div className="flex items-center text-sm lg:text-base h-12 border-r border-[#1a1a1a]">
//             <button
//               className={`px-6 h-full hover:bg-[#111] hover:text-[#888] transition-all duration-150 ${
//                 isJavaScript && activeClass
//               }`}
//               onClick={setJs}
//             >
//               index.jsx
//             </button>
//             <button
//               onClick={setTs}
//               className={`px-6 h-full hover:bg-[#222] hover:text-[#888] transition-all duration-150 ${
//                 isTypeScript && activeClass
//               }`}
//             >
//               index.tsx
//             </button>
//           </div>
//           <button
//             onClick={copySnippet}
//             className="h-12 aspect-square grid place-items-center border-l border-[#1a1a1a] hover:bg-[#222] group/icon"
//           >
//             {buttonSvg}
//           </button>
//         </header>
//         <div className="pr-2 pb-2 pt-2">
//           <div className="p-3 lg:p-4 h-full max-w-full !pb-0 md:pb-10 max-h-[80vh] !overflow-x-scroll code_box">
//             <SyntaxHighlighter
//               wrapLines={true}
//               language="javascript"
//               style={nord}
//               // useInlineStyles={false}

//               className="codeHighlighter !text-sm md:!text-base h-full selection:bg-yellow-400 selection:text-black "
//             >
//               {currentLanguage}
//             </SyntaxHighlighter>
//           </div>
//         </div>
//       </section>
//     </Modal>
//   );
// };

// export default CodeModal;

// // *

// 3rd party libraries;
import { FC, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { AnimatePresence, motion } from "framer-motion";

import { ModalProps } from "./Interfaces";
import { Copy, Check } from "lucide-react";

const MaskVariants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.4,
      },
    },
  },
  inactive: {
    opacity: 0,
  },
};

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
    <AnimatePresence mode="wait">
      {isModalActive ? (
        <section className="fixed inset-0 h-screen w-full  z-[999] flex items-center">
          <motion.section
            onClick={closeModal}
            variants={MaskVariants}
            initial="initial"
            animate="active"
            exit="inac"
            className="absolute top-0 left-0 w-full h-screen bg-[#00000041]"
          ></motion.section>
          <motion.section
            initial={{
              x: "100%",
            }}
            animate={{
              x: isModalActive ? "0%" : "100%",
            }}
            transition={{
              x: {
                duration: 0.3,
              },
            }}
            onClick={(e) => {
              e.stopPropagation();
              openModal();
            }}
            className="w-full max-w-xl rounded-[0.5rem] transition-all duration-200 bg-white h-[95%] shadow-xl absolute right-6 z-[50]"
          ></motion.section>
        </section>
      ) : null}
    </AnimatePresence>
  );
};

export default CodeModal;

// *
