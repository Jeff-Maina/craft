import PageLayout from "@/app/layouts/PageLayout";
import type { Pageprops } from "@/lib/Interfaces";

const PageOptions: Pageprops = {
  page: "Buttons",
  componentCount: 1,
  category: "Elements",
};

const Buttons = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      
        <article className="w-full aspect-square border bg-zinc-100 rounded-xl flex flex-col justify-between">
          <div></div>
          <div className="flex justify-end p-4">
            <button className="font-satoshi-medium">code</button>
          </div>
        </article>
        <article className="w-full aspect-square border bg-zinc-100 rounded-xl flex flex-col justify-between">
          <div></div>
          <div className="flex justify-end p-4">
            <button className="font-satoshi-medium">code</button>
          </div>
        </article>
      </section>
    </PageLayout>
  );
};

export default Buttons;
