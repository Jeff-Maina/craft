import ButtonCard from "../ButtonCard";
import { codeblock } from "./codeblock";

const Button001 = () => {
  return (
    <ButtonCard
      date="03.02.2024"
      index={1}
      className="md:border border-t border-zinc-200/60 border-r border-l"
      codeBlock={codeblock}
    >
      <button></button>
    </ButtonCard>
  );
};

export default Button001;
