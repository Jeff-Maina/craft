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
      <section className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {ButtonsList.map((button, index) =><div key={index}>{button}</div> )}
      </section>
    </PageLayout>
  );
};

export default Buttons;
