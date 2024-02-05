type SectionProps = {
  component_name: string;
  component_path: string;
  component_count: number;
};

type ElementProps = {
  component_name: string;
  component_path: string;
  component_count: number;
};

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
    path: "/home",
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
    component_path: "/sections/navbars",
    component_count: 0,
  },
];

export const ElementsData: Array<ElementProps> = [
  {
    component_name: "Buttons",
    component_path: "/elements/buttons",
    component_count: 0,
  }
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
