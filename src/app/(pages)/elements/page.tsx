"use client";

// types and data;
import { ElementsData } from "@/data/AppData";
import type { Pageprops } from "@/lib/Interfaces";

// component imports;
import PageLayout from "@/app/layouts/PageLayout";
import ComponentCard from "@/app/layouts/Cards/ComponentCard";
import PageHeader from "../components/PageHeader";

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
        <PageHeader category="Elements" data={ElementsData} />
        <br />
        <div className="grid w-full md:grid-cols-2  border  border-zinc-200/60 lg:border-zinc-200 divide-y md:divide-y-0 divide-zinc-200/60 lg:divide-zinc-200">
          <ComponentCard
            componentName="Buttons"
            componentCount={0}
            isSection={false}
            pagePath="/elements/buttons"
            className="md:border-r md:border-b border-zinc-200/60 lg:border-zinc-200"
          >
            <div></div>
          </ComponentCard>
          <ComponentCard
            componentName="Tabs"
            componentCount={0}
            isSection={false}
            pagePath="/elements/tabs"
            className="md:!border-b border-zinc-200/60 lg:border-zinc-200"
          >
            <div></div>
          </ComponentCard>
          <ComponentCard
            componentName="Links"
            componentCount={0}
            isSection={false}
            pagePath="/elements/links"
            className="md:border-r border-zinc-200/60 lg:border-zinc-200"
          >
            <div></div>
          </ComponentCard>
          <ComponentCard
            componentName="Text"
            componentCount={0}
            isSection={false}
            pagePath="/elements/text"
            className=""
          >
            <div></div>
          </ComponentCard>
        </div>
      </section>
    </PageLayout>
  );
};

export default Elements;
