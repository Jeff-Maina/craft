import { linkCompProps } from "../../Interfaces";

const javascript: string = `<a href="#" className="group/link relative max-w-fit overflow-hidden">
  <span className="lg:text-xl">Read more</span>
  <div className="absolute bottom-0 h-[1px] w-full bg-black -translate-x-[150%]  group-hover/link:translate-x-0 transition-all duration-500 ease-in-out"></div>
  <div className="absolute bottom-0 h-[1px] w-full bg-black group-hover/link:translate-x-[150%]  transition-all duration-500 ease-in-out"></div>
</a>`;

const typescript: string = `<a href="#" className="group/link relative max-w-fit overflow-hidden">
  <span className="lg:text-xl">Read more</span>
  <div className="absolute bottom-0 h-[1px] w-full bg-black -translate-x-[150%]  group-hover/link:translate-x-0 transition-all duration-500 ease-in-out"></div>
  <div className="absolute bottom-0 h-[1px] w-full bg-black group-hover/link:translate-x-[150%]  transition-all duration-500 ease-in-out"></div>
</a>`;

const link: linkCompProps = {
  javascript,
  typescript,
  label: "link",
  dateCreated: "Friday, 6 February 2024",
};

export const tabs = [link];
