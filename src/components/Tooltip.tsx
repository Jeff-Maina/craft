"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

interface TooltipProps {
  label: string;
}

const Tooltip: FC<TooltipProps> = ({ label }) => {
  return (
    <div className="absolute font-satoshi-medium bg-black text-white leading-none py-2 top-[110%] text-sm pointer-events-none opacity-0 -translate-y-1 group-hover/tooltip:opacity-[1] group-hover/tooltip:translate-y-1 transition-all duration-300">
      <p className="w-32">{label}</p>
    </div>
  );
};

export default Tooltip;
