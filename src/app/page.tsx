// component imports;
import Faqs from "@/components/Faqs";
import SectionsList from "./(pages)/homepage/SectionsList";
import ElementList from "./(pages)/homepage/ElementsList";

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
      <ElementList />
      <SectionsList />
      <Faqs />
    </main>
  );
}
