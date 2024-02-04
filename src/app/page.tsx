import Button from "@/components/ui/Buttons";
import ComponentCard from "./layouts/Cards/ComponentCard";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 lg:gap-20">
      <header className="h-[60vh] lg:h-[70vh] flex flex-col items-center justify-center pt-20">
        <p className="text-[8rem] md:text-[11rem] lg:text-[15rem] tracking-tighter font-campton-bold text-center leading-normal">
          craft.
        </p>
        <p className="font-satoshi-medium text-zinc-800 text-center md:text-xl max-w-xs md:max-w-sm md:w-full w-3/4">
          A collection of ui components for React, Tailwind css and{" "}
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-700 via-blue-500 to-pink-500">
            Framer motion
          </span>
          .
        </p>
      </header>
      <section className="p-6 max-w-7xl m-auto w-full">
        <h1 className="text-center font-graphik-semibold text-2xl tracking-tight lg:text-4xl">
          Browse elements.
        </h1>
        <br />
        <br className="hidden md:visible" />
        <section className="grid gap-3 md:grid-cols-2 lg:gap-3">
          <ComponentCard
            componentName="buttons"
            componentCount={0}
            pagePath="/elements/buttons"
            isSection={false}
            className="border border-zinc-200/60 lg:border-zinc-200"
          >
            <div></div>
          </ComponentCard>
        </section>
        <div className="flex justify-center mt-5 lg:mt-20">
          <Button label="View all" path="/elements" />
        </div>
      </section>
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
        </div>{" "}
      </section>
      <Faqs />
    </main>
  );
}
