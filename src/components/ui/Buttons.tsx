import { ArrowRight } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { FC } from "react";

interface ButtonProps {
  label: string;
}

const Button: FC<LinkProps & ButtonProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="border text-sm md:text-base w-full max-w-sm  border-zinc-200/60 lg:border-zinc-200 bg-zinc-50 hover:bg-black hover:text-white flex items-center justify-center h-14 md:h-16 font-satoshi-medium gap-2 lg:text-xl transition-all duration-150"
    >
      {label}
      <ArrowRight className="h-[20px] w-[20px]" />
    </Link>
  );
};

export default Button;
