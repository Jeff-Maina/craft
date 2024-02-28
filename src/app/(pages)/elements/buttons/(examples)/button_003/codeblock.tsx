import { buttonCompProps } from "../../Interfaces";

const javascript: string = 
`<button className="bg-[#2a2a2a] text-white leading-none p-2 rounded-full flex items-center gap-3 justify-center pl-6 lg:pl-8 group/button active:bg-black outline-blue-500">
  <span className="lg:text-lg">Start project today</span>
  <div className="size-8 md:size-12 scale-[20%] group-hover/button:scale-100 group-focus/button:scale-100 grid place-items-center rounded-full bg-white transition-all duration-300">
    <ArrowUpRight size={20} className="stroke-black opacity-0 group-hover/button:opacity-100 group-focus/button:opacity-100 group-active/button:translate-x-1 group-active/button:-translate-y-1 transition-all duration-300" />
  </div>
</button>
`;

const typescript: string = 
`<button className="bg-[#2a2a2a] text-white leading-none p-2 rounded-full flex items-center gap-3 justify-center pl-6 lg:pl-8 group/button active:bg-black outline-blue-500">
  <span className="lg:text-lg">Start project today</span>
  <div className="size-8 md:size-12 scale-[20%] group-hover/button:scale-100 group-focus/button:scale-100 grid place-items-center rounded-full bg-white transition-all duration-300">
    <ArrowUpRight size={20} className="stroke-black opacity-0 group-hover/button:opacity-100 group-focus/button:opacity-100 group-active/button:translate-x-1 group-active/button:-translate-y-1 transition-all duration-300" />
  </div>
</button>
`;

const button: buttonCompProps = {
  javascript,
  typescript,
  label: "button",
  dateCreated: "Tuesday, 6 Feb 2024",
};

export const tabs = [button];

