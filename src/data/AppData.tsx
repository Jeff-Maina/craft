import { ButtonCount } from "@/app/(pages)/elements/buttons/ButtonsList";
import { CursorCount } from "@/app/(pages)/elements/cursors/CursorsList";
import { LinksCount } from "@/app/(pages)/elements/links/Linkslist";
import { NavbarCount } from "@/app/(pages)/sections/navbars/NavbarList";
import { NavmenuCount } from "@/app/(pages)/sections/navmenus/NavMenusList";

interface SectionProps {
  component_name: string;
  component_path: string;
  component_count: number;
  component_example: JSX.Element;
}

interface ElementProps {
  component_name: string;
  component_path: string;
  component_count: number;
  component_example: JSX.Element;
}

type faqsProps = {
  question: string;
  answer: string;
};

type websitePages = {
  page: string;
  path: string;
};

export const websitePages: Array<websitePages> = [
  {
    page: "Home",
    path: "/",
  },
  {
    page: "Elements",
    path: "/elements",
  },
  {
    page: "Sections",
    path: "/sections",
  },
];

export const SectionsData: Array<SectionProps> = [
  {
    component_name: "Navbars",
    component_path: "navbars",
    component_count: NavbarCount,
    component_example: (
      <div>
        <ul className="flex items-center gap-2 lg:text-xl lg:gap-5">
          <li className="hover:underline">Home</li>
          <li className="hover:underline">About</li>
          <li className="hover:underline">Services</li>
          <li className="hover:underline">Contact</li>
        </ul>
      </div>
    ),
  },
  {
    component_name: "Navmenus",
    component_path: "navmenus",
    component_count: NavmenuCount,
    component_example: (
      <div>
        <ul className="flex flex-col lg:text-lg:gap-5 border border-zinc-200 divide-y divide-zinc-200 w-52">
          <li className="p-3 pl-6 hover:bg-zinc-100 transition-all duration-300">
            Home
          </li>
          <li className="p-3 pl-6 hover:bg-zinc-100 transition-all duration-300">
            About
          </li>
          <li className="p-3 pl-6 hover:bg-zinc-100 transition-all duration-300">
            Services
          </li>
          <li className="p-3 pl-6 hover:bg-zinc-100 transition-all duration-300">
            Contact
          </li>
        </ul>
      </div>
    ),
  },
];

export const ElementsData: Array<ElementProps> = [
  {
    component_name: "Buttons",
    component_path: "buttons",
    component_count: ButtonCount,
    component_example: (
      <button className="bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-all duration-150 text-white rounded md:rounded-lg py-3  md:text-lg px-6 md:px-10 leading-none">
        button
      </button>
    ),
  },
  {
    component_name: "Links",
    component_path: "links",
    component_count: LinksCount,
    component_example: (
      <p className="lg:text-xl leading-none hover:underline">Link</p>
    ),
  },
  {
    component_name: "Cursors",
    component_path: "cursors",
    component_count: CursorCount,
    component_example: (
      <div className="size-14 border border-black rounded-full grid place-items-center">
        <div className="size-2 bg-black rounded-full"></div>
      </div>
    ),
  },
];

export const FaqsList: Array<faqsProps> = [
  {
    question: "How do I use the components in my project?",
    answer: "Simply copy and paste :)",
  },
  {
    question: "What do I need to install?",
    answer:
      "You need to install Tailwind CSS and Framer Motion/GSAP (for interactive components).",
  },
  {
    question: "Are the components responsive?",
    answer: "Yes, they are designed to be responsive.",
  },
  {
    question: "How often are the components updated?",
    answer: "The components are regularly updated.",
  },
  {
    question: "Can I use the components with TypeScript?",
    answer:
      "Yes, each component includes both its JavaScript and TypeScript source code.",
  },
  {
    question: "Do I need to customize the components?",
    answer:
      "Yes, the components provide a structure and may require customization of aspects like colors to suit your preferences.",
  },
];
