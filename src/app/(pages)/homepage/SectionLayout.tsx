import { FC } from "react";

import Button from "@/components/ui/Buttons";

import { SectionProps } from "./Interfaces";

const SectionLayout: FC<SectionProps> = ({ children, category, path }) => {
  return (
    <section className="px-6 max-w-7xl m-auto w-full">
      <div className="flex flex-col gap-6 lg:gap-16">
        <h1 className="text-center font-graphik-semibold text-2xl tracking-tight lg:text-4xl">
          Browse {category}.
        </h1>

        {children}
      </div>
      <div className="flex justify-center mt-5 lg:mt-20">
        <Button label="View all" href={path} />
      </div>
    </section>
  );
};

export default SectionLayout;

// todo: remove the <br/> s to gap or sth
