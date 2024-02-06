import { ElementsData } from "@/data/AppData";
import SectionLayout from "./SectionLayout";
import ComponentCard from "@/app/layouts/Cards/ComponentCard";

const ElementList = () => {
  return (
    <SectionLayout path="/elements" category="elements">
      <section className="grid gap-2 md:grid-cols-2 ">
        {ElementsData.map((element, index) => (
          <ComponentCard
            key={index}
            componentName={element.component_name}
            componentCount={element.component_count}
            pagePath={`/elements/${element.component_path}`}
            isSection={false}
            className="border border-zinc-200/60 lg:border-zinc-200"
          >
            <div className="w-full h-full grid place-items-center">
              {element.component_example}
            </div>
          </ComponentCard>
        ))}
      </section>
    </SectionLayout>
  );
};

export default ElementList;
