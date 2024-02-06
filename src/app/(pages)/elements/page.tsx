"use client";

// types and data;
import type { Pageprops } from "@/lib/Interfaces";

// component imports;
import PageLayout from "@/app/layouts/PageLayout";
import ComponentCard from "@/app/layouts/Cards/ComponentCard";
import PageHeader from "../(components)/PageHeader";
import { ElementsData } from "@/data/AppData";

// ts stuff;
const PageOptions: Pageprops = {
  page: "Elements",
  componentCount: ElementsData.length,
  category: "Elements",
};

const Elements = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section className="px-4">
        <PageHeader category="elements" data={ElementsData} />
        <br />
        <div className="grid w-full md:grid-cols-2 gap-2">
          {ElementsData.map((element, index) => (
            <ComponentCard
              componentName={element.component_name}
              componentCount={element.component_count}
              isSection={false}
              pagePath={`/elements/${element.component_path}`}
            >
              <div className="w-full h-full flex items-center justify-center">{element.component_example}</div>
            </ComponentCard>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Elements;
