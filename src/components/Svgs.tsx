import { FC } from "react";

interface SvgProps {
  className?: React.ComponentProps<"div">["className"];
}

export const CancelSvg: FC<SvgProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className={className}
      viewBox="0 0 16 16"
      id="cancel"
    >
      <path
        d="M2.58859116,2.7156945 L2.64644661,2.64644661 C2.82001296,2.47288026 3.08943736,2.45359511 3.2843055,2.58859116 L3.35355339,2.64644661 L8,7.293 L12.6464466,2.64644661 C12.8417088,2.45118446 13.1582912,2.45118446 13.3535534,2.64644661 C13.5488155,2.84170876 13.5488155,3.15829124 13.3535534,3.35355339 L8.707,8 L13.3535534,12.6464466 C13.5271197,12.820013 13.5464049,13.0894374 13.4114088,13.2843055 L13.3535534,13.3535534 C13.179987,13.5271197 12.9105626,13.5464049 12.7156945,13.4114088 L12.6464466,13.3535534 L8,8.707 L3.35355339,13.3535534 C3.15829124,13.5488155 2.84170876,13.5488155 2.64644661,13.3535534 C2.45118446,13.1582912 2.45118446,12.8417088 2.64644661,12.6464466 L7.293,8 L2.64644661,3.35355339 C2.47288026,3.17998704 2.45359511,2.91056264 2.58859116,2.7156945 L2.64644661,2.64644661 L2.58859116,2.7156945 Z"
      ></path>
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
        d="M19.966,4.527,16.418.936A3.545,3.545,0,0,0,13.462.044H10.207a1.785,1.785,0,0,0-1.773,1.8V3.635H6.662A1.785,1.785,0,0,0,4.9,5.431V17.4h0A1.785,1.785,0,0,0,6.672,19.2h9.167a1.785,1.785,0,0,0,1.773-1.8V15.6h1.763a1.785,1.785,0,0,0,1.773-1.8V7.221A3.108,3.108,0,0,0,19.966,4.527Zm-5.026-2.5a1.284,1.284,0,0,1,.224.189L18.711,5.8a5.211,5.211,0,0,1,.483.526H16A1.063,1.063,0,0,1,14.94,5.259ZM15.828,17.4H6.662V5.431H8.433v8.376A1.785,1.785,0,0,0,10.208,15.6h5.62Zm3.553-3.591H10.209V1.84h2.958V5.26A2.85,2.85,0,0,0,16,8.125h3.383Z"
        data-name="Path 3543"
        transform="translate(-.997 2.4)"
      ></path>
    </svg>
  );
};

export const DoneSvg: FC<SvgProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="checkmark"
      className={className}
    >
      <g data-name="Layer 2">
        <g data-name="checkmark">
          <rect width="24" height="24" opacity="0"></rect>
          <path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"></path>
        </g>
      </g>
    </svg>
  );
};

export const ChevronSvg: FC<SvgProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
