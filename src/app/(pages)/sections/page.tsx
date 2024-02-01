import PageLayout from "@/app/layouts/PageLayout";
import { SectionsData } from "@/data/AppData";
import Link from "next/link";

const Sections = () => {
  return (
    <PageLayout page="sections" componentCount={SectionsData.length} category="Sections">
      <section>
        <div className="grid gap-5">
          {SectionsData.map((section, index) => {
            return (
              <Link href={section.sectionPagePath}>
                <div className="w-full aspect-video border rounded-xl p-4 flex flex-col font-graphik-semibold justify-end">
                  <p className="text-[#111]">
                    {section.sectionName}{" "}
                    <sup className="text-zinc-500 font-campton-bold text-sm">
                      {section.componentCount}
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

export default Sections;
