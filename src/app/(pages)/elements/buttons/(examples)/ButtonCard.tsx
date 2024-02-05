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
      className={`w-full aspect-square  flex flex-col justify-between pt-4 ${className} font-satoshi-medium`}
    >
      <div className="p-4">{children}</div>
      <div className="flex justify-between w-full items-center border-t">
        <div className="p-4">
          <p className="text-zinc-600 text-sm">
            Untitled 0{index} | {date}
          </p>
        </div>
        <button
          onClick={toggleModal}
          className="font-satoshi-medium size-16 border-l border-zinc-200/60 lg:border-zinc-200 grid place-items-center"
        >
          <Code className="h-[18px] w-[18px]" />
        </button>
      </div>
      <CodeModal modalProps={modalProps} />
    </article>
  );
};

export default ButtonCard;
