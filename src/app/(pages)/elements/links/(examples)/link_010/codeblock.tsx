import { linkCompProps } from "../../Interfaces";

const javascript: string = 
`const Link = () => {
  return (
      <a href="" className="group/link font-graphik-semibold relative overflow-hidden border-b border-black hover:border-lime-500 transition-all duration-500">
        <p className=" lg:text-2xl group-hover/link:-translate-y-[160%] group-hover/link:-rotate-12 transition-all duration-500">join the collective</p>
        <p className=" lg:text-2xl text-lime-500 absolute -bottom-2 left-0 translate-y-[130%] rotate-12 group-hover/link:rotate-0 group-hover/link:-translate-y-2 transition-all duration-500">join the collective</p>
      </a>
  );
};

export default Link;`;

const typescript: string = `import { FC } from 'react';
const Link:FC = () => {
  return (
      <a href="" className="group/link font-graphik-semibold relative overflow-hidden border-b border-black hover:border-lime-500 transition-all duration-500">
        <p className=" lg:text-2xl group-hover/link:-translate-y-[160%] group-hover/link:-rotate-12 transition-all duration-500">join the collective</p>
        <p className=" lg:text-2xl text-lime-500 absolute -bottom-2 left-0 translate-y-[130%] rotate-12 group-hover/link:rotate-0 group-hover/link:-translate-y-2 transition-all duration-500">join the collective</p>
      </a>
  );
};

export default Link;`;
const link: linkCompProps = {
  javascript,
  typescript,
  label: "link",
  dateCreated: "Wednesday, 14 February 2024",
};

export const tabs = [link];
