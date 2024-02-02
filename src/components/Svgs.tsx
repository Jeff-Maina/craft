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

export const CopySvg: FC<SvgProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      id="copy"
      className={className}
    >
      <g data-name="Layer 3">
        <path d="M40.63,13H12.38A4.69,4.69,0,0,0,7.7,17.67V57.31A4.69,4.69,0,0,0,12.38,62H40.63a4.69,4.69,0,0,0,4.69-4.69V17.67A4.69,4.69,0,0,0,40.63,13Zm2.69,44.33A2.69,2.69,0,0,1,40.63,60H12.38A2.69,2.69,0,0,1,9.7,57.31V17.67A2.69,2.69,0,0,1,12.38,15H40.63a2.69,2.69,0,0,1,2.69,2.69Z"></path>
        <path d="M51.74,2H23.26a4.58,4.58,0,0,0-4.58,4.57v3.55a1,1,0,0,0,2,0V6.57A2.58,2.58,0,0,1,23.26,4H51.74A2.57,2.57,0,0,1,54.3,6.57V46.44A2.58,2.58,0,0,1,51.74,49H48.5a1,1,0,0,0,0,2h3.24a4.58,4.58,0,0,0,4.57-4.58V6.57A4.57,4.57,0,0,0,51.74,2Z"></path>
      </g>
    </svg>
  );
};
