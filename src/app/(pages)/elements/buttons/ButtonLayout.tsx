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
  className: string;
  date: string;
  index: number;
}

const ButtonCard: FC<ButtonProps> = ({
  children,
  codeBlock,
  className,
  date,
  index,
}) => {
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
      className={`w-full aspect-square  flex flex-col justify-between pt-4 ${className} font-satoshi-medium group/card relative`}
    >
      <div className="p-4 h-full w-full flex flex-col items-center justify-center">{children}</div>
      <div className="flex justify-end w-full items-center h-[15%] absolute bottom-0">
        <button
          onClick={toggleModal}
          className="font-satoshi-medium h-full aspect-square grid place-items-center"
        >
          <Code className="h-[18px] w-[18px] md:stroke-zinc-300 group-hover/card:stroke-zinc-800 transition-all duration-150" />
        </button>
      </div>
      <CodeModal modalProps={modalProps} />
    </article>
  );
};

export default ButtonCard;
