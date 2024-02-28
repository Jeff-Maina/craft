import { linkCompProps } from "../../Interfaces";

const javascript: string = 
`<a href="#" className="group/link relative max-w-fit overflow-hidden">
  <span className="text-lg lg:text-xl">example@design.com</span>
  <div className="absolute bottom-0 h-[1px] w-full bg-black -translate-x-[250%]  group-hover/link:translate-x-0 transition-all duration-1000 ease-in-out"></div>
  <div className="absolute bottom-0 h-[1px] w-full bg-black group-hover/link:translate-x-[250%]  transition-all duration-1000 ease-in-out"></div>
</a>`;

const typescript: string = 
`<a href="#" className="group/link relative max-w-fit overflow-hidden">
  <span className="text-lg lg:text-xl">example@design.com</span>
  <div className="absolute bottom-0 h-[1px] w-full bg-black -translate-x-[250%]  group-hover/link:translate-x-0 transition-all duration-1000 ease-in-out"></div>
  <div className="absolute bottom-0 h-[1px] w-full bg-black group-hover/link:translate-x-[250%]  transition-all duration-1000 ease-in-out"></div>
</a>`;

const link: linkCompProps = {
  javascript,
  typescript,
  label: "link",
  dateCreated: "Friday, 6 February 2024",
};

export const tabs = [link];