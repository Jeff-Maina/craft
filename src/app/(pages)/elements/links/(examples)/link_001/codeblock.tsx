import { linkCompProps } from "../../Interfaces";

const javascript: string = `import { ArrowRight } from "lucide-react";

const Link = () => {
  return (
    <a
      href="#"
      className="group/link flex items-center gap-2 justify-between cursor-pointer pl-0 hover:pl-4 transition-all duration-500 outline-none"
    >
        <div className="size-0 group-hover/link:size-8  group-hover/link:md:size-10 group-focus/link:size-8  group-focus/link:md:size-10 bg-[#2a2a2a] rounded-full grid place-items-center transition-all duration-500 pointer-events-none">
          <ArrowRight size={16} />
        </div>
        <span className="text-xl md:text-2xl">Get in touch</span>
        <div className="size-8 md:size-10 group-hover/link:size-0 group-focus/link:size-0 bg-[#2a2a2a] rounded-full grid place-items-center transition-all duration-500 pointer-events-none">
          <ArrowRight size={16} />
        </div>
    </a>
  );
};

export default Link;`;

const typescript: string = `import { ArrowRight } from "lucide-react";
import { FC } from "react";

const Link:FC = () => {
  return (
    <a
      href="#"
      className="group/link flex items-center gap-2 justify-between cursor-pointer pl-0 hover:pl-4 transition-all duration-500 outline-none"
    >
        <div className="size-0 group-hover/link:size-8  group-hover/link:md:size-10 group-focus/link:size-8  group-focus/link:md:size-10 bg-[#2a2a2a] rounded-full grid place-items-center transition-all duration-500 pointer-events-none">
          <ArrowRight size={16} />
        </div>
        <span className="text-xl md:text-2xl">Get in touch</span>
        <div className="size-8 md:size-10 group-hover/link:size-0 group-focus/link:size-0 bg-[#2a2a2a] rounded-full grid place-items-center transition-all duration-500 pointer-events-none">
          <ArrowRight size={16} />
        </div>
    </a>
  );
};

export default Link;`;

const link: linkCompProps = {
  javascript,
  typescript,
  label: "link",
  dateCreated: "Friday, 6 February 2024",
};

export const tabs = [link];
