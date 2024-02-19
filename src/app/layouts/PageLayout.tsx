"use client";

import { SectionsData } from "@/data/AppData";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

// ts stuff;
interface ComponentProps {
  children: JSX.Element;
  pageOptions: {
    page: string;
    category: string;
    componentCount: number;
  };
}
type breadCrumbType = {
  isMainPage: boolean;
  path: string;
  category: string;
  page: string;
};
interface BreadcrumbProps {
  breadCrumbProps: breadCrumbType;
}

// components;
const Breadcrumb: FC<BreadcrumbProps> = ({ breadCrumbProps }) => {
  const { path, isMainPage, page, category } = breadCrumbProps;
  return (
    <>
      {!isMainPage && (
        <div className="px-4 border-b border-zinc-200/60 lg:border-none sticky top-0 backdrop-blur-lg bg-[#ffffff46] z-[5] lg:hidden">
          <div className="font-satoshi-medium flex items-center gap-1 md:text-lg lg:text-xl py-5 lg:py-6">
            <Link
              href={`/${path}`}
              className="text-zinc-500 hover:text-zinc-900 transition-all duration-150"
            >
              {category}
            </Link>{" "}
            <p>{!isMainPage && <ChevronRight className="h-[15px]" />}</p>
            {!isMainPage && page}
          </div>
        </div>
      )}
      {isMainPage && <div></div>}
    </>
  );
};

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

  const breadCrumbProps = {
    isMainPage,
    path,
    category,
    page,
  };

  const gridClass = isMainPage ? "" : "lg:grid grid-cols-8";

  return (
    <main className="flex flex-col min-h-screen max-w-7xl lg:border-zinc-300 m-auto gap-10 lg:pt-10 lg:gap-5">
      <Breadcrumb breadCrumbProps={breadCrumbProps} />
      <header className="flex flex-col gap-4 lg:gap-6 px-3 lg:py-10">
        <h1 className="font-satoshi-bold text-5xl md:text-6xl   text-[#111] tracking-tighter leading-none">
          {page}.<sup className="text-4xl text-zinc-400">{componentCount}</sup>
        </h1>
      </header>
      <section className={`lg:mt-4 ${gridClass}`}>
        <section className="col-span-7">{children}</section>
        {!isMainPage && (
          <section className="col-span-1 hidden lg:block font-satoshi-medium items-center">
            <div className="w-full border border-zinc-200/60 md:border-zinc-200 sticky top-4 py-4">
              <header>
                <p className="px-4 text-sm text-[#3a3a3a] pb-2">Categories</p>
              </header>
              <div>
                {}
                <div className="px-4 py-2 hover:pl-6 cursor-pointer text-sm md:text-base lg:text-lg transition-all duration-300 text-start w-full flex items-center gap-1">
                  <ChevronRight className="h-[12px] w-[12px]" />
                  <p>Buttons</p>
                </div>
                <div className="px-4 py-2 hover:pl-6 cursor-pointer text-sm md:text-base lg:text-lg transition-all duration-300 text-start w-full flex items-center gap-1">
                  <ChevronRight className="h-[12px] w-[12px]" />
                  <p>Tabs</p>
                </div>
                <div className="px-4 py-2 hover:pl-6 cursor-pointer text-sm md:text-base lg:text-lg transition-all duration-300 text-start w-full flex items-center gap-1">
                  <ChevronRight className="h-[12px] w-[12px]" />
                  <p>Links</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </section>
    </main>
  );
};

export default PageLayout;

{
  /* 😍 */
}
