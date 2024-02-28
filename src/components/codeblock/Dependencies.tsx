import { ArrowRight, Check, Copy } from "lucide-react";
import { FC, useState } from "react";
import { dependecyObj, dependeciesProps } from "./Interfaces";

const Dependencycard: FC<dependecyObj> = ({ dependency }) => {
  const { label, command } = dependency;
  const [isCopied, setCopied] = useState(false);

  const copyCommand = () => {
    setCopied(true);
    navigator.clipboard.writeText(command);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const tooltipLabel = isCopied ? "copied" : "copy";
  const svg = isCopied ? <Check size={14} /> : <Copy size={14} />;

  return (
    <li className="flex items-center gap-3 relative max-w-fit isolate group/dependency">
      <ArrowRight size={14} />
      <p className="min-w-32">{label}</p>
      <div
        onClick={copyCommand}
        className="flex relative items-center max-w-fit  gap-4 px-4 py-2 text-xs bg-zinc-100 border border-white rounded-[0.3rem] text-zinc-600 hover:text-black hover:border-zinc-400 hover:bg-zinc-200 transition-all duration-300 cursor-pointer"
      >
        <code className="font-fira-code">{command}</code>
        <div>{svg}</div>
        <div className="bg-black text-white px-2 py-[2px] text-[12px] leading-0 left-2/4 bottom-full opacity-0 -translate-x-2/4 group-hover/dependency:-translate-y-2 group-hover/dependency:opacity-100  absolute rounded transition-all duration-500 pointer-events-none">
          {tooltipLabel}
        </div>
      </div>
    </li>
  );
};

const Dependencies: FC<dependeciesProps> = ({ dependencies }) => {
  const dependenciesCount = dependencies.length;
  return (
    <>
      {dependenciesCount > 0 ? (
        <ul className="list-disc list-inside flex flex-col gap-2">
          {dependencies.map((dependecy, index) => (
            <Dependencycard key={index} dependency={dependecy} />
          ))}
        </ul>
      ) : (
        <div>
          <p>~ None</p>
        </div>
      )}
    </>
  );
};

export default Dependencies;
