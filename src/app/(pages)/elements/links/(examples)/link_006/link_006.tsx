"use client";

import { ArrowRight } from "lucide-react";
import ElementLayout from "../../../ElementLayout";
import { codeblock } from "./codeblock";

const Link006 = () => {
  return (
    <ElementLayout codeBlock={codeblock}>
      <a href="" className="flex items-center gap-2 group/link">
        <div className="group-hover/link:size-10 size-[0]  rounded-full bg-zinc-800 grid place-items-center transition-all duration-300">
            <ArrowRight className="stroke-white" />
        </div>
        <span className="tracking-tighter text-4xl font-medium">Resources</span>
      </a>
    </ElementLayout>
  );
};

export default Link006;

// feb 10 22:55
// feb 9 1:00
