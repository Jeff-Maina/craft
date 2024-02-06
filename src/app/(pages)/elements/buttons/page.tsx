"use client";
import PageLayout from "@/app/layouts/PageLayout";
import type { Pageprops } from "@/lib/Interfaces";
import { ButtonsList } from "./data/ButtonsList";

const PageOptions: Pageprops = {
  page: "Buttons",
  componentCount: 2,
  category: "Elements",
};

const Buttons = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section className="section_layout">
        {ButtonsList.map((button, index) => (
          <div key={index}>
            {button}
          </div>
        ))}
      </section>
    </PageLayout>
  );
};

export default Buttons;
