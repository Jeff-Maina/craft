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
                className="group/card w-full aspect-square border border-zinc-200 hover:border-black transition-all duration-300 relative mix-blend-difference"
              >
                <img
                  src={`/Images/navmenus/${navmenu.gif}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  alt=""
                />
                <div className="absolute bottom-4 left-4 translate-y-2 -translate-x-2 group-hover/card:translate-x-0 group-hover/card:-translate-y-0 transition-all duration-300 mix-blend-difference">
                  <ArrowUpRight
                    size={18}
                    className="stroke-black group-hover/card:stroke-white transition-all duration-300"
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
