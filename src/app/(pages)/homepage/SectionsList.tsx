import ComponentCard from "@/app/layouts/Cards/ComponentCard";
import SectionLayout from "./SectionLayout";
import { SectionsData } from "@/data/AppData";

const SectionsList = () => {
  return (
    <SectionLayout category="sections" path="/">
      <section className="grid gap-2 lg:gap-4">
        {SectionsData.map((section, index) => (
          <ComponentCard
            key={index}
            componentName={section.component_name}
            componentCount={section.component_count}
            pagePath={`/sections/${section.component_path}`}
            isSection={true}
            className="border border-zinc-200/60 lg:border-zinc-200"
          >
            <div className="w-full h-full grid place-items-center">{section.component_example}</div>
          </ComponentCard>
        ))}
      </section>
    </SectionLayout>
  );
};

export default SectionsList;
