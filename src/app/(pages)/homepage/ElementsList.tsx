import SectionLayout from "./SectionLayout";
import ComponentCard from "@/app/layouts/Cards/ComponentCard";

const ElementList = () => {
  return (
    <SectionLayout path="/elements" category="elements">
      <section className="grid gap-3 md:grid-cols-2 lg:gap-3">
        <ComponentCard
          componentName="Buttons"
          componentCount={0}
          pagePath="/elements/buttons"
          isSection={false}
          className="border border-zinc-200/60 lg:border-zinc-200"
        >
          <div></div>
        </ComponentCard>
      </section>
    </SectionLayout>
  );
};

export default ElementList;
