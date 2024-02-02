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
    <div className="h-80 w-full flex flex-col justify-end">
      <div className="w-full flex justify-between border-t divide-x border-zinc-200/60 divide-zinc-200/60 h-16 font-satoshi-medium">
        <div className="col-span-4 h-full px-4 flex items-center">
          <p>
            {" "}
            {componentName} <sup>{componentCount}</sup>
          </p>
        </div>
        <div className="h-full aspect-square flex items-center justify-center">
          <Link href={pagePath}>
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComponentCard;
