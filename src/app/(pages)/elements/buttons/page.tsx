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
      <article className="w-full aspect-square border bg-zinc-100 rounded-xl"></article>
    </PageLayout>
  );
};

export default Buttons;
