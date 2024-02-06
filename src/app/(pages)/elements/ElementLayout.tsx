"use client";

import { FC, useState } from "react";
import CodeModal from "@/components/codeblock/CodeModal";
import { Code } from "lucide-react";

// ts types;
type codeBlock = {
  javascript: string;
  typescript: string;
};
interface ButtonProps {
  children: JSX.Element;
  codeBlock: codeBlock;
  className?: string;
}

const ElementLayout: FC<ButtonProps> = ({ children, codeBlock, className }) => {
  const [isModalActive, setModalActive] = useState(false);
  // toggle modal;
  const toggleModal = () => setModalActive(!isModalActive);

  const modalProps = {
    isModalActive,
    codeBlock,
    setModalActive,
  };

  return (
    <article
      className={`w-full h-80 md:h-auto md:aspect-square  flex flex-col justify-between pt-4 ${className} font-satoshi-medium group/card bg-zinc-50  md:bg-zinc-100/80 border-zinc-200/60 md:border-zinc-200 hover:lg:border-zinc-300 transition-all duration-200 relative`}
    >
      <div className="p-4 w-full h-full flex items-center justify-center">
        {children}
      </div>
      <button
        onClick={toggleModal}
        className="absolute bottom-4 right-4 font-satoshi-medium grid place-items-center"
      >
        <Code className="h-[18px] w-[18px] md:stroke-zinc-300 group-hover/card:stroke-zinc-800 transition-all duration-150" />
      </button>

      <CodeModal modalProps={modalProps} />
    </article>
  );
};

export default ElementLayout;
