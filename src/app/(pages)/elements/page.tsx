// import PageLayout from "@/app/layouts/PageLayout";
// import { ElementsData } from "@/data/AppData";
// import Link from "next/link";

// import type { Pageprops } from "@/lib/Interfaces";
// import ComponentCard from "@/app/layouts/Cards/ComponentCard";

// const PageOptions: Pageprops = {
//   page: "Elements",
//   componentCount: ElementsData.length,
//   category: "Elements",
// };

// const Elements = () => {
//   return (
//     <PageLayout pageOptions={PageOptions}>
//       <section>
//         <div className="grid w-full md:grid-cols-2 gap-3">
//           {ElementsData.map((element, index) => {
//             return (
//               <ComponentCard
//                 componentName={element.elementName}
//                 componentCount={element.componentCount}
//                 pagePath={element.elementPagePath}
//                 key={index}
//               />
//             );
//           })}
//         </div>
//       </section>
//     </PageLayout>
//   );
// };
import PageLayout from "@/app/layouts/PageLayout";
import { ElementsData } from "@/data/AppData";
import Link from "next/link";

import type { Pageprops } from "@/lib/Interfaces";
import ComponentCard from "@/app/layouts/Cards/ComponentCard";

const PageOptions: Pageprops = {
  page: "Elements",
  componentCount: ElementsData.length,
  category: "Elements",
};

const Elements = () => {
  return (
    <PageLayout pageOptions={PageOptions}>
      <section>
        <div className="grid w-full md:grid-cols-2 divide-y divide-zinc-200/60 border-t border-b border-zinc-200/60">
          {ElementsData.map((element, index) => {
            return (
              <div className="h-80 w-full flex flex-col justify-end">
                {/* <p className="font-satoshi-bold text-lg text-black">
                  {element.elementName}
                  <sup className="text-zinc-500">{element.componentCount}</sup>
                </p> */}
                <div className="w-full flex justify-between border-t divide-x border-zinc-200/60 divide-zinc-200/60 h-16 font-satoshi-medium">
                  <div className="col-span-4 h-full px-4 flex items-center">
                    <p> {element.elementName}</p>
                  </div>
                  <div className="h-full aspect-square flex items-center justify-center">
                    {" "}
                    <p> {element.componentCount}</p>
                  </div>
                </div>
              </div>
            );
          })}
          {/* {ElementsData.map((element, index) => {
            return (
              <ComponentCard
                componentName={element.elementName}
                componentCount={element.componentCount}
                pagePath={element.elementPagePath}
                key={index}
              />
            );
          })} */}
        </div>
      </section>
    </PageLayout>
  );
};

export default Elements;
