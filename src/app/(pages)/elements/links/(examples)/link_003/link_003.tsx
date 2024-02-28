import ElementLayout from "../../../ElementLayout";
import { tabs } from "./codeblock";
import { FC } from "react";

const Link003: FC = () => {
  return (
    <ElementLayout tabs={tabs} dependencies={[]}>
      <a href="#" className="group/link relative max-w-fit overflow-hidden">
        <span className="text-lg lg:text-xl">example@design.com</span>
        <div className="absolute bottom-0 h-[1px] w-full bg-black -translate-x-[250%]  group-hover/link:translate-x-0 transition-all duration-1000 ease-in-out"></div>
        <div className="absolute bottom-0 h-[1px] w-full bg-black group-hover/link:translate-x-[250%]  transition-all duration-1000 ease-in-out"></div>
      </a>
    </ElementLayout>
  );
};

export default Link003;

// feb 6 1:44
// feb 6 1:46
