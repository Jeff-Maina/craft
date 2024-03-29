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
        <div className="px-4 border-b border-zinc-200/60 lg:border-none sticky top-0 bg-[#ffffffea] backdrop-blur-3xl z-20 lg:hidden">
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

  return (
    <main className="flex flex-col min-h-screen max-w-7xl lg:border-zinc-300 m-auto gap-10 lg:pt-10 lg:gap-5">
      <Breadcrumb breadCrumbProps={breadCrumbProps} />
      <header className="flex flex-col gap-4 lg:gap-6 px-3 lg:pt-10">
        <h1 className="font-satoshi-bold text-5xl md:text-6xl   text-[#111] tracking-tighter leading-none">
          {page}.<sup className="text-4xl text-zinc-400">{componentCount}</sup>
        </h1>
      </header>
      <section className={`lg:mt-4`}>
        <section className="">{children}</section>
      </section>
    </main>
  );
};

export default PageLayout;

{
  /* 😍 */
}
