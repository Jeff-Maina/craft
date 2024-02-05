import ComponentCard from "@/app/layouts/Cards/ComponentCard";
import SectionLayout from "./SectionLayout";

const SectionsList = () => {
  return (
    <SectionLayout category="sections" path="/sections">
      <section className="grid gap-3 md:grid-cols-2 lg:gap-3">
        <ComponentCard
          componentName="Navbars"
          componentCount={0}
          pagePath="/sections/navbars"
          isSection={false}
          className="border border-zinc-200/60 lg:border-zinc-200"
        >
          <div></div>
        </ComponentCard>
      </section>
    </SectionLayout>
  );
};

export default SectionsList;
