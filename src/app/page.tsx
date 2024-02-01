import { ElementsData, SectionsData } from "@/data/AppData";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <header className="h-[50vh] lg:h-[70vh] flex flex-col items-center justify-center">
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
        <section className="grid gap-3 md:grid-cols-2 lg:gap-6">
          {ElementsData.map((element, index) => (
            <Link href={element.elementPagePath}>
              <div
                key={index}
                className="h-36 md:h-44 lg:h-96 w-full lg:aspect-video border border-zinc-300 rounded-xl p-4 lg:p-6 flex flex-col justify-end font-satoshi-medium hover:border-black transition-all duration-300"
              >
                <p className="text-[#333] lg:text-xl">
                  {element.elementName}{" "}
                  <sup className="text-zinc-500 font-campton-bold text-sm">
                    {element.componentCount}
                  </sup>{" "}
                </p>
              </div>
            </Link>
          ))}{" "}
        </section>
      </section>
      <section className="p-6 max-w-7xl m-auto w-full">
        <h1 className="text-center font-graphik-semibold text-2xl tracking-tight lg:text-4xl">
          Browse sections
        </h1>
        <br />
        <br />
        <section className="grid gap-3 md:grid-cols-2 lg:gap-6">
          {SectionsData.map((section, index) => (
            <Link href={section.sectionPagePath}>
              <div
                key={index}
                className="h-36 md:h-44 lg:h-96 w-full lg:aspect-video border border-zinc-300 rounded-xl p-4 lg:p-6 flex flex-col justify-end font-satoshi-medium hover:border-black transition-all duration-300"
              >
                
                <p className="text-[#333] lg:text-xl">
                  {section.sectionName}{" "}
                  <sup className="text-zinc-500 font-campton-bold text-sm">
                    {section.componentCount}
                  </sup>{" "}
                </p>
              </div>
            </Link>
          ))}{" "}
        </section>
      </section>
    </main>
  );
}
