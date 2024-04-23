"use client";

// 3rd party libraries
import { FC, useState } from "react";
import { Code, Link } from "lucide-react";

// ***
import CodeModal from "@/components/codeblock/CodeModal";
import { ButtonProps } from "./Interfaces";

const ElementLayout: FC<ButtonProps> = ({
  children,
  tabs,
  dependencies,
  className,
  isSection,
  link,
}) => {
  const [isModalActive, setModalActive] = useState(false);
  const toggleModal = () => setModalActive(!isModalActive);
  const closeModal = () => setModalActive(false);

  const modalProps = {
    isModalActive,
    closeModal,
    tabs,
    dependencies,
  };

  const el = isSection ? (
    <a
    target="_blank"
      href={`${link}`}
      className="font-satoshi-medium h-full aspect-square grid place-items-center"
    >
      <Link className="h-[18px] stroke-zinc-500 w-[18px] md:stroke-zinc-300 group-hover/card:stroke-zinc-800 transition-all duration-150" />
    </a>
  ) : (
    <button
      onClick={toggleModal}
      className="font-satoshi-medium h-full aspect-square grid place-items-center"
    >
      <Code className="h-[18px] stroke-zinc-500 w-[18px] md:stroke-zinc-300 group-hover/card:stroke-zinc-800 transition-all duration-150" />
    </button>
  );

  return (
    <article
      className={`w-full h-full min-h-80 md:h-auto max-h-[34rem] md:aspect-square  flex flex-col justify-between pt-4 ${className} font-satoshi-medium group/card relative border border-zinc-200/60 md:border-zinc-200 hover:lg:border-zinc-300 transition-all duration-200`}
    >
      <div className="w-full h-full flex items-center justify-center">
        {children}
      </div>
      <div className="flex justify-end max-w-fit items-center h-[15%] absolute bottom-0 right-0 z-[15]">
        {el}
      </div>
      <CodeModal modalProps={modalProps} />
    </article>
  );
};

export default ElementLayout;
