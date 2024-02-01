import PageLayout from "@/app/layouts/PageLayout";
import { ElementsData } from "@/data/AppData";

const Elements = () => {
  return (
    <PageLayout page="Elements" componentCount={ElementsData.length}>
      <section>
        {
            ElementsData.map((element,index)=>{
                return(
                    
                )
            })
        }
      </section>
    </PageLayout>
  );
};

export default Elements;
