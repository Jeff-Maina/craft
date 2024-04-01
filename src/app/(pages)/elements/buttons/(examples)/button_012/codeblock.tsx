import { buttonCompProps } from "../../Interfaces";

const javascript: string = `import { Plus } from "lucide-react";

const Button = () => {
  return (
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
  );
};

export default Button;`;

const typescript: string = `import { Plus } from "lucide-react";
import { FC } from "react";

const Button: FC = () => {
  return (
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
  );
};

export default Button;`;

const button: buttonCompProps = {
  javascript,
  typescript,
  label: "button",
  dateCreated: "Monday, 1 April 2024",
};

export const tabs = [button];
