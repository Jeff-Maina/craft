"use client";
// 3rd party libraries;
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { FC, useState } from "react";

// types and data;
import { ElementsData } from "@/data/AppData";
import type { Pageprops } from "@/lib/Interfaces";

// component imports;
import PageLayout from "@/app/layouts/PageLayout";
import { opacityVariants } from "@/lib/animations";
import Link from "next/link";
import ComponentCard from "@/app/layouts/Cards/ComponentCard";

// ts stuff;
const PageOptions: Pageprops = {
  page: "Elements",
  componentCount: ElementsData.length,
  category: "Elements",
};

interface dropdownprops {
  isDropDownActive: boolean;
  closeDropDown: () => void;
}

// components;
const Dropdown: FC<dropdownprops> = ({ isDropDownActive, closeDropDown }) => {
  return (
    <AnimatePresence mode="wait">
      {isDropDownActive ? (
        <motion.div
          variants={opacityVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="absolute top-[120%] right-0 bg-zinc-50 w-full border overflow-hidden border-zinc-300 flex flex-col items-start divide-y divide-zinc-200/60"
        >
          {ElementsData.map(({ elementName, elementPagePath }, index) => {
            return (
              <Link href={elementPagePath} className="w-full">
                <div
                  className="p-4 lg:p-6 text-sm md:text-base lg:text-lg hover:bg-black transition-all duration-150 hover:text-white pl-8 text-start w-full"
                  key={index}
                  onClick={closeDropDown}
                >
                  {elementName}
                </div>
              </Link>
            );
          })}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
const Header = () => {
  const [isDropDownActive, setDropDownActive] = useState(false);
  const toggleDropDown = () => setDropDownActive(!isDropDownActive);
  const closeDropDown = () => setDropDownActive(false);
  return (
    <div className="sticky top-4 z-10 font-satoshi-medium md:max-w-xs">
      <div className={`h-14 lg:h-16 border  divide-x divide-zinc-200/60 ${isDropDownActive ?  "border-zinc-300": "border-zinc-200/60"} transition-all duration-300`}>
        <div className="w-full h-full relative">
          <button
            onClick={toggleDropDown}
            className="h-full w-full text-sm md:text-base lg:text-lg flex items-center justify-center gap-3 px-4 bg-zinc-50"
          >
            All components
            <ChevronLeft
              className={`h-[15px] w-[15px] ${
                isDropDownActive ? "-rotate-90" : "rotate-0"
              } transition-all duration-150`}
            />
          </button>
          <Dropdown
            isDropDownActive={isDropDownActive}
            closeDropDown={closeDropDown}
          />
        </div>
      </div>
    </div>
  );
};

const Elements = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section className="px-4">
        <Header />
        <br />
        <div className="grid w-full md:grid-cols-2 md:divide-x divide-y divide-zinc-200/60  border  border-zinc-200/60">
          {ElementsData.map((element, index) => (
            <ComponentCard
              componentName={element.elementName}
              componentCount={element.componentCount}
              pagePath={element.elementPagePath}
              key={index}
            />
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Elements;
