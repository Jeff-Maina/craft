import ButtonCard from "../../ButtonLayout";
import { codeblock } from "./codeblock";

const Button001 = () => {
  return (
    <ButtonCard
      date="03.02.2024"
      index={1}
      className=" border-t border-zinc-200/60 md:border-r-zinc-200 border-r border-l"
      codeBlock={codeblock}
    >
      <button></button>
    </ButtonCard>
  );
};

export default Button001;
