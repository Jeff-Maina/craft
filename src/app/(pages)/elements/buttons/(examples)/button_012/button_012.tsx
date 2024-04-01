import { Plus } from "lucide-react";
import ElementLayout from "../../../ElementLayout";
import { tabs } from "./codeblock";
import { FC } from "react";

const dependencies = [
  {
    label: "Framer motion",
    command: "npm install framer-motion",
  },
  {
    label: "Lucid react",
    command: "npm install lucide-react",
  },
];
const Button012: FC = () => {
  return (
    <ElementLayout dependencies={dependencies} tabs={tabs}>
      <button className="h-16 w-[10rem] rounded-full relative flex items-center justify-center group/button">
        <div className="font-bold tracking-tight text-2xl flex items-center gap-2 relative z-10 text-red-500">
          <span className="group-hover/button:-translate-x-4 transition-all duration-500">
            more
          </span>
          <span className="group-hover/button:translate-x-4  transition-all duration-500">
            <Plus
              className="translate-y-[2px] stroke-red-500"
              size={12}
              strokeWidth={5}
            />
          </span>
        </div>
        <div className="absolute top-0 right-0 w-full group-hover/button:w-16 h-full border-2 border-red-400 rounded-full transition-all duration-500"></div>
      </button>
    </ElementLayout>
  );
};

export default Button012;
