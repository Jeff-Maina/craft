"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface ComponentProps {
  children: JSX.Element;
  pageOptions: {
    page: string;
    category: string;
    componentCount: number;
  };
}

const PageLayout: FC<ComponentProps> = ({ children, pageOptions }) => {
  const { page, category, componentCount } = pageOptions;
  const isMainPage = page === "Sections" || page === "Elements";

  // gives the right path to the main page(lowercase);...it's bulky ik :(
  const path =
    category === "Sections"
      ? "sections"
      : category === "Elements"
      ? "elements"
      : "/";

  return (
    <main className="flex flex-col min-h-screen lg:px-20 lg:border-r lg:border-l lg:border-zinc-300 m-auto gap-14 lg:gap-24">
      {!isMainPage && (
        <div className="px-6 border-b border-zinc-200/60 sticky top-0 backdrop-blur-lg bg-[#ffffffcd] z-10">
          <div className="font-satoshi-medium flex items-center gap-1 md:text-lg py-5">
            <Link href={`/${path}`} className="text-zinc-500">
              {category}
            </Link>{" "}
            <p>{!isMainPage && <ChevronRight className="h-[15px]" />}</p>
            {!isMainPage && page}
          </div>
        </div>
      )}
      {isMainPage && <div></div>}
      <header className="flex flex-col gap-4 lg:gap-6 px-4">
        <h1 className="font-satoshi-bold text-5xl md:text-6xl lg:text-[6.5rem] selection:bg-black selection:text-white text-[#111] tracking-tighter">
          {page}.
          <sup className="text-4xl md:text-5xl text-zinc-400">
            {componentCount}
          </sup>
        </h1>
        {!isMainPage && (
          <p className="font-satoshi-medium text-zinc-500 md:text-lg lg:text-xl">
            Just copy and paste
          </p>
        )}
      </header>
      {/* 😍 */}
      <section className="px-4">{children}</section>
    </main>
  );
};

export default PageLayout;
