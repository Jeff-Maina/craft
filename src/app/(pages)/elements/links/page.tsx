import PageLayout from "@/app/layouts/PageLayout";
import type { Pageprops } from "@/lib/Interfaces";
import { FinishedLinks, LinksCount } from "./Linkslist";
import { ElementsData } from "@/data/AppData";
import TableOfContent from "../../(components)/TableofContents";

const PageOptions: Pageprops = {
  page: "Links",
  componentCount: LinksCount,
  category: "Elements",
};


const Links = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section className="section_layout  lg:grid lg:grid-cols-10">
        <section className="col-span-2 hidden lg:block font-satoshi-medium items-center">
          <TableOfContent data={ElementsData} />
        </section>
        <section className="grid md:grid-cols-2 gap-2 lg:col-span-8">
          {FinishedLinks.map((link, index) => (
            <div key={index}>{link.component}</div>
          ))}
        </section>
      </section>
    </PageLayout>
  );
};

export default Links;
