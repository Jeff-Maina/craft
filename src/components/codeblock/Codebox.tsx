import SyntaxHighlighter from "react-syntax-highlighter";
import { solarizedLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Copy, Check, X } from "lucide-react";
import { CodeboxProps } from "./Interfaces";
import { FC, useState } from "react";

const customStyle = {
  lineHeight: "1.8",
  // fontSize: "0.8rem",
  borderRadius: "5px",
  backgroundColor: "#fff",
  // padding: "20px 10px",
};

const Codebox: FC<CodeboxProps> = ({ codeBlock, closeModal }) => {
  const { typescript, javascript } = codeBlock;

  // active codeblock state;
  const [activeLanguage, setActiveLanguage] = useState("JS");
  const setLanguage = (language: string) => setActiveLanguage(language);

  const isJavaScript = activeLanguage === "JS";
  const isTypeScript = activeLanguage === "TS";

  // copying the text to clipboard;
  const [hasCopied, setHasCopied] = useState(false);
  const buttonSvg = hasCopied ? (
    <Check className="h-[14px] md:h-[16px] stroke-green-500" />
  ) : (
    <Copy className="h-[14px] md:h-[16px] stroke-[#555] group-hover/icon:stroke-white transition-all duration-150" />
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
    <section className=" w-full  lg:px-4 flex flex-col gap-6 md:gap-4">
      <div className="flex items-center gap-2 text-sm">
        <button
          className={`${
            isJavaScript ? "text-black" : "text-zinc-400 hover:text-zinc-600"
          } transition-all duration-200`}
          onClick={() => setLanguage("JS")}
        >
          javascript
        </button>
        <div>/</div>
        <button
          className={`${
            isTypeScript ? "text-black" : "text-zinc-400 hover:text-zinc-600"
          } transition-all duration-200`}
          onClick={() => setLanguage("TS")}
        >
          typescript
        </button>
      </div>
      <section className="w-full h-auto rounded-[0.5rem] border">
        <div className="px-2 md:px-4 py-2 border-b flex items-center justify-between">
          <span className="text-xs text-zinc-600 md:text-sm">
            component.{isTypeScript ? "tsx" : "jsx"}
          </span>
          <button>{buttonSvg}</button>
        </div>
        <div className="w-full max-h-full h-auto p-2">
          <SyntaxHighlighter
            language="javascript"
            style={solarizedLight}
            showLineNumbers={true}
            customStyle={customStyle}
            className="codebox !bg-transparent h-full max-h-[50vh] text-[0.7rem] md:text-[0.8rem]"
          >
            {currentLanguage}
          </SyntaxHighlighter>
        </div>
      </section>
    </section>
  );
};

export default Codebox;
