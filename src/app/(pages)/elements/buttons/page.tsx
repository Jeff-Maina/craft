"use client";
import PageLayout from "@/app/layouts/PageLayout";
import type { Pageprops } from "@/lib/Interfaces";
import { ButtonsList } from "./ButtonsList";
import { ElementsData } from "@/data/AppData";
import TableOfContent from "../../(components)/TableofContents";

const PageOptions: Pageprops = {
  page: "Buttons",
  componentCount: 9,
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
        <section className="grid md:grid-cols-2 gap-2 lg:col-span-8">
          {ButtonsList.map((button, index) => (
            <div key={index}>{button}</div>
          ))}
        </section>
      </section>
    </PageLayout>
  );
};

export default Buttons;
