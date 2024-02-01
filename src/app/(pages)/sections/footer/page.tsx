import PageLayout from "@/app/layouts/PageLayout";
import type { Pageprops } from "@/lib/Interfaces";

const PageOptions: Pageprops = {
  page: "Footer",
  componentCount: 0,
  category: "Sections",
};

const Footer = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section></section>
    </PageLayout>
  );
};

export default Footer;
