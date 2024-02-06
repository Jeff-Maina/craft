const javascript: string = `import { ArrowRight } from "lucide-react";

const Button = () => {
  return (
    <button className="h-12 px-4 pr-7 rounded-full bg-[#2a2a2a] flex items-center justify-center gap-2 group/button outline-blue-500 active:bg-black">
      <div className="relative size-5 rounded-full overflow-hidden">
        <div className="size-5 rounded-full bg-white scale-50 group-hover/button:scale-100 transition-all duration-300 overflow-hidden relative"></div>
          <ArrowRight className="h-[12px] w-[12px] md:h-[16px] md:w-[16px] absolute top-2/4 left-2/4 -translate-x-[150%] group-hover/button:-translate-x-2/4 group-active/button:-translate-x-1/4 -translate-y-2/4 transition-all duration-200" />
      </div>
      <span className="text-white">Hover me</span>
    </button>
    );
};

export default Button

`;

const typescript: string = 
`import { ArrowRight } from "lucide-react";
import { FC } from React;

const Button:FC = (}) => {
  return (
    <button className="h-12 px-4 pr-7 rounded-full bg-[#2a2a2a] flex items-center justify-center gap-2 group/button outline-blue-500 active:bg-black">
      <div className="relative size-5 rounded-full overflow-hidden">
        <div className="size-5 rounded-full bg-white scale-50 group-hover/button:scale-100 transition-all duration-300 overflow-hidden relative"></div>
          <ArrowRight className="h-[12px] w-[12px] md:h-[16px] md:w-[16px] absolute top-2/4 left-2/4 -translate-x-[150%] group-hover/button:-translate-x-2/4 group-active/button:-translate-x-1/4 -translate-y-2/4 transition-all duration-200" />
      </div>
      <span className="text-white">Hover me</span>
    </button>
    );
};

export default Button

`;

export const codeblock = {
  javascript,
  typescript,
};
