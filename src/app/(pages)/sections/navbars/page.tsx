import PageLayout from "@/app/layouts/PageLayout";
import type { Pageprops } from "@/lib/Interfaces";

const PageOptions: Pageprops = {
  page: "Navbars",
  componentCount: 0,
  category: "Sections",
};

const Navbars = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section></section>
    </PageLayout>
  );
};

export default Navbars;
