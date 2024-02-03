import { FC, useState } from "react";
import CodeModal from "@/components/codeblock/CodeModal";

// ts types;
type codeBlock = {
  javascript: string;
  typescript: string;
};
interface ButtonProps {
  children: JSX.Element;
  codeBlock: codeBlock;
  className: string;
}

const ButtonCard: FC<ButtonProps> = ({ children, codeBlock, className }) => {
  const [isModalActive, setModalActive] = useState(false);
  // toggle modal;
  const toggleModal = () => setModalActive(!isModalActive);

  const modalProps = {
    isModalActive,
    codeBlock,
    setModalActive,
  };

  return (
    <article className={`w-full aspect-square  bg-zinc-50  flex flex-col justify-between pt-4 pl-4 ${className}`}>
      <div>{children}</div>
      <div className="flex justify-end p-4">
        <button onClick={toggleModal} className="font-satoshi-medium">
          code
        </button>
      </div>
      <CodeModal modalProps={modalProps} />
    </article>
  );
};

export default ButtonCard;
