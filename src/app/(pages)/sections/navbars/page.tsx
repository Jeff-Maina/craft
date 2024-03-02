import PageLayout from "@/app/layouts/PageLayout";
import { SectionsData } from "@/data/AppData";
import type { Pageprops } from "@/lib/Interfaces";
import TableOfContent from "../../(components)/TableofContents";
import { FinishedNavbars, NavbarCount } from "./NavbarList";

const PageOptions: Pageprops = {
  page: "Navbars",
  componentCount: NavbarCount,
  category: "Sections",
};

const Navbars = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section className="!p-4 lg:grid lg:grid-cols-10 lg:gap-4 w-full">
        <section className="lg:col-span-2 hidden lg:block font-satoshi-medium items-center">
          <TableOfContent data={SectionsData} />
        </section>
        <section className="flex flex-col gap-4 max-w-full lg:col-span-8">
          {FinishedNavbars.map((navbar, index) => (
            <div key={index} className="">
              {navbar.component}
            </div>
          ))}
        </section>
      </section>
    </PageLayout>
  );
};

export default Navbars;
