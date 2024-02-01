import Link from "next/link";
import { FC } from "react";
import { Url } from "url";

interface ButtonProps {
  path: Url;
  label: string;
}

const Button: FC<ButtonProps> = ({ path, label }) => {
  return <Link href={path}>{label}</Link>;
};

export default Button;
