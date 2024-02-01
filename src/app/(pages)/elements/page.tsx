import PageLayout from "@/app/layouts/PageLayout";
import { ElementsData } from "@/data/AppData";
import Link from "next/link";

import type { Pageprops } from "@/lib/Interfaces";

const PageOptions: Pageprops = {
  page: "Elements",
  componentCount: ElementsData.length,
  category: "Elements",
};

const Elements = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section>
        <div className="grid gap-5">
          {ElementsData.map((element, index) => {
            return (
              <Link href={element.elementPagePath}>
                <div className="w-full aspect-video border rounded-xl p-4 flex flex-col font-graphik-semibold justify-end">
                  <p className="text-[#111]">
                    {element.elementName}{" "}
                    <sup className="text-zinc-500 font-campton-bold text-sm">
                      {element.componentCount}
                    </sup>{" "}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
};

export default Elements;
