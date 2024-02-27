import SyntaxHighlighter from "react-syntax-highlighter";
import { solarizedLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Copy, Check, X } from "lucide-react";
import { CodeboxProps } from "./Interfaces";
import { FC, useState } from "react";

const customStyle = {
  lineHeight: "1.8",
  fontSize: "0.8rem",
  borderRadius: "5px",
  backgroundColor: "#fff",
  // padding: "20px 10px",
};

const Codebox: FC<CodeboxProps> = ({ codeBlock, closeModal }) => {
  const { typescript, javascript } = codeBlock;

  // active codeblock state;
  const [activeLanguage, setActiveLanguage] = useState("JS");
  const setJs = () => setActiveLanguage("JS");
  const setTs = () => setActiveLanguage("TS");
  const isJavaScript = activeLanguage === "JS";
  const isTypeScript = activeLanguage === "TS";

  // copying the text to clipboard;
  const [hasCopied, setHasCopied] = useState(false);
  const buttonSvg = hasCopied ? (
    <Check size={16} className="stroke-green-500" />
  ) : (
    <Copy
      size={16}
      className="stroke-[#555] group-hover/icon:stroke-white transition-all duration-150"
    />
  );

  const currentLanguage = isJavaScript ? javascript : typescript;

  const copySnippet = () => {
    const copyText = isJavaScript ? javascript : typescript;
    setHasCopied(true);
    navigator.clipboard.writeText(copyText);
    setTimeout(() => setHasCopied(false), 2500);
  };

  // dragging logic

  return (
    <section className=" w-full h-full lg:px-4">
  
      <section className="w-full  max-h-3/4 rounded-[0.5rem] border">
        <div className="px-4 py-2 border-b flex items-center justify-between">
          <span className="text-sm">button.jsx</span>
          <button>{buttonSvg}</button>
        </div>
        <div className="w-full max-h-full h-auto p-2">
          <SyntaxHighlighter
            language="javascript"
            style={solarizedLight}
            showLineNumbers={true}
            customStyle={customStyle}
            className="codebox !bg-transparent"
          >
            {currentLanguage}
          </SyntaxHighlighter>
        </div>
      </section>
    </section>
  );
};

export default Codebox;
