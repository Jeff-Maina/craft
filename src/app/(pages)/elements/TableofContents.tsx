import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
type data = {
  component_name: string;
  component_path: string;
  component_count: number;
  component_example?: JSX.Element;
};

interface TOCProps {
  data: Array<data>;
}

const TableOfContent: FC<TOCProps> = ({ data }) => {
  return (
    <div className="w-full border border-zinc-200/60 md:border-zinc-200 sticky top-4">
      <div className="flex flex-col divide-y divide-zinc-200/60 md:divide-zinc-200">
        {data.map((element, index) => {
          return (
            <Link key={index} href={element.component_path}>
              <div className="px-4 py-4 hover:pl-6 cursor-pointer text-sm md:text-base transition-all duration-300 text-start w-full flex items-center gap-1">
                <ChevronRight className="h-[12px] w-[12px]" />
                <p>{element.component_name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TableOfContent;
