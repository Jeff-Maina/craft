import PageLayout from "@/app/layouts/PageLayout";
import type { Pageprops } from "@/lib/Interfaces";
const PageOptions: Pageprops = {
  page: "Testimonials",
  componentCount: 0,
  category: "Sections",
};

const Testimonials = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section></section>
    </PageLayout>
  );
};

export default Testimonials;
