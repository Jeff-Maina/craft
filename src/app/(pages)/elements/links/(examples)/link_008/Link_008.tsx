"use client";

import { ArrowRight } from "lucide-react";
import ElementLayout from "../../../ElementLayout";
import { codeblock } from "./codeblock";

const Link008 = () => {
  return (
    <ElementLayout codeBlock={codeblock}>
      <a href="" className="group/link flex items-center gap-1 h-20 font-satoshi-bold">
        <span className="text-xl lg:text-3xl font-satoshi-semibold leading-none tracking-tight text-neutral-700 group-hover/link:text-neutral-500 transition-all duration-300 underline underline-offset-4 decoration-2 decoration-neutral-700">Check out our website</span>
        <ArrowRight className="h-[15px] w-[15px] md:translate-y-1 -rotate-45 group-hover/link:rotate-0 group-hover/link:translate-x-1 transition-all duration-500" />
      </a>
    </ElementLayout>
  );
};

export default Link008;

// feb 13 20:19
// feb 9 1:00
