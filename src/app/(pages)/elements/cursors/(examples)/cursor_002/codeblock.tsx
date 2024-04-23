import { cursorCompProps } from "../../Interfaces";

const javascript: string = `import { useAnimate } from "framer-motion";

const Cursor = () => {
  const [scope, animate] = useAnimate();

  const glow = (event) => {
    const el = event.currentTarget;
    el.style.backgroundColor = "red";
    setTimeout(() => {
      el.style.backgroundColor = "transparent";
    }, 500);
  };
  
  return (
    <div className="w-full h-full grid place-items-center relative cursor-none bg-white">
        <p className="uppercase text-6xl tracking-tighter relative z-20 pointer-events-none text-white mix-blend-difference">
          pixel.
        </p>
        <div
          style={{
            gridTemplateColumns: "repeat(18, minmax(0, 1fr))",
            gridTemplateRows: "repeat(10, minmax(0, 1fr))",
          }}
          className="absolute inset-0 left-0 top-0 z-10 grid"
        >
          {[...Array(200)].map((block, index) => (
            <div
              key={index}
              onMouseEnter={glow}
              className="w-full h-full bg-white"
            ></div>
          ))}
        </div>
     </div>
  );
};

export default Cursor;
`;

const typescript: string = `import { useAnimate } from "framer-motion";
import { FC, MouseEvent } from "react";

const Cursor: FC = () => {
  const [scope, animate] = useAnimate();

  const glow = (event: MouseEvent<HTMLDivElement>) => {
    const el = event.currentTarget as HTMLDivElement;
    el.style.backgroundColor = "red";
    setTimeout(() => {
      el.style.backgroundColor = "transparent";
    }, 500);
  };

  return (
    <div className="w-full h-full grid place-items-center relative cursor-none bg-white">
        <p className="uppercase text-6xl tracking-tighter relative z-20 pointer-events-none text-white mix-blend-difference">
          pixel.
        </p>
        <div
          style={{
            gridTemplateColumns: "repeat(18, minmax(0, 1fr))",
            gridTemplateRows: "repeat(10, minmax(0, 1fr))",
          }}
          className="absolute inset-0 left-0 top-0 z-10 grid"
        >
          {[...Array(200)].map((block, index) => (
            <div
              key={index}
              onMouseEnter={glow}
              className="w-full h-full bg-white"
            ></div>
          ))}
        </div>
     </div>
  );
};

export default Cursor;
`;

const link: cursorCompProps = {
  javascript,
  typescript,
  label: "cursor",
  dateCreated: "Tuesday, 20 February 2024",
};

export const tabs = [link];
