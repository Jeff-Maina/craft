import ButtonCard from "../../ButtonLayout";
import { codeblock } from "./codeblock";

const Button001 = () => {
  return (
    <ButtonCard
      date="03.02.2024"
      index={1}
      className="border border-t border-zinc-200/60 md:border-r-zinc-200 border-r border-l"
      codeBlock={codeblock}
    >
      <button className="relative px-8 py-3 group/button">
        <span className="uppercase text-sm md:text-base font-satoshi-medium text-white group-hover/button:text-black transition-colors duration-300">
          hover me
        </span>
        <div className="absolute -z-10 inset-0 w-full h-full bg-[#2a2a2a] opacity-1 group-hover/button:opacity-0 scale-100 group-hover/button:scale-0 transition-all duration-300"></div>
        <div className="absolute -z-[5] inset-0 w-full h-full border border-[#2a2a2a] scale-125 opacity-0 group-hover/button:scale-100 group-active/button:scale-105 group-hover/button:opacity-100 transition-all duration-300"></div>
      </button>
    </ButtonCard>
  );
};

export default Button001;