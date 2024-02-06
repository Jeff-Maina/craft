import ElementLayout from "../../../ElementLayout";
import { codeblock } from "./codeblock";

const Button001 = () => {
  return (
    <ElementLayout codeBlock={codeblock}>
      <button className="relative px-8 py-3 group/button outline-blue-500">
        <span className="uppercase  text-sm md:text-base font-satoshi-medium text-white group-hover/button:text-black transition-colors duration-300">
          hover me
        </span>
        <div className="absolute -z-10 inset-0 w-full h-full bg-[#2a2a2a] opacity-1 group-hover/button:opacity-0 scale-100 group-hover/button:scale-0 transition-all duration-300"></div>
        <div className="absolute -z-[5] inset-0 w-full h-full border border-[#2a2a2a] scale-125 opacity-0 group-hover/button:scale-100 group-active/button:scale-105 group-hover/button:opacity-100 transition-all duration-300"></div>
      </button>
    </ElementLayout>
  );
};

export default Button001;
