// component imports;
import PageLayout from "@/app/layouts/PageLayout";
import ComponentCard from "@/app/layouts/Cards/ComponentCard";
import PageHeader from "../(components)/PageHeader";
// types and interfaces;
import type { Pageprops } from "@/lib/Interfaces";
// data
import { SectionsData } from "@/data/AppData";

const PageOptions: Pageprops = {
  page: "Sections",
  componentCount: SectionsData.length,
  category: "Sections",
};

const Sections = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section className="px-4">
        <PageHeader category="sections" data={SectionsData} />
        <br />
        <div className="grid w-full md:grid-cols-2 gap-2">
          {SectionsData.map((element, index) => (
            <ComponentCard
              key={index}
              componentName={element.component_name}
              componentCount={element.component_count}
              isSection={true}
              pagePath={`/sections/${element.component_path}`}
            >
              <div className="w-full h-full flex items-center justify-center">
                {element.component_example}
              </div>
            </ComponentCard>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Sections;
