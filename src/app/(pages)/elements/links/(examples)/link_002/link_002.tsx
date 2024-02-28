import { FC } from "react";

import ElementLayout from "../../../ElementLayout";
import { tabs } from "./codeblock";

const Link02: FC = () => {
  return (
    <ElementLayout dependencies={[]} tabs={tabs}>
      <a href="#" className="group/link relative max-w-fit overflow-hidden">
        <span className="lg:text-xl">Read more</span>
        <div className="absolute bottom-0 h-[1px] w-full bg-black -translate-x-[150%]  group-hover/link:translate-x-0 transition-all duration-500 ease-in-out"></div>
        <div className="absolute bottom-0 h-[1px] w-full bg-black group-hover/link:translate-x-[150%]  transition-all duration-500 ease-in-out"></div>
      </a>
    </ElementLayout>
  );
};

export default Link02;

// feb 6 20:43
// feb 6 20:47