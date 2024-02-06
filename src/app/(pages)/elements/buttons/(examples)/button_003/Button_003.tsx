import {  ArrowUpRight } from "lucide-react";
import { codeblock } from "./codeblock";
import ElementLayout from "../../../ElementLayout";

const Button003 = () => {
  return (
    <ElementLayout codeBlock={codeblock}>
<button className="bg-[#2a2a2a] text-white leading-none p-2 rounded-full flex items-center gap-3 justify-center pl-6 lg:pl-8 group/button active:bg-black outline-blue-500">
  <span className="lg:text-lg">Start project today</span>
  <div className="size-8 md:size-12 scale-[20%] group-hover/button:scale-100 group-focus/button:scale-100 grid place-items-center rounded-full bg-white transition-all duration-300">
    <ArrowUpRight className="h-[20px] w-[20px] stroke-black opacity-0 group-hover/button:opacity-100 group-focus/button:opacity-100 group-active/button:translate-x-1 group-active/button:-translate-y-1 transition-all duration-300" />
  </div>
</button>
    </ElementLayout>
  );
};

export default Button003;

// Tuesday,Feb 6 20:56
// Tuesday,Feb 6 21:15

