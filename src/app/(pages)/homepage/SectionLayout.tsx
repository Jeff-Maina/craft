import { FC } from "react";

import Button from "@/components/ui/Buttons";

import { SectionProps } from "./Interfaces";

const SectionLayout: FC<SectionProps> = ({ children, category, path }) => {
  return (
    <section className="p-6 max-w-7xl m-auto w-full">
      <h1 className="text-center font-graphik-semibold text-2xl tracking-tight lg:text-4xl">
        Browse {category}.
      </h1>
      <br />
      <br className="hidden md:visible" />
      {children}
      <div className="flex justify-center mt-5 lg:mt-20">
        <Button label="View all" path={path} />
      </div>
    </section>
  );
};

export default SectionLayout;

// todo: remove the <br/> s to gap or sth
