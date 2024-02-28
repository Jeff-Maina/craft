import { linkCompProps } from "../../Interfaces";

const javascript: string = `const Link = () => {
  return (
      <a href="" className="group/link relative">
        <span className="text-xl lg:text-2xl underline underline-offset-4 decoration-zinc-300">Directories</span>
        <div className="absolute bottom-[1px] h-[2px] left-0 w-0 bg-black group-hover/link:w-full transition-all duration-300"></div>
      </a>
  );
};

export default Link;`;

const typescript: string = `import { FC } from 'react';

const Link:FC = () => {
  return (
      <a href="" className="group/link relative">
        <span className="text-xl lg:text-2xl underline underline-offset-4 decoration-zinc-300">Directories</span>
        <div className="absolute bottom-[1px] h-[2px] left-0 w-0 bg-black group-hover/link:w-full transition-all duration-300"></div>
      </a>
  );
};

export default Link;`;
const link: linkCompProps = {
  javascript,
  typescript,
  label: "link",
  dateCreated: "Tuesday, 13 February 2024",
};

export const tabs = [link];
