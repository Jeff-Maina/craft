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
        <section className="lg:grid w-full gap-4 col-span-8 grid md:grid-cols-2">
          {FinishedNavMenus.map((navmenu, index) => (
            <Link href={navmenu.pageLink}>
              <div
                key={index}
                className="group/card w-full aspect-square border border-zinc-200 md:border-zinc-300/80 hover:border-zinc-400 transition-all duration-300 relative"
              >
                <img
                  src={`/Images/navmenus/${navmenu.gif}`}
                  className="absolute h-[90%] aspect-square top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 object-cover group-hover/card:scale-[0.99] transition-all duration-300"
                  alt=""
                />
                <div className="absolute top-2 right-2 translate-y-1 -translate-x-1 opacity-0 group-hover/card:translate-x-0 group-hover/card:-translate-y-0 group-hover/card:!opacity-100 transition-all duration-300 ">
                  <ArrowUpRight
                    size={14}
                    className="stroke-black transition-all duration-300"
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
