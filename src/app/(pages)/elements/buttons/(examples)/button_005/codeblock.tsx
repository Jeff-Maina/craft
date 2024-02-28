import { buttonCompProps } from "../../Interfaces";

const javascript: string = `// Install lucide-react for icons.
import { ArrowRight } from 'lucide-react';

// component
const Button = () => {
  return (  
    <button className="group/button px-8 py-4 lg:py-5 uppercase lg:text-lg rounded-full border border-zinc-300 !leading-none flex items-center gap-3">
      <span>contact</span>
      <div className="relative overflow-hidden">
        <div className="group-hover/button:translate-x-full group-focus/button:translate-x-full transition-all duration-300">
          <ArrowRight size={18} />
        </div>
        <div className="absolute top-0 left-0 -translate-x-full group-hover/button:translate-x-0 group-focus/button:translate-x-0 transition-all duration-300">
          <ArrowRight size={18} />
        </div>
      </div>
    </button>
  )
}

export default Button;
`;

const typescript: string = `// Install lucide-react for icons.
import { ArrowRight } from 'lucide-react';
import { FC } from 'react'

// component
const Button:FC = () => {
  return (  
    <button className="group/button px-8 py-4 lg:py-5 uppercase lg:text-lg rounded-full border border-zinc-300 !leading-none flex items-center gap-3">
      <span>contact</span>
      <div className="relative overflow-hidden">
        <div className="group-hover/button:translate-x-full group-focus/button:translate-x-full transition-all duration-300">
          <ArrowRight size={18} />
        </div>
        <div className="absolute top-0 left-0 -translate-x-full group-hover/button:translate-x-0 group-focus/button:translate-x-0 transition-all duration-300">
          <ArrowRight size={18} />
        </div>
      </div>
    </button>
  )
}

export default Button;
`;

const button: buttonCompProps = {
  javascript,
  typescript,
  label: "button",
  dateCreated: "Tuesday, 6 Feb 2024",
};

export const tabs = [button];
