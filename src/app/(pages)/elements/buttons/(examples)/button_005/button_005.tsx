import { ArrowRight } from "lucide-react";
import ElementLayout from "../../../ElementLayout";
import { codeblock } from "./codeblock";

const Button005 = () => {
  return (
    <ElementLayout codeBlock={codeblock}>
      <button className="group/button px-8 py-4 lg:py-5 uppercase lg:text-lg rounded-full border border-zinc-300 !leading-none flex items-center gap-3">
        <span className="tracking-wider">contact</span>
        <div className="relative overflow-hidden">
          <div className="group-hover/button:translate-x-full group-focus/button:translate-x-full transition-all duration-300">
            <ArrowRight className="h-[18px] w-[18px]" />
          </div>
          <div className="absolute top-0 left-0 -translate-x-full group-hover/button:translate-x-0 group-focus/button:translate-x-0 transition-all duration-300">
            <ArrowRight className="h-[18px] w-[18px]" />
          </div>
        </div>
      </button>
    </ElementLayout>
  );
};

export default Button005;

// feb 9,24:04
