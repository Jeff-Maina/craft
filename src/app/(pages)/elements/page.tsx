import PageLayout from "@/app/layouts/PageLayout";
import { ElementsData } from "@/data/AppData";
import Link from "next/link";

import type { Pageprops } from "@/lib/Interfaces";
import ComponentCard from "@/app/layouts/Cards/ComponentCard";

const PageOptions: Pageprops = {
  page: "Elements",
  componentCount: ElementsData.length,
  category: "Elements",
};

const Elements = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section>
        <div className="grid gap-3 md:grid-cols-2 lg:gap-5">
          {ElementsData.map((element, index) => {
            return <ComponentCard component={element} key={index} />;
          })}
        </div>
      </section>
    </PageLayout>
  );
};

export default Elements;
