import { buttonCompProps } from "../../Interfaces";

const javascript: string = `<button className="group/button py-3 px-8 text-lg bg-yellow-500 active:bg-yellow-500/90 rounded-[0.8rem] relative">
  <div className="relative overflow-hidden">
    <p className="group-hover/button:-translate-y-full group-focus/button:-translate-y-full transition-all duration-300">
      Create wallet
    </p>
    <p className="absolute min-w-fit group-hover/button:-translate-y-full group-focus/button:-translate-y-full transition-all duration-300">
      Create wallet
    </p>
  </div>
</button>`;

const typescript: string = `<button className="group/button py-3 px-8 text-lg bg-yellow-500 active:bg-yellow-500/90 rounded-[0.8rem] relative">
  <div className="relative overflow-hidden">
    <p className="group-hover/button:-translate-y-full group-focus/button:-translate-y-full transition-all duration-300">
      Create wallet
    </p>
    <p className="absolute min-w-fit group-hover/button:-translate-y-full group-focus/button:-translate-y-full transition-all duration-300">
      Create wallet
    </p>
  </div>
</button>`;


const button: buttonCompProps = {
  javascript,
  typescript,
  label: "button",
  dateCreated: "Friday, 9 Feb 2024",
};

export const tabs = [button];
