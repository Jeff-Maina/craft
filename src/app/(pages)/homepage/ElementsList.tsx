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
          <div className="w-full h-full grid place-items-center">
            <button className="bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-all duration-150 text-white rounded md:rounded-lg py-3  md:text-lg px-6 md:px-10 leading-none">button</button>
          </div>
        </ComponentCard>
      </section>
    </SectionLayout>
  );
};

export default ElementList;
