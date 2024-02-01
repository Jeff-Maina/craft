import { ElementsData, Sections } from "@/data/AppData";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <header className="h-[50vh] flex flex-col items-center justify-center">
        <p className="text-[8rem] md:text-[11rem] lg:text-[15rem] tracking-tighter font-campton-bold text-center ">
          craft.
        </p>
        <p className="font-satoshi-medium text-zinc-800 text-center md:text-xl max-w-xs w-full">
          A collection of ui components for{" "}
          {/* <span className="bg-gradient-to-r from-blue-900 to-blue-500 text-transparent bg-clip-text"> */}
          React
          {/* </span>{" "} */}
          {/* , <span className="text-[#44bdf8]"> */}
          Taiwind css
          {/* </span> */} and
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-700 via-blue-500 to-pink-500">
            {" "}
            Framer motion
          </span>
          .
        </p>
      </header>
      <section className="p-6">
        <h1 className="text-center font-graphik-semibold text-2xl tracking-tight">
          Browse elements.
        </h1>
        <br />
        <br />
        <section className="flex flex-col gap-3">
          {ElementsData.map((element, index) => (
            <a
              href={element.elementPagePath}
              key={index}
              className="h-36 apsect-video border border-zinc-200 rounded p-4 flex flex-col justify-end font-graphik-semibold"
            >
              <p className="text-[#111]">
                {element.elementName}{" "}
                <sup className="text-zinc-500 font-campton-bold text-sm">
                  {element.componentCount}
                </sup>{" "}
              </p>
            </a>
          ))}{" "}
        </section>
      </section>
      <section className="p-6">
        <h1 className="text-center font-graphik-semibold text-2xl tracking-tight">
          Browse sections
        </h1>
        <br />
        <br />
        <section className="flex flex-col gap-3">
          {Sections.map((section, index) => (
            <div className="h-36 apsect-video border border-zinc-200 rounded p-4 flex flex-col justify-end font-graphik-semibold">
              <p className="text-[#111]">
                {section.sectionName}{" "}
                <sup className="text-zinc-500 font-campton-bold text-sm">
                  {section.componentCount}
                </sup>{" "}
              </p>
            </div>
          ))}{" "}
        </section>
      </section>
    </main>
  );
}
