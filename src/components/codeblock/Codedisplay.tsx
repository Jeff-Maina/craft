import SyntaxHighlighter from "react-syntax-highlighter";
import { solarizedLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Copy, Check, X } from "lucide-react";
import { CodeboxProps, tabProps } from "./Interfaces";
import { FC, useEffect, useState } from "react";

const customStyle = {
  lineHeight: "1.8",
  borderRadius: "5px",
  backgroundColor: "#fff",
};

type tabType = {
  tab: tabProps;
  tabLabels: Array<string>;
  changeTab: (index: number) => void;
  activeTabIndex: number;
  isJavaScript: boolean;
  updateDate: (date: string) => void;
};

const Tab: FC<tabType> = ({
  tab,
  tabLabels,
  changeTab,
  activeTabIndex,
  isJavaScript,
  updateDate,
}) => {
  const { javascript, typescript, label, dateCreated } = tab;

  const currentLanguage = isJavaScript ? javascript : typescript;

  useEffect(() => {
    updateDate(dateCreated);
  }, []);
  // copying the text to clipboard;
  const [hasCopied, setHasCopied] = useState(false);
  const buttonSvg = hasCopied ? (
    <Check className="h-[14px] md:h-[16px] stroke-green-500" />
  ) : (
    <Copy className="h-[14px] md:h-[16px] stroke-[#555] group-hover/icon:stroke-white transition-all duration-150" />
  );

  const copySnippet = () => {
    const copyText = isJavaScript ? javascript : typescript;
    setHasCopied(true);
    navigator.clipboard.writeText(copyText);
    setTimeout(() => setHasCopied(false), 2500);
  };

  const LabelsList = tabLabels.map((label, index, array) => {
    const isTabActive = index === activeTabIndex;
    return (
      <button
        onClick={() => changeTab(index)}
        className="text-xs text-zinc-600 md:text-sm py-2 px-4 relative max-w-fit"
      >
        {label}.{isJavaScript ? "jsx" : "tsx"}
        {isTabActive && array.length > 1 && (
          <div className="h-[1px] absolute bottom-0 w-full left-0 max-w-full bg-zinc-400"></div>
        )}
      </button>
    );
  });

  return (
    <section className="w-full h-auto rounded-[0.5rem] border">
      <div className="border-b flex items-center justify-between pr-2">
        <div className="h-full max-w-[19rem] md:max-w-lg flex items-center divide-x border-r overflow-x-scroll no_scrollbar">
          {LabelsList}
        </div>

        <button onClick={copySnippet}>{buttonSvg}</button>
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
  );
};

const Codebox: FC<CodeboxProps> = ({ tabs, updateDate }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabLabels = tabs.map((tab) => tab.label);
  const changeTab = (index: number) => setActiveTabIndex(index);

  // active codeblock state;
  const [activeLanguage, setActiveLanguage] = useState("JS");
  const setLanguage = (language: string) => setActiveLanguage(language);

  const isJavaScript = activeLanguage === "JS";
  const isTypeScript = activeLanguage === "TS";

  return (
    <section className=" w-full lg:px-4 flex flex-col gap-6 md:gap-4">
      <div className="flex items-center gap-2 md:gap-4 text-sm">
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
      <section className=" w-full flex flex-col gap-6 md:gap-4">
        {tabs.map((tab, index) => {
          const isTabActive = activeTabIndex === index;
          return (
            isTabActive && (
              <Tab
                tab={tab}
                key={index}
                tabLabels={tabLabels}
                changeTab={changeTab}
                activeTabIndex={activeTabIndex}
                isJavaScript={isJavaScript}
                updateDate={updateDate}
              />
            )
          );
        })}
      </section>
    </section>
  );
};

export default Codebox;
