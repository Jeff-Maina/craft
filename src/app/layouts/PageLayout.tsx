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
    <main className="p-6 pt-10 flex flex-col min-h-screen">
      <header className="flex flex-col gap-4">
        <div className="font-satoshi-medium flex items-center gap-3">
          <Link href={`/${path}`}>{category}</Link>{" "}
          <span>{!isMainPage && "/"}</span>
          {!isMainPage && page}
        </div>
        <h1 className="font-satoshi-bold text-5xl text-[#111] tracking-tighter">
          {page}.<sup className="text-4xl text-zinc-400">{componentCount}</sup>
        </h1>
        <p  className="font-satoshi-medium text-zinc-500">Just copy and paste 😍</p>
      </header>
      <br />
      <br />
      <section>{children}</section>
    </main>
  );
};

export default PageLayout;
