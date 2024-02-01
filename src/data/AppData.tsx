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

export const SectionsData: Array<SectionProps> = [
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

export const ElementsData: Array<ElementProps> = [
  {
    elementName: "Buttons",
    elementPagePath: "/elements/buttons",
    componentCount: 0,
  },

  {
    elementName: "Links",
    elementPagePath: "/elements/links",
    componentCount: 0,
  },
  {
    elementName: "Text",
    elementPagePath: "/elements/text",
    componentCount: 0,
  },
];
