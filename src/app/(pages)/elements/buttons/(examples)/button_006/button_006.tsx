import ElementLayout from "../../../ElementLayout";
import { codeblock } from "./codeblock";

const Button006 = () => {
  return (
    <ElementLayout codeBlock={codeblock}>
      <button className="group/button py-3 px-8 text-lg bg-yellow-500 active:bg-yellow-500/90 rounded-[0.8rem] relative">
        <div className="relative overflow-hidden">
          <p className="group-hover/button:-translate-y-full group-focus/button:-translate-y-full transition-all duration-300">
            Create wallet
          </p>
          <p className="absolute min-w-fit group-hover/button:-translate-y-full group-focus/button:-translate-y-full transition-all duration-300">
            Create wallet
          </p>
        </div>
      </button>
    </ElementLayout>
  );
};

export default Button006;
