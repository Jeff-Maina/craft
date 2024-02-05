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
        <PageHeader category="Sections" data={SectionsData} />
        <br />
        <div className="grid w-full  border  border-zinc-200/60 lg:border-zinc-200 divide-y divide-zinc-200/60 lg:divide-zinc-200">
          <ComponentCard
            componentName="Navbars"
            componentCount={0}
            isSection={true}
            pagePath="/sections/navbars"
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
