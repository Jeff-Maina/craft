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
            <div></div>
          </ComponentCard>
        ))}
        <div className="grid place-items-center w-full h-96 xl:h-[30rem] border border-zinc-200">
          <p className="font-satoshi-medium text-sm xl:text-3xl text-zinc-400">Coming soon :)</p>
        </div>
      </section>
    </SectionLayout>
  );
};

export default SectionsList;
