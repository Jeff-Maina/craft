import PageLayout from "@/app/layouts/PageLayout";
import { SectionsData } from "@/data/AppData";
import type { Pageprops } from "@/lib/Interfaces";
import TableOfContent from "../../(components)/TableofContents";
import { NavbarList } from "./NavbarList";

const PageOptions: Pageprops = {
  page: "Navbars",
  componentCount: 1,
  category: "Sections",
};

const Navbars = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section className="section_layout lg:grid lg:grid-cols-10 lg:gap-4">
        <section className="col-span-2 hidden lg:block font-satoshi-medium items-center">
          <TableOfContent data={SectionsData} />
        </section>
        <section className="lg:grid w-full gap-2 lg:gap-4 col-span-8">
          {NavbarList.map((navbar, index) => (
            <div key={index}>{navbar}</div>
          ))}
        </section>
      </section>
    </PageLayout>
  );
};

export default Navbars;
