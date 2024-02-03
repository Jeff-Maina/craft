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
      <section className="w-full h-full border-b border-t border-zinc-200/60 lg:border-zinc-200 grid md:grid-cols-2 lg:grid-cols-3 divide-y divide-zinc-200/60 lg:divide-zinc-200">
        {ButtonsList.map((button, index) =><div key={index}>{button}</div> )}
      </section>
    </PageLayout>
  );
};

export default Buttons;
