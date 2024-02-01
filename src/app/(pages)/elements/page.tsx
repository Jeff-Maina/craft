import PageLayout from "@/app/layouts/PageLayout";
import { ElementsData } from "@/data/AppData";
import Link from "next/link";

const Elements = () => {
  return (
    <PageLayout page="Elements" componentCount={ElementsData.length}>
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
