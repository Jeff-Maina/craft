import { FC } from "react";
import Link from "next/link";

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
    <Link href={pagePath}>
      <div className="h-44 lg:h-96 w-full lg:aspect-video border border-zinc-300 rounded lg:rounded-xl p-4 lg:p-6 flex flex-col justify-end font-satoshi-medium hover:border-black transition-all duration-300">
        <p className="text-[#111] md:text-lg">
          {componentName}
          <sup className="text-zinc-500 font-campton-bold text-sm">
            {componentCount}
          </sup>
        </p>
      </div>
    </Link>
  );
};

export default ComponentCard;
