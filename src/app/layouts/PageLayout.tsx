"use client";

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
        <div className="px-4 border-b border-zinc-200/60 lg:border-none sticky top-0 backdrop-blur-lg bg-[#ffffffcd] z-[5]">
          <div className="font-satoshi-medium flex items-center gap-1 md:text-lg lg:text-xl py-5 lg:py-6">
            <Link href={`/${path}`} className="text-zinc-500">
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
    <main className="flex flex-col min-h-screen max-w-7xl lg:border-zinc-300 m-auto gap-10">
      <Breadcrumb breadCrumbProps={breadCrumbProps} />
      <header className="flex flex-col gap-4 lg:gap-6 px-4 ">
        <h1 className="font-satoshi-bold text-5xl md:text-6xl lg:text-[6.5rem] selection:bg-black selection:text-white text-[#111] tracking-tighter leading-none">
          {page}.
          <sup className="text-4xl md:text-5xl text-zinc-400">
            {componentCount}
          </sup>
        </h1>
      </header>
      <section className="">{children}</section>
    </main>
  );
};

export default PageLayout;

{
  /* 😍 */
}
