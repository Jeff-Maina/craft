"use client";

import { ArrowRight } from "lucide-react";
import ElementLayout from "../../../ElementLayout";
import { tabs } from "./codeblock";

const dependencies = [
  {
    label: "Lucide React",
    command: "npm install lucide-react",
  },
];

const Link007 = () => {
  return (
    <ElementLayout tabs={tabs} dependencies={dependencies}>
      <a href="" className="group/link flex items-center gap-3 lg:gap-5 h-20">
        <div className="bg-lime-500 size-8 md:size-10 rounded-full grid place-items-center scale-100 group-hover/link:size-0 group-hover/link:translate-x-4  overflow-hidden transition-all duration-500">
          <ArrowRight className="h-[14px] w-[14px] group-hover/link:translate-x-[150%] transition-all duration-300" />
        </div>
        <span className="text-lg lg:text-xl leading-none">check vacatures</span>
        <div className="bg-lime-500 group-hover/link:size-8 size-0 grid place-items-center rounded-full overflow-hidden -translate-x-4 group-hover/link:md:size-10 group-hover/link:translate-x-0 transition-all duration-500">
          <ArrowRight className="h-[14px] w-[14px] -translate-x-[150%] group-hover/link:translate-x-[0%] transition-all duration-300" />
        </div>
      </a>
    </ElementLayout>
  );
};

export default Link007;

// feb 13 20:19
// feb 13 21:01
