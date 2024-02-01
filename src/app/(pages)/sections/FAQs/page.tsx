import PageLayout from "@/app/layouts/PageLayout";
import type { Pageprops } from "@/lib/Interfaces";
const PageOptions: Pageprops = {
  page: "FAQs",
  componentCount: 0,
  category: "Sections",
};

const FAQs = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section></section>
    </PageLayout>
  );
};

export default FAQs;
