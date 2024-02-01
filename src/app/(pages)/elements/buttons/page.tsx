"use client";
import PageLayout from "@/app/layouts/PageLayout";

import type { Pageprops } from "@/lib/Interfaces";
import ButtonCard from "./components/ButtonCard";

const PageOptions: Pageprops = {
  page: "Buttons",
  componentCount: 1,
  category: "Elements",
};

const Buttons = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        <ButtonCard
          codeBlock={{
            javascript: "",
            typescript: "",
          }}
        >
          <button>button</button>
        </ButtonCard>
      </section>
    </PageLayout>
  );
};

export default Buttons;
