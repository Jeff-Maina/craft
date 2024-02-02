import { FC } from "react";

interface SvgProps {
  className?: React.ComponentProps<"div">["className"];
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
        <path d="m23.238 18.996 9.883 9.883a3 3 0 1 1-4.242 4.242l-9.883-9.883-9.883 9.883a3 3 0 1 1-4.242-4.243l9.883-9.882-9.907-9.907A3 3 0 0 1 9.09 4.847l9.906 9.906 9.883-9.882A2.992 2.992 0 0 1 31 3.993a3 3 0 0 1 2.121 5.121l-9.883 9.882Z"></path>
      </g>
    </svg>
  );
};

export const DarkModeSvg: FC<SvgProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
