import Button from "@/components/ui/Buttons";
import { ElementsData, SectionsData } from "@/data/AppData";
import Link from "next/link";
import ComponentCard from "./layouts/Cards/ComponentCard";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <header className="h-[60vh] lg:h-[70vh] flex flex-col items-center justify-center pt-20">
        <p className="text-[8rem] md:text-[11rem] lg:text-[15rem] tracking-tighter font-campton-bold text-center ">
          craft.
        </p>
        <p className="font-satoshi-medium text-zinc-800 text-center md:text-xl max-w-xs md:max-w-sm w-full">
          A collection of ui components for{" "}
          {/* <span className="bg-gradient-to-r from-blue-900 to-blue-500 text-transparent bg-clip-text"> */}
          React
          {/* </span>{" "} */}
          {/* , <span className="text-[#44bdf8]"> */}, Tailwind css
          {/* </span> */} and
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-700 via-blue-500 to-pink-500">
            {" "}
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
        <br />
        <section className="grid gap-3 md:grid-cols-2 lg:gap-3">
          {ElementsData.map((element, index) => (
            <ComponentCard
              key={index}
              componentName={element.elementName}
              componentCount={element.componentCount}
              pagePath={element.elementPagePath}
            />
          ))}{" "}
        </section>
        <div className="flex justify-center mt-10 lg:mt-20">
          <Button label="View all" path="/elements" />
        </div>
      </section>
      <section className="p-6 max-w-7xl m-auto w-full">
        <h1 className="text-center font-graphik-semibold text-2xl tracking-tight lg:text-4xl">
          Browse sections
        </h1>
        <br />
        <br />
        <section className="grid gap-3 md:grid-cols-2 lg:gap-3">
          {SectionsData.map((section, index) => (
            <ComponentCard
              key={index}
              componentName={section.sectionName}
              componentCount={section.componentCount}
              pagePath={section.sectionPagePath}
            />
          ))}{" "}
        </section>
        <div className="flex justify-center mt-10 lg:mt-20">
          <Button label="View all" path="/sections" />
        </div>{" "}
      </section>
    </main>
  );
}
