import ComponentCard from "@/app/layouts/Cards/ComponentCard";
import Button from "@/components/ui/Buttons";

const SectionsList = () => {
  return (
    <section className="p-6 max-w-7xl m-auto w-full">
      <h1 className="text-center font-graphik-semibold text-2xl tracking-tight lg:text-4xl">
        Browse sections.
      </h1>
      <br />
      <br className="hidden md:visible" />
      <section className="grid gap-3 md:grid-cols-2 lg:gap-3">
        <ComponentCard
          componentName="Navbars"
          componentCount={0}
          pagePath="/buttons"
          isSection={false}
          className="border border-zinc-200/60 lg:border-zinc-200"
        >
          <div></div>
        </ComponentCard>
      </section>
      <div className="flex justify-center mt-5 lg:mt-20">
        <Button label="View all" path="/sections" />
      </div>
    </section>
  );
};

export default SectionsList;
