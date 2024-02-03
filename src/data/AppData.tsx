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
