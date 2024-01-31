interface SectionProps {
  sectionName: string;
  sectionPagePath: string;
  componentCount: number;
}
interface ElementProps {
  elementName: string;
  elementPagePath: string;
  componentCount: number;
}

export const Sections: Array<SectionProps> = [
  {
    sectionName: "Navbars",
    sectionPagePath: "/navbars",
    componentCount: 1,
  },
  {
    sectionName: "Testimonials",
    sectionPagePath: "/testimonials",
    componentCount: 5,
  },
  {
    sectionName: "FAQS",
    sectionPagePath: "/FAQ",
    componentCount: 38,
  },
  {
    sectionName: "Contact",
    sectionPagePath: "/contact",
    componentCount: 200,
  },
  {
    sectionName: "Footer",
    sectionPagePath: "/footer",
    componentCount: 143,
  },
];

export const Elements: Array<ElementProps> = [
  {
    elementName: "Buttons",
    elementPagePath: "/buttons",
    componentCount: 1,
  },
  {
    elementName: "Tabs",
    elementPagePath: "/Tabs",
    componentCount: 5,
  },
  {
    elementName: "Links",
    elementPagePath: "/Links",
    componentCount: 38,
  },
  {
    elementName: "Dropdowns",
    elementPagePath: "/Dropdowns",
    componentCount: 200,
  },
];
