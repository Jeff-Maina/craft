import ButtonCard from "../ButtonCard";
import { codeblock } from "./codeblock";

const Button001 = () => {
  return (
    <ButtonCard className="md:border border-zinc-200/60" codeBlock={codeblock}>
      <button>button</button>
    </ButtonCard>
  );
};

export default Button001;
