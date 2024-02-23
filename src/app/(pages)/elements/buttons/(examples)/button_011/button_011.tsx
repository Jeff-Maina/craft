"use client";

import { ArrowRight } from "lucide-react";
import ElementLayout from "../../../ElementLayout";
import { codeblock } from "./codeblock";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Magnetic from "@/components/ui/MagneticButton";

const Button011 = () => {
  return (
    <ElementLayout codeBlock={codeblock}>
      <Magnetic>
        <div
          className="flex items-center gap-2 bg-black rounded-full p-2 text-white pl-4 pr-3 group/button hover:bg-green-500 hover:text-black transition-colors duration-300 origin-center"
        >
          <span className="text-lg">About us</span>
          <ArrowRight
            className="stroke-green-500 group-hover/button:stroke-black  transition-all duration-300"
            strokeWidth={2}
            size={20}
          />
        </div>
      </Magnetic>
    </ElementLayout>
  );
};

export default Button011;
