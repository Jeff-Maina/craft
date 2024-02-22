"use client";
import { FC } from "react";

interface TooltipProps {
  label: string;
}

const Tooltip: FC<TooltipProps> = ({ label }) => {
  return (
    <div className="absolute font-satoshi-medium bg-black text-white leading-none py-2 top-[110%] right-4 lg:right-2/4 lg:translate-x-2/4 text-xs md:text-sm pointer-events-none opacity-0 -translate-y-1 group-hover/tooltip:opacity-[1] group-hover/tooltip:translate-y-1 transition-all duration-300 z-50">
      <p className="w-28 md:w-32">{label}</p>
    </div>
  );
};

export default Tooltip;


// *