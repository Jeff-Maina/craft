"use client";

import ElementLayout from "../../../ElementLayout";
import { tabs } from "./codeblock";

const Link010 = () => {
  return (
    <ElementLayout dependencies={[]} tabs={tabs}>
      <a href="" className="group/link font-graphik-semibold relative overflow-hidden border-b border-black hover:border-lime-500 transition-all duration-500">
        <p className=" lg:text-2xl group-hover/link:-translate-y-[160%] group-hover/link:-rotate-12 transition-all duration-500">join the collective</p>
        <p className=" lg:text-2xl text-lime-500 absolute -bottom-2 left-0 translate-y-[130%] rotate-12 group-hover/link:rotate-0 group-hover/link:-translate-y-2 transition-all duration-500">join the collective</p>
      </a>
    </ElementLayout>
  );
};

export default Link010;
