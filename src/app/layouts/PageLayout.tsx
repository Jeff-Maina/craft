import Link from "next/link";
import { FC } from "react";

interface ComponentProps {
  children: JSX.Element;
  page: string;
  componentCount: number;
}

const PageLayout: FC<ComponentProps> = ({ children, page, componentCount }) => {
  return (
    <main className="p-6 pt-10 flex flex-col">
      <header className="flex flex-col gap-4 border-b pb-10">
        <div className="font-satoshi-medium flex items-center gap-3">
          <Link href="/elements">Elements</Link> {page !== "Elements" && "/"} {page !== "Elements" && page}
        </div>
        <h1 className="font-satoshi-bold text-5xl text-[#111] tracking-tighter">
          {page}.<sup className="text-4xl text-zinc-400">{componentCount}</sup>
        </h1>
      </header>
      <br />
      <br />
      <section>{children}</section>
    </main>
  );
};

export default PageLayout;
