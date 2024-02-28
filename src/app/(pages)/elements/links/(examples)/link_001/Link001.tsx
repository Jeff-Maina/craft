import { ArrowRight } from "lucide-react";
import { FC } from "react";

import ElementLayout from "../../../ElementLayout";
import { tabs } from "./codeblock";

const ArrowSvg: FC = () => (
  <ArrowRight className="h-[14px] md:h-[16px] w-[14px] md:w-[16px] stroke-white" />
);

const dependencies = [
  {
    label: "Lucide React",
    command: "npm install lucide-react",
  },
];

const Link01: FC = () => {
  return (
    <ElementLayout dependencies={dependencies} tabs={tabs}>
      <a
        href="#"
        className="group/link flex items-center gap-2 justify-between cursor-pointer pl-0 hover:pl-4 transition-all duration-500 outline-none"
      >
        <div className="size-0 group-hover/link:size-8  group-hover/link:md:size-10 group-focus/link:size-8  group-focus/link:md:size-10 bg-[#2a2a2a] rounded-full grid place-items-center transition-all duration-500 pointer-events-none">
          <ArrowSvg />
        </div>
        <span className="text-xl md:text-2xl">Get in touch</span>
        <div className="size-8 md:size-10 group-hover/link:size-0 group-focus/link:size-0 bg-[#2a2a2a] rounded-full grid place-items-center transition-all duration-500 pointer-events-none">
          <ArrowSvg />
        </div>
      </a>
    </ElementLayout>
  );
};

export default Link01;
