const javascript: string = `import { ArrowRight } from "lucide-react";

const Button = () => {
  return (
    <button className="p-2 md:p-3 pr-8 md:pr-8 rounded-full bg-[#2a2a2a] flex items-center justify-center gap-2 group/button outline-blue-500 active:bg-black">
      <div className="relative rounded-full overflow-hidden">
        <div className="size-8 rounded-full bg-white scale-[20%] group-hover/button:scale-100 transition-all duration-300 overflow-hidden relative"></div>
        <ArrowRight className="stroke-[#2a2a2a] absolute top-2/4 left-2/4 -translate-x-[150%] group-hover/button:-translate-x-2/4 group-active/button:-translate-x-1/4 -translate-y-2/4 h-[15px] w-[15px] md:h-[20px] md:w-[20px] transition-all duration-200" />
      </div>
      <span className="text-white lg:text-lg">Hover me</span>
    </button>
    );
};

export default Button

`;

const typescript: string = 
`import { ArrowRight } from "lucide-react";
import { FC } from React;

const Button:FC = () => {
  return (
    <button className="p-2 md:p-3 pr-8 md:pr-8 rounded-full bg-[#2a2a2a] flex items-center justify-center gap-2 group/button outline-blue-500 active:bg-black">
      <div className="relative rounded-full overflow-hidden">
        <div className="size-8 rounded-full bg-white scale-[20%] group-hover/button:scale-100 transition-all duration-300 overflow-hidden relative"></div>
        <ArrowRight className="stroke-[#2a2a2a] absolute top-2/4 left-2/4 -translate-x-[150%] group-hover/button:-translate-x-2/4 group-active/button:-translate-x-1/4 -translate-y-2/4 h-[15px] w-[15px] md:h-[20px] md:w-[20px] transition-all duration-200" />
      </div>
      <span className="text-white lg:text-lg">Hover me</span>
    </button>
    );
};

export default Button

`;

export const codeblock = {
  javascript,
  typescript,
};
