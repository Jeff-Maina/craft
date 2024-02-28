import { linkCompProps } from "../../Interfaces";

const javascript: string = `import { ArrowRight } from "lucide-react";

const Link = () => {
  return (
      <a href="" className="group/link flex items-center gap-3 lg:gap-5 h-20">
        <div className="bg-lime-500 size-8 md:size-10 rounded-full grid place-items-center scale-100 group-hover/link:size-0 group-hover/link:translate-x-4  overflow-hidden transition-all duration-500">
          <ArrowRight size={14} className="group-hover/link:translate-x-[150%] transition-all duration-300" />
        </div>
        <span className="text-lg lg:text-xl leading-none">check vacatures</span>
        <div className="bg-lime-500 group-hover/link:size-8 size-0 grid place-items-center rounded-full overflow-hidden -translate-x-4 group-hover/link:md:size-10 group-hover/link:translate-x-0 transition-all duration-500">
          <ArrowRight size={14} className="-translate-x-[150%] group-hover/link:translate-x-[0%] transition-all duration-300" />
        </div>
      </a>
  );
};

export default Link;`;

const typescript: string = `import { ArrowRight } from "lucide-react";
import { FC } from "react";

const Link:FC = () => {
  return (
      <a href="" className="group/link flex items-center gap-3 lg:gap-5 h-20">
        <div className="bg-lime-500 size-8 md:size-10 rounded-full grid place-items-center scale-100 group-hover/link:size-0 group-hover/link:translate-x-4  overflow-hidden transition-all duration-500">
          <ArrowRight size={14} className="group-hover/link:translate-x-[150%] transition-all duration-300" />
        </div>
        <span className="text-lg lg:text-xl leading-none">check vacatures</span>
        <div className="bg-lime-500 group-hover/link:size-8 size-0 grid place-items-center rounded-full overflow-hidden -translate-x-4 group-hover/link:md:size-10 group-hover/link:translate-x-0 transition-all duration-500">
          <ArrowRight size={14} className="-translate-x-[150%] group-hover/link:translate-x-[0%] transition-all duration-300" />
        </div>
      </a>
  );
};

export default Link;`;
const link: linkCompProps = {
  javascript,
  typescript,
  label: "link",
  dateCreated: "Tuesday, 13 February 2024",
};

export const tabs = [link];
