"use client";
import PageLayout from "@/app/layouts/PageLayout";
import type { Pageprops } from "@/lib/Interfaces";
import { CursorsList } from "./CursorsList";
import { ElementsData } from "@/data/AppData";
import TableOfContent from "../TableofContents";

const PageOptions: Pageprops = {
  page: "Cursors",
  componentCount: 3,
  category: "Elements",
};

const Buttons = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section className="section_layout lg:grid lg:grid-cols-10 lg:gap-4">
        {" "}
        <section className="col-span-2 hidden lg:block font-satoshi-medium items-center">
          <TableOfContent data={ElementsData} />
        </section>
        <section className="grid w-full gap-2 lg:gap-4 col-span-8">
          {CursorsList.map((button, index) => (
            <div key={index}>{button}</div>
          ))}
        </section>
      </section>
    </PageLayout>
  );
};

export default Buttons;
