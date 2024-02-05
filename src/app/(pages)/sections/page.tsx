import PageLayout from "@/app/layouts/PageLayout";
import { SectionsData } from "@/data/AppData";

import type { Pageprops } from "@/lib/Interfaces";
import ComponentCard from "@/app/layouts/Cards/ComponentCard";
import PageHeader from "../(components)/PageHeader";

const PageOptions: Pageprops = {
  page: "Sections",
  componentCount: SectionsData.length,
  category: "Sections",
};

const Sections = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section className="px-4">
        <PageHeader category="Sections" data={SectionsData} />
        <br />
        <div className="grid w-full  border  border-zinc-200/60 lg:border-zinc-200 divide-y divide-zinc-200/60 lg:divide-zinc-200">
          <ComponentCard
            componentName="FAQs"
            componentCount={0}
            isSection={true}
            pagePath="/sections/faqs"
            className="xl:h-[80vh]"
          >
            <div></div>
          </ComponentCard>
          <ComponentCard
            componentName="Hero sections"
            componentCount={0}
            isSection={true}
            pagePath="/sections/hero_sections"
            className="xl:h-[80vh]"
          >
            <div></div>
          </ComponentCard>
          <ComponentCard
            componentName="Footer"
            componentCount={0}
            isSection={true}
            pagePath="/sections/footer"
            className="xl:h-[80vh]"
          >
            <div></div>
          </ComponentCard>
          <ComponentCard
            componentName="Navbars"
            componentCount={0}
            isSection={true}
            pagePath="/sections/navbar"
            className="xl:h-[80vh]"
          >
            <div></div>
          </ComponentCard>
        </div>
      </section>
    </PageLayout>
  );
};

export default Sections;
