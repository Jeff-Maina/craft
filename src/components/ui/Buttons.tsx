import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Url } from "url";

interface ButtonProps {
  path: any;
  label: string;
}

const Button: FC<ButtonProps> = ({ path, label }) => {
  return (
    <Link
      href={path}
      className="border w-full max-w-sm border-zinc-200/60 lg:border-zinc-200 bg-zinc-50 hover:bg-black hover:text-white flex items-center justify-center h-16 font-satoshi-medium gap-2 lg:text-lg"
    >
      {label}
      <ArrowRight className="h-[20px] w-[20px]"/>
    </Link>
  );
};

export default Button;
