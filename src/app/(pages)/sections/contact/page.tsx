import PageLayout from "@/app/layouts/PageLayout";
import type { Pageprops } from "@/lib/Interfaces";
const PageOptions: Pageprops = {
  page: "Contact",
  componentCount: 0,
  category: "Sections",
};

const Contact = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section></section>
    </PageLayout>
  );
};

export default Contact;
