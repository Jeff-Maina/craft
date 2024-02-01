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
    sectionPagePath: "/sections/navbars",
    componentCount: 0,
  },
  {
    sectionName: "Testimonials",
    sectionPagePath: "/sections/testimonials",
    componentCount: 0,
  },
  {
    sectionName: "FAQS",
    sectionPagePath: "/sections/FAQ",
    componentCount: 0,
  },
  {
    sectionName: "Contact",
    sectionPagePath: "/sections/contact",
    componentCount: 0,
  },
  {
    sectionName: "Footer",
    sectionPagePath: "/sections/footer",
    componentCount: 0,
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
