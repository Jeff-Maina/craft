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
      width="24"
      height="24"
      viewBox="0 0 24 24"
      id="copy"
      className={className}
    >
      <path fill="none" d="M0,0H24V24H0Z" data-name="Path 3641"></path>
      <path
        fill="#525863"
        d="M19.966,4.527,16.418.936A3.545,3.545,0,0,0,13.462.044H10.207a1.785,1.785,0,0,0-1.773,1.8V3.635H6.662A1.785,1.785,0,0,0,4.9,5.431V17.4h0A1.785,1.785,0,0,0,6.672,19.2h9.167a1.785,1.785,0,0,0,1.773-1.8V15.6h1.763a1.785,1.785,0,0,0,1.773-1.8V7.221A3.108,3.108,0,0,0,19.966,4.527Zm-5.026-2.5a1.284,1.284,0,0,1,.224.189L18.711,5.8a5.211,5.211,0,0,1,.483.526H16A1.063,1.063,0,0,1,14.94,5.259ZM15.828,17.4H6.662V5.431H8.433v8.376A1.785,1.785,0,0,0,10.208,15.6h5.62Zm3.553-3.591H10.209V1.84h2.958V5.26A2.85,2.85,0,0,0,16,8.125h3.383Z"
        data-name="Path 3543"
        transform="translate(-.997 2.4)"
      ></path>
    </svg>
  );
};

export const DoneSvg: FC<SvgProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="checkmark" className={className}>
      <g data-name="Layer 2">
        <g data-name="checkmark">
          <rect width="24" height="24" opacity="0"></rect>
          <path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"></path>
        </g>
      </g>
    </svg>
  );
};
