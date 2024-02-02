import { FC } from "react";
import Link from "next/link";
import { ArrowBigRight, ArrowUpRight } from "lucide-react";

interface ComponentProps {
  pagePath: string;
  componentName: string;
  componentCount: number;
}

const ComponentCard: FC<ComponentProps> = ({
  pagePath,
  componentName,
  componentCount,
}) => {
  return (
    <div className="h-80 lg:h-96 w-full flex flex-col justify-end">
      <div className="w-full flex items-center justify-end border-t divide-x border-zinc-200/60 divide-zinc-200/60 h-16 lg:h-20 font-satoshi-medium">
        <div className=" h-full px-4 flex items-center flex-grow">
          <p className="lg:text-xl">
            {" "}
            {componentName}
          </p>
        </div>
        <div className="h-full aspect-square flex items-center justify-center group hover:bg-black transition-all duration-150">
          {componentCount}
        </div>
        <div className="h-full aspect-square flex items-center justify-center group hover:bg-black transition-all duration-150">
          <Link
            href={pagePath}
            className="w-full h-full flex items-center justify-center"
          >
            <ArrowUpRight className="group-hover:stroke-white transition-all duration-150" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComponentCard;
