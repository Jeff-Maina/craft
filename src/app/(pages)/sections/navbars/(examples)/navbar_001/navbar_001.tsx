"use client";

import { useState, FC, ReactNode } from "react";
import { motion } from "framer-motion";

// Component imports
import ElementLayout from "@/app/(pages)/elements/ElementLayout";
import { tabs } from "./codeblock";
import Magnetic from "@/components/ui/MagneticButton";
import { industries, whatWeDo, Links } from "./data";

// Animation variants
const dropdownVariants = {
  initial: { height: 0 },
  active: {
    height: "auto",
    transition: {
      height: {
        type: "spring",
        bounce: 0.3,
        duration: 0.4,
      },
    },
  },
  inactive: {
    height: 0,
    transition: {
      height: {
        type: "spring",
        bounce: 0,
        duration: 0.4,
      },
    },
  },
};

// Types;
type link = {
  label: string;
  icon: ReactNode;
  bg: string;
  border: string;
};

interface dropdownitem {
  link: link;
  index: number;
  closeDropDown: () => void;
}

interface dropdown {
  isDropDownActive: boolean;
  closeDropDown: () => void;
}

interface tab {
  activeColor: String;
}

interface navlink {
  toggleDropDown: (status: boolean) => void;
  isDropDownActive: boolean;
  updateColor: (color: String) => void;
  activeColor: String;
}

const dependencies = [
  {
    label: "Framer Motion",
    command: "npm install framer-motion",
  },
  {
    label: "Lucide React",
    command: "npm install lucide-react",
  },
];

// Mini components
const DropdownItem: FC<dropdownitem> = ({ link, index, closeDropDown }) => {
  return (
    <Magnetic>
      <motion.li
        key={index}
        initial={{
          backgroundColor: "#fff",
          borderColor: "#fff",
        }}
        onClick={closeDropDown}
        whileHover={{
          backgroundColor: link.bg,
          borderColor: link.border,
          color: link.border,
        }}
        className={`flex items-center py-[10px]  p-3 w-full gap-3 text-zinc-500 rounded-[0.7rem] text-xs md:text-base border border-white cursor-pointer hover:font-medium`}
      >
        {link.icon}
        {link.label}
      </motion.li>
    </Magnetic>
  );
};

const DropDown: FC<dropdown> = ({ isDropDownActive, closeDropDown }) => {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="initial"
      animate={isDropDownActive ? "active" : "inactive"}
      className="w-full rounded-b-3xl relative overflow-hidden grid grid-cols-2"
    >
      <div className="w-full h-full flex flex-col items-center py-3 md:py-5 gap-2  md:gap-4">
        <h1 className="text-base md:text-xl tracking-tight">What we do</h1>
        <ul className="w-[70%] flex flex-col gap-1">
          {whatWeDo.map((link, index) => (
            <DropdownItem
              key={index}
              link={link}
              index={index}
              closeDropDown={closeDropDown}
            />
          ))}
        </ul>
      </div>
      <div className="w-full h-full flex flex-col items-center py-3 md:py-5 gap-2  md:gap-4">
        <h1 className="text-base md:text-xl tracking-tight">Industries</h1>
        <ul className="w-[70%] flex flex-col gap-1">
          {industries.map((link, index) => (
            <DropdownItem
              key={index}
              link={link}
              index={index}
              closeDropDown={closeDropDown}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const GhostTab: FC<tab> = ({ activeColor }) => {
  return (
    <Magnetic>
      <motion.div
        layoutId="ghostIndicator"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.6,
        }}
        style={{
          backgroundColor: `hsl(${activeColor},10%)`,
        }}
        className="absolute inset-0 w-full h-full rounded-full"
      ></motion.div>
    </Magnetic>
  );
};

const IndicatorTab: FC = () => {
  return (
    <Magnetic>
      <motion.div
        layoutId="tabIndicator"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.6,
        }}
        className="absolute inset-0 bg-black w-full h-full rounded-full z-[5]"
      ></motion.div>
    </Magnetic>
  );
};

const NavLinks: FC<navlink> = ({
  updateColor,
  isDropDownActive,
  toggleDropDown,
  activeColor,
}) => {
  const [hoverTabIndex, setHoverTabIndex] = useState<Number>(0);
  const [activeTabIndex, setActiveTabIndex] = useState<Number>(0);
  const [lastHoveredItem, setlastHoveredItem] = useState<Number>(0);

  // handles the tabIndicator movement;
  const handleTabs = (color: String, index: Number, hasDropdown: boolean) => {
    const newIndex = hasDropdown === true ? activeTabIndex : index;
    updateColor(color);
    setActiveTabIndex(newIndex);
    toggleDropDown(hasDropdown);

    if (!hasDropdown) return;
    setlastHoveredItem(index);

    if (isDropDownActive) {
      toggleDropDown(!isDropDownActive);
    }
  };

  // resets ghost tabs position when user hovers out of the dropdown;
  const resetTabPosition = () => {
    const newIndex = !isDropDownActive ? activeTabIndex : lastHoveredItem;
    setHoverTabIndex(newIndex);
  };

  return (
    <ul
      onMouseLeave={resetTabPosition}
      className={`flex items-center rounded-full p-2 relative z-1`}
    >
      {Links.map((link, index) => {
        const isTabActive = index === activeTabIndex;
        return (
          <li
            onClick={(e) => {
              e.stopPropagation();
              handleTabs(link.color, index, link.hasDropdown);
            }}
            onMouseEnter={() => setHoverTabIndex(index)}
            key={index}
            style={{
              color: isTabActive ? `hsl(${link.color})` : "#000",
            }}
            className="py-[4px] pb-[5px] md:py-[6px] md:pb-[6px] px-3 md:px-4 cursor-pointer relative transition-colors duration-200"
          >
            {index === hoverTabIndex && <GhostTab activeColor={activeColor} />}
            {index === activeTabIndex && <IndicatorTab />}
            <span className="relative z-10 text-xs md:text-sm">
              {link.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

const Navbar001 = () => {
  const [activeColor, setActiveColor] = useState<String>(Links[0].color);
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  // FUNCTIONS;
  const updateColor = (color: String) => setActiveColor(color);
  const toggleDropDown = (status: boolean) => setIsDropDownActive(status);
  const closeDropDown = () => setIsDropDownActive(false);

  return (
    <ElementLayout
      dependencies={dependencies}
      tabs={tabs}
      className="!pt-0 !h-[26rem] lg:!h-auto border-none !rounded-3xl overflow-hidden"
    >
      <div
        style={{
          backgroundColor: `hsl(${activeColor},30%)`,
        }}
        onClick={() => {
          setIsDropDownActive(false);
        }}
        className="w-full h-full flex items-start justify-center transition-all duration-200 pt-20 pb-10 lg:pb-0"
      >
        <nav
          className={`relative backdrop-blur-sm transition-all duration-300 rounded-t-3xl rounded-b-3xl  ${
            isDropDownActive ? "shadow bg-white" : "shadow-none bg-[#ffffff8f]"
          }`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <NavLinks
            updateColor={updateColor}
            toggleDropDown={toggleDropDown}
            isDropDownActive={isDropDownActive}
            activeColor={activeColor}
          />
          <DropDown
            isDropDownActive={isDropDownActive}
            closeDropDown={closeDropDown}
          />
        </nav>
      </div>
    </ElementLayout>
  );
};

export default Navbar001;

// !bugs...
// when i reduce the number of navlinks the dropdown items get weirdly small
