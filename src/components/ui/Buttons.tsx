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
      className="m-auto font-satoshi-medium px-6 border border-zinc-700 py-1 lg:text-lg lg:py-2 lg:px-10 rounded hover:bg-black hover:text-white transition-all duration-150"
    >
      {label}
    </Link>
  );
};

export default Button;
