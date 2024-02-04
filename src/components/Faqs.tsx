import { ChevronUpIcon } from "lucide-react";

const Faqs = () => {
  return (
    <section className="p-6 max-w-3xl m-auto w-full font-satoshi-medium">
      <h1 className="font-graphik-semibold text-2xl tracking-tight lg:text-4xl">
        Faqs.
      </h1>
      <br />
      <div>
        <div className="p-4 h-14 border border-zinc-200/60">
          <button className="w-full flex items-center justify-between text-zinc-600">
            <p>Officia ut aliqua dolore veniam</p>
            <ChevronUpIcon className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
