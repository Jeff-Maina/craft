// Component imports;
import PageLayout from "@/app/layouts/PageLayout";
import TableOfContent from "@/app/(pages)/(components)/TableofContents";

//  Data
import { SectionsData } from "@/data/AppData";
import type { Pageprops } from "@/lib/Interfaces";
import { FinishedNavMenus, NavmenuCount } from "./NavMenusList";

// 3rd party libraries
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const PageOptions: Pageprops = {
  page: "Navmenus",
  componentCount: NavmenuCount,
  category: "Sections",
};

const NavMenus = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section className="section_layout lg:grid lg:grid-cols-10 lg:gap-4">
        <section className="col-span-2 hidden lg:block font-satoshi-medium items-center">
          <TableOfContent data={SectionsData} />
        </section>
        <section className="lg:grid w-full gap-2 lg:gap-4 col-span-8 grid md:grid-cols-2">
          {FinishedNavMenus.map((navbar, index) => (
            <Link href={navbar.pageLink}>
              <div
                key={index}
                className="group/card w-full aspect-square border border-zinc-200/60 md:border-zinc-200 hover:border-zinc-400 transition-all duration-300 relative"
              >
                <div className="absolute top-4 right-4 translate-y-2 -translate-x-2 group-hover/card:translate-x-0 group-hover/card:-translate-y-0 transition-all duration-300">
                  <ArrowUpRight
                    size={18}
                    className="stroke-zinc-200 group-hover/card:stroke-black transition-all duration-300"
                  />
                </div>
              </div>
            </Link>
          ))}
        </section>
      </section>
    </PageLayout>
  );
};

export default NavMenus;
