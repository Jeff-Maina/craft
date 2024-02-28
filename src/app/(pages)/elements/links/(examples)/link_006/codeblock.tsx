import { linkCompProps } from "../../Interfaces";

const javascript: string = `import { ArrowRight } from "lucide-react";

const Link = () => {
  return (
      <a href="" className="flex items-center gap-2 group/link">
        <div className="group-hover/link:size-10 size-[0]  rounded-full bg-zinc-800 grid place-items-center transition-all duration-300">
          <ArrowRight className="stroke-white" />
        </div>
        <span className="tracking-tighter text-4xl font-medium">Resources</span>
      </a>
  );
};

export default Link;`;

const typescript: string = `import { ArrowRight } from "lucide-react";
import { FC } from "react";

const Link:FC = () => {
  return (
      <a href="" className="flex items-center gap-2 group/link">
        <div className="group-hover/link:size-10 size-[0]  rounded-full bg-zinc-800 grid place-items-center transition-all duration-300">
          <ArrowRight className="stroke-white" />
        </div>
        <span className="tracking-tighter text-4xl font-medium">Resources</span>
      </a>
  );
};

export default Link;`;

const link: linkCompProps = {
  javascript,
  typescript,
  label: "link",
  dateCreated: "Saturday, 10 February 2024",
};

export const tabs = [link];
