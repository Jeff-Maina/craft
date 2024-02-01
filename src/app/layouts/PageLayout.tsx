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
    <main className="p-6 pt-10 flex flex-col min-h-screen max-w-7xl m-auto gap-14 lg:gap-24">
      <header className="flex flex-col gap-4 lg:gap-6">
        <div className="font-satoshi-medium flex items-center gap-3 md:text-lg">
          <Link href={`/${path}`}>{category}</Link>{" "}
          <small>{!isMainPage && "/"}</small>
          {!isMainPage && page}
        </div>
        <h1 className="font-satoshi-bold text-5xl md:text-6xl lg:text-8xl selection:bg-black selection:text-white text-[#111] tracking-tighter">
          {page}.
          <sup className="text-4xl md:text-5xl text-zinc-400">
            {componentCount}
          </sup>
        </h1>
        {!isMainPage && (
          <p className="font-satoshi-medium text-zinc-500 md:text-lg lg:text-xl">
            Just copy and paste 😍
          </p>
        )}
      </header>
      
      <section>{children}</section>
    </main>
  );
};

export default PageLayout;
