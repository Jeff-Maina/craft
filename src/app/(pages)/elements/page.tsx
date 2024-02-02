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
          className="absolute top-full right-0 bg-zinc-50 w-full border overflow-hidden border-zinc-200/60 flex flex-col items-start divide-y divide-zinc-200/60"
        >
          {ElementsData.map(({ elementName, elementPagePath }, index) => {
            return (
              <Link href={elementPagePath} className="w-full">
                <div
                  className="p-4 pl-8 text-start w-full"
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
    <div className="sticky top-4 z-10 font-satoshi-medium">
      <div className="h-14 border  divide-x divide-zinc-200/60 border-zinc-200/60 bg-white">
        <div className="w-full h-full relative">
          <button
            onClick={toggleDropDown}
            className="h-full w-full flex items-center justify-center gap-3 px-4 bg-zinc-50"
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
        <div className="grid w-full md:grid-cols-2 divide-y divide-zinc-200/60  border  border-zinc-200/60">
          {ElementsData.map((element, index) => {
            return (
              <div className="h-80 w-full flex flex-col justify-end">
                <div className="w-full flex justify-between border-t divide-x border-zinc-200/60 divide-zinc-200/60 h-16 font-satoshi-medium">
                  <div className="col-span-4 h-full px-4 flex items-center">
                    <p> {element.elementName}</p>
                  </div>
                  <div className="h-full aspect-square flex items-center justify-center">
                    {" "}
                    <p> {element.componentCount}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
};

export default Elements;
