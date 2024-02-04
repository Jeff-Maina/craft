"use client";
import PageLayout from "@/app/layouts/PageLayout";
import type { Pageprops } from "@/lib/Interfaces";
import { ButtonsList } from "./data/ButtonsList";

const PageOptions: Pageprops = {
  page: "Buttons",
  componentCount: 1,
  category: "Elements",
};

const Buttons = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section className="px-4">
        <section className=" w-full h-full lg:border border-zinc-200/60 lg:border-zinc-200 grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 divide-zinc-200/60 lg:divide-zinc-200">
          {ButtonsList.map((button, index) => (
            <div key={index} className="">
              {button}
            </div>
          ))}
        </section>
      </section>
    </PageLayout>
  );
};

export default Buttons;
