"use client";

import ElementLayout from "../../../ElementLayout";
import { codeblock } from "./codeblock";

const Link009 = () => {
  return (
    <ElementLayout codeBlock={codeblock}>
      <a href="" className="group/link relative">
        <span className="text-xl lg:text-2xl underline underline-offset-4 decoration-zinc-300">Directories</span>
        <div className="absolute bottom-[1px] h-[2px] left-0 w-0 bg-black group-hover/link:w-full transition-all duration-300"></div>
      </a>
    </ElementLayout>
  );
};

export default Link009;

