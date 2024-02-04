interface SectionProps {
  component_name: string;
  component_path: string;
  component_count: number;
}

interface ElementProps {
  component_name: string;
  component_path: string;
  component_count: number;
}

interface faqsProps {
  question: string;
  answer: string;
}

export const SectionsData: Array<SectionProps> = [
  {
    component_name: "Navbars",
    component_path: "/sections/navbars",
    component_count: 0,
  },
  {
    component_name: "Testimonials",
    component_path: "/sections/testimonials",
    component_count: 0,
  },
  {
    component_name: "FAQS",
    component_path: "/sections/FAQs",
    component_count: 0,
  },
  {
    component_name: "Contact",
    component_path: "/sections/contact",
    component_count: 0,
  },
  {
    component_name: "Footer",
    component_path: "/sections/footer",
    component_count: 0,
  },
];

export const ElementsData: Array<ElementProps> = [
  {
    component_name: "Buttons",
    component_path: "/elements/buttons",
    component_count: 0,
  },
  {
    component_name: "Links",
    component_path: "/elements/links",
    component_count: 0,
  },
  {
    component_name: "Text",
    component_path: "/elements/text",
    component_count: 0,
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
