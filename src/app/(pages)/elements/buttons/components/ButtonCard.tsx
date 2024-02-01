import { FC } from "react";

interface ButtonProps {
  children: JSX.Element;
  codeBlock: {
    typeScript: string;
    javascript: string;
  };
}

const ButtonCard: FC<ButtonProps> = ({ children, codeBlock }) => {
  return (
    <article className="w-full aspect-square border bg-zinc-100 rounded-xl flex flex-col justify-between">
      <div>{children}</div>
      <div className="flex justify-end p-4">
        <button className="font-satoshi-medium">code</button>
      </div>
    </article>
  );
};

export default ButtonCard;
