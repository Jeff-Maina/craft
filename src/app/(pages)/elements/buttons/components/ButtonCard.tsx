import { FC, useState } from "react";
import CodeModal from "@/components/codeblock/CodeModal";

interface ButtonProps {
  children: JSX.Element;
  codeBlock: {
    typescript: string;
    javascript: string;
  };
}

const ButtonCard: FC<ButtonProps> = ({ children, codeBlock }) => {
  const [isModalActive, setModalActive] = useState(false);
  const { javascript, typescript } = codeBlock;

  const toggleModal = () => setModalActive(!isModalActive);
  return (
    <article className="w-full aspect-square border bg-zinc-100 rounded-xl flex flex-col justify-between">
      <div>{children}</div>
      <div className="flex justify-end p-4">
        <button onClick={toggleModal} className="font-satoshi-medium">
          code
        </button>
      </div>
      <CodeModal
        isModalActive={isModalActive}
        codeBlock={{
          javascript,
          typescript,
        }}
        setModalActive={setModalActive}
      />
    </article>
  );
};

export default ButtonCard;
