import {
  Cherry,
  GraduationCap,
  Heart,
  LineChart,
  Microscope,
  Music,
  Palette,
  Pill,
} from "lucide-react";

import { ReactNode } from "react";

interface links {
  link: string;
  color: string;
  label: string;
  hasDropdown: boolean;
}

export const Links: Array<links> = [
  {
    link: "Home",
    color: "298, 70%, 66%",
    label: "Home",
    hasDropdown: false,
  },
  {
    link: "About",
    color: "38, 100%, 60%",
    label: "About",
    hasDropdown: false,
  },
  {
    link: "Work",
    // color: "204, 88%, 71%",
    color: "102, 48%, 49%",
    label: "Work",
    hasDropdown: true,
  },
  {
    link: "Expertise",
    color: "337, 100%, 50%",
    label: "Expertise",
    hasDropdown: false,
  },
  {
    link: "Contact",
    color: "54, 100%, 56%",
    label: "Contact",
    hasDropdown: false,
  },
];
interface NavLinkItem {
  label: string;
  icon: ReactNode;
  bg: string;
  border: string;
}

export const whatWeDo: Array<NavLinkItem> = [
  {
    label: "Design",
    icon: <Palette size={16} className="stroke-[#3468c0]" />,
    bg: "#d0e1ff",
    border: "#3468c0",
  },
  {
    label: "Research",
    icon: <Microscope size={16} className="stroke-[#416D19]" />,
    bg: "#e0f7cb",
    border: "#416D19",
  },
  {
    label: "Non profit",
    icon: <Heart size={16} className="stroke-[#D04848]" />,
    bg: "#fddcdc",
    border: "#D04848",
  },
  {
    label: "Strategy",
    icon: <LineChart size={16} className="stroke-[#40A2E3]" />,
    bg: "#d4edfd",
    border: "#40A2E3",
  },
];
export const industries: Array<NavLinkItem> = [
  {
    label: "Music",
    icon: <Music size={16} className="stroke-[#FFB000]" />,
    bg: "#faf1dd",
    // bg: "41, 100%, 50%",
    border: "#FFB000",
  },
  {
    label: "Nutrition",
    icon: <Cherry size={16} className="stroke-[#FF4B91]" />,
    bg: "#fcdae7",
    // bg: "337, 100%, 65%",
    border: "#FF4B91",
  },
  {
    label: "Education",
    icon: <GraduationCap size={16} className="stroke-[#0B60B0]" />,
    bg: "#e0edfa",
    // bg: "209, 88%, 37%",
    border: "#0B60B0",
  },
  {
    label: "Medicine",
    icon: <Pill size={16} className="stroke-[#836FFF]" />,
    bg: "#e8e5fd",
    // bg: "248, 100%, 72%",
    border: "#836FFF",
  },
];
