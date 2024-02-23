"use client";
import PageLayout from "@/app/layouts/PageLayout";
import type { Pageprops } from "@/lib/Interfaces";
import { FinishedCursors, CursorCount } from "./CursorsList";
import { ElementsData } from "@/data/AppData";
import TableOfContent from "../../(components)/TableofContents";

const PageOptions: Pageprops = {
  page: "Cursors",
  componentCount: CursorCount,
  category: "Elements",
};

const Cursors = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section className="section_layout lg:grid lg:grid-cols-10 lg:gap-4">
        <section className="col-span-2 hidden lg:block font-satoshi-medium items-center">
          <TableOfContent data={ElementsData} />
        </section>
        <section className="lg:grid w-full gap-2 lg:gap-4 col-span-8 hidden">
          {FinishedCursors.map((cursor, index) => (
            <div key={index}>{cursor.component}</div>
          ))}
        </section>
        <section className="lg:hidden">
          <p className="font-satoshi-medium">
            <span className="text-red-500">*</span>
            Experience the full preview of components by accessing the website
            on a larger screen.
          </p>
        </section>
      </section>
    </PageLayout>
  );
};

export default Cursors;
