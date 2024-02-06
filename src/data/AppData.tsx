interface SectionProps {
  component_name: string;
  component_path: string;
  component_count: number;
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
    component_count: 0,
  },
  {
    component_name: "Faqs",
    component_path: "navbars",
    component_count: 0,
  },
];

export const ElementsData: Array<ElementProps> = [
  {
    component_name: "Buttons",
    component_path: "buttons",
    component_count: 2,
    component_example: (
      <button className="bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-all duration-150 text-white rounded md:rounded-lg py-3  md:text-lg px-6 md:px-10 leading-none">
        button
      </button>
    ),
  },
  {
    component_name: "Links",
    component_path: "links",
    component_count: 0,
    component_example: (
      <p className="lg:text-xl leading-none hover:underline">
        Link
      </p>
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
      "You need to install Tailwind CSS and Framer Motion (for interactive components).",
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
