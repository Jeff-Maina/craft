import { FC } from "react";
import Link from "next/link";

interface ComponentProps {
  component: {
    elementPagePath: string;
    elementName: string;
    componentCount: number;
  };
}
const ComponentCard: FC<ComponentProps> = ({ component }) => {
  return (
    <Link href={component.elementPagePath}>
      <div className="h-36 md:h-44 lg:h-96 w-full lg:aspect-video border border-zinc-300 rounded-xl p-4 lg:p-6 flex flex-col justify-end font-satoshi-medium hover:border-black transition-all duration-300">
        <p className="text-[#111] md:text-lg">
          {component.elementName}
          <sup className="text-zinc-500 font-campton-bold text-sm">
            {component.componentCount}
          </sup>
        </p>
      </div>
    </Link>
  );
};

export default ComponentCard;
