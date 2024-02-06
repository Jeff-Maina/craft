import PageLayout from "@/app/layouts/PageLayout";
import type { Pageprops } from "@/lib/Interfaces";
import { Linklist } from "./Linkslist";

const PageOptions: Pageprops = {
  page: "Links",
  componentCount: 2,
  category: "Elements",
};
const Links = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section className="section_layout">
        {Linklist.map((link, index) => (
          <div key={index}>{link}</div>
        ))}
      </section>
    </PageLayout>
  );
};

export default Links;
