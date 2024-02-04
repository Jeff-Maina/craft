"use client";

import { FaqsList } from "@/data/AppData";
import { motion } from "framer-motion";
import { ChevronUpIcon } from "lucide-react";
import { FC, useState } from "react";

const FaqVariants = {
  intial: {
    height: 0,
  },
  active: {
    height: "auto",
  },
  inactive: {
    height: 0,
  },
};

const Faqs: FC = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(100);

  const toggleFaq = (index: number) => {
    const newIndex: number = index === activeFaqIndex ? 100 : index;
    setActiveFaqIndex(newIndex);
  };

  return (
    <section className="p-6 max-w-3xl m-auto w-full font-satoshi-medium">
      <h1 className="font-graphik-semibold text-2xl tracking-tight lg:text-4xl">
        Faqs.
      </h1>
      <br />
      <div className="flex flex-col gap-2">
        {FaqsList.map((faq, index) => {
          const isFaqActive: boolean = index === activeFaqIndex;
          return (
            <div key={index} className="p-4 min-h-14 border border-zinc-200/60">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between"
              >
                <p className="text-left text-zinc-800">{faq.question}</p>
                <div className="min-w-6 flex justify-end">
                  <ChevronUpIcon className={`h-[18px] w-[18px] ${isFaqActive ? '-rotate-180' : '-rotate-90'} transition-all duration-150`} />
                </div>
              </button>
              <motion.div
                variants={FaqVariants}
                initial="initial"
                animate={isFaqActive ? "active" : "inactive"}
                className="text-zinc-600 overflow-hidden"
              >
                <p className="pt-4">{faq.answer}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faqs;
