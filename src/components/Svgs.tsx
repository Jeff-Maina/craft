import { FC } from "react";

interface SvgProps {
    className?: React.ComponentProps<'div'>['className'];
}

export const CancelSvg: FC<SvgProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47.5 47.5"
      id="cancel"
      className={className}
    >
      <defs>
        <clipPath id="a">
          <path d="M0 38h38V0H0v38Z"></path>
        </clipPath>
      </defs>
      <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
        <path
          d="m23.238 18.996 9.883 9.883a3 3 0 1 1-4.242 4.242l-9.883-9.883-9.883 9.883a3 3 0 1 1-4.242-4.243l9.883-9.882-9.907-9.907A3 3 0 0 1 9.09 4.847l9.906 9.906 9.883-9.882A2.992 2.992 0 0 1 31 3.993a3 3 0 0 1 2.121 5.121l-9.883 9.882Z"
        ></path>
      </g>
    </svg>
  );
};
