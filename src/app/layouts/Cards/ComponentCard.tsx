import { FC } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ComponentProps } from "./Interfaces";

const ComponentCard: FC<ComponentProps> = ({
  pagePath,
  componentName,
  componentCount,
  children,
  className,
  isSection,
}) => {
  return (
    <Link href={pagePath}>
      <div
        className={`group/component_card h-80  w-full flex ${
          !isSection ? "lg:h-96 xl:h-[30rem]" : "lg:h-96 xl:h-[29rem]"
        } ${className} font-satoshi-medium border border-zinc-200/60 hover:border-zinc-400 md:border-zinc-200 transition-all duration-200 relative`}
      >
        <div className="h-full w-full">{children}</div>
        <p
          className={`absolute left-4 ${
            isSection ? "top-4" : "bottom-4"
          } md:text-xl text-zinc-500 group-hover/component_card:text-black transition-all duration-200`}
        >
          {componentName}
          <sup className="ml-1">{componentCount}</sup>
        </p>
        <span className="absolute top-4 right-4">
          <ArrowUpRight className="h-[18px] w-[18px] stroke-zinc-300 group-hover/component_card:stroke-black  -translate-x-1 translate-y-1 group-hover/component_card:translate-y-0 group-hover/component_card:translate-x-0  transition-all duration-200" />
        </span>
      </div>
    </Link>
  );
};

export default ComponentCard;
