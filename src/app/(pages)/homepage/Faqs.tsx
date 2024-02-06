"use client";
//3rd party libraries imports
import { ChevronUpIcon } from "lucide-react";
import { FC, useState } from "react";
import { heightVariants } from "@/lib/animations";

// component imports;
import { FaqsList } from "@/data/AppData";
import Motiondiv from "../../../components/Motiondiv";

const Faqs: FC = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(100);

  const toggleFaq = (index: number) =>
    setActiveFaqIndex(index === activeFaqIndex ? 100 : index);

  return (
    <section className="p-6 max-w-3xl m-auto w-full font-satoshi-medium flex flex-col gap-6 lg:gap-16">
      <h1 className="text-center font-graphik-semibold text-xl tracking-tight lg:text-4xl">
        Frequently Asked Questions.
      </h1>

      <div className="flex flex-col gap-2">
        {FaqsList.map((faq, index) => {
          const isFaqActive: boolean = index === activeFaqIndex;
          const faqClass = isFaqActive
            ? "border-zinc-300"
            : "border-zinc-200/60 lg:border-zinc-200 bg-white";
          const svgClass = isFaqActive ? "-rotate-180" : "-rotate-90";

          return (
            <div
              key={index}
              className={`p-4 lg:p-6 min-h-14 border ${faqClass} text-sm md:text-lg lg:text-xl transition-all duration-150`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between"
              >
                <p className="text-left text-zinc-800">{faq.question}</p>
                <div className="min-w-6 flex justify-end">
                  <ChevronUpIcon
                    className={`h-[16px] w-[16px] stroke-zinc-800 ${svgClass} transition-all duration-150`}
                  />
                </div>
              </button>
              <Motiondiv
                variants={heightVariants}
                isAnimatePresence={false}
                isAnimationActive={isFaqActive}
                className="overflow-hidden h-0"
              >
                <p className="pt-2 text-zinc-500 leading-relaxed">{faq.answer}</p>
              </Motiondiv>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faqs;
