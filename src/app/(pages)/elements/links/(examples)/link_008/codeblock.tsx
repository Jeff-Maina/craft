import { linkCompProps } from "../../Interfaces";

const javascript: string = `import { ArrowRight } from "lucide-react";

const Link = () => {
  return (
      <a
        href=""
        className="group/link flex items-center gap-1 h-20 font-satoshi-bold"
       >
        <span className="text-xl lg:text-3xl font-satoshi-semibold leading-none tracking-tight text-neutral-700 group-hover/link:text-neutral-500 transition-all duration-300 underline underline-offset-4 decoration-2 decoration-neutral-700">
          Check out our website
        </span>
        <ArrowRight className="h-[15px] w-[15px] md:translate-y-1 -rotate-45 group-hover/link:rotate-0 group-hover/link:translate-x-1 transition-all duration-500" />
      </a>
  );
};

export default Link;`;

const typescript: string = `import { ArrowRight } from "lucide-react";
import { FC } from 'react';

const Link:FC = () => {
  return (
      <a
        href=""
        className="group/link flex items-center gap-1 h-20 font-satoshi-bold"
       >
        <span className="text-xl lg:text-3xl font-satoshi-semibold leading-none tracking-tight text-neutral-700 group-hover/link:text-neutral-500 transition-all duration-300 underline underline-offset-4 decoration-2 decoration-neutral-700">
          Check out our website
        </span>
        <ArrowRight className="h-[15px] w-[15px] md:translate-y-1 -rotate-45 group-hover/link:rotate-0 group-hover/link:translate-x-1 transition-all duration-500" />
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
