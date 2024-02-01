import PageLayout from "@/app/layouts/PageLayout";
import { SectionsData } from "@/data/AppData";
import Link from "next/link";

import type { Pageprops } from "@/lib/Interfaces";
import ComponentCard from "@/app/layouts/Cards/ComponentCard";

const PageOptions: Pageprops = {
  page: "Sections",
  componentCount: SectionsData.length,
  category: "Sections",
};

const Sections = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section>
        <div className="grid gap-5">
          {SectionsData.map((section, index) => {
            return (
              <ComponentCard
                componentName={section.sectionName}
                componentCount={section.componentCount}
                pagePath={section.sectionPagePath}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
};

export default Sections;
