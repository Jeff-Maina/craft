import { FC } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ComponentProps {
  pagePath: string;
  componentName: string;
  componentCount: number;
  children: JSX.Element;
  className?: React.ComponentProps<"div">["className"];
  isSection: boolean;
}

const ComponentCard: FC<ComponentProps> = ({
  pagePath,
  componentName,
  componentCount,
  children,
  className,
  isSection,
}) => {
  return (
    <div
      className={`h-80 lg:h-96 xl:h-[30rem] w-full flex ${
        !isSection ? "flex-col" : "flex-col-reverse"
      } justify-end ${className} font-satoshi-medium`}
    >
      <div className="h-3/4">{children}</div>
      <div
        className={`w-full flex items-center justify-end ${
          !isSection ? "border-t" : "border-b"
        }  divide-x border-zinc-200/60 lg:border-zinc-200 divide-zinc-200/60 lg:divide-zinc-200 h-16 lg:h-20 xl:h-24 font-satoshi-medium`}
      >
        <div className=" h-full px-4 flex items-center flex-grow lg:px-10">
          <p className="lg:text-xl text-sm ">
            {" "}
            {componentName}
          </p>
        </div>
        <div className="h-full aspect-square flex items-center justify-center transition-all duration-150">
          {componentCount}
        </div>
        <div className="h-full aspect-square flex items-center justify-center group/button hover:bg-black transition-all duration-150">
          <Link
            href={pagePath}
            className="w-full h-full flex items-center justify-center"
          >
            <ArrowUpRight className="group-hover/button:stroke-white transition-all duration-150 h-[20px] w-[20px] pointer-events-none" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComponentCard;
