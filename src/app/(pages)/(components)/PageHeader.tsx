"use client";

import { opacityVariants } from "@/lib/animations";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";

interface dropdownprops {
  isDropDownActive: boolean;
  closeDropDown: () => void;
  data: data[];
}

type data = {
  component_name: string;
  component_count: number;
  component_path: string;
};

interface headerProps {
  data: data[];
  category: string;
}

// components;
const Dropdown: FC<dropdownprops> = ({
  isDropDownActive,
  closeDropDown,
  data,
}) => {
  return (
    <AnimatePresence mode="wait">
      {isDropDownActive ? (
        <motion.div
          variants={opacityVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="absolute top-[120%] right-0 bg-zinc-50 w-full border overflow-hidden border-zinc-300 lg:border-zinc-400 hover:border-black transition-all duration-150 flex flex-col items-start divide-y divide-zinc-200/60"
        >
          {data.map(({ component_name, component_path }, index) => {
            return (
              <Link href={component_path} className="w-full">
                <div
                  className="p-4 lg:p-6 text-sm md:text-base lg:text-lg hover:bg-black transition-all duration-150 hover:text-white pl-8 text-start w-full"
                  key={index}
                  onClick={closeDropDown}
                >
                  {component_name}
                </div>
              </Link>
            );
          })}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

const PageHeader: FC<headerProps> = ({ data,category }) => {
  const [isDropDownActive, setDropDownActive] = useState(false);
  const toggleDropDown = () => setDropDownActive(!isDropDownActive);
  const closeDropDown = () => setDropDownActive(false);
  return (
    <div className="sticky top-[4.6rem] lg:top-4 z-10 font-satoshi-medium md:max-w-xs">
      <div
        className={`h-14 lg:h-16 border  divide-x divide-zinc-200/60 ${
          isDropDownActive
            ? "border-zinc-300 lg:border-zinc-400"
            : "border-zinc-200/60 lg:border-zinc-200"
        } transition-all duration-300`}
      >
        <div className="w-full h-full relative">
          <button
            onClick={toggleDropDown}
            className="h-full w-full text-sm md:text-base lg:text-lg flex items-center justify-center gap-3 px-4 bg-zinc-50"
          >
            All {category}
            <ChevronLeft
              className={`h-[15px] w-[15px] ${
                isDropDownActive ? "-rotate-90" : "rotate-0"
              } transition-all duration-150`}
            />
          </button>
          <Dropdown
            isDropDownActive={isDropDownActive}
            closeDropDown={closeDropDown}
            data={data}
          />
        </div>
      </div>
    </div>
  );
};
export default PageHeader;
