import { cursorCompProps } from "../../Interfaces";

const javascript: string = `import { useRef, useState } from "react";
import { useAnimate } from "framer-motion";


const Cursor = () => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [emoji, setEmoji] = useState("✨");
  const [scope, animate] = useAnimate();

  const emojis = ["😂", "⭐️", "✨", "❄️", "❤️", "🖤", "💖"];

  const animateEl = (el: HTMLElement) => {
    animate(
      el,
      {
        y: 100,
        opacity: 0,
        scale: 0.5,
      },
      {
        duration: 1.5,
      }
    );
  };

  const elClass = "absolute text-3xl pointer-events-none";

  const addElements = (x, y) => {
    const container = containerRef.current;
    if (!container) return;
    const el = document.createElement("div");
    el.innerHTML += emoji;
    el.className = elClass;

    el.style.top = y + "px";
    el.style.left = x + "px";
    container.appendChild(el);
    animateEl(el);
    setTimeout(() => {
      container.removeChild(el);
    }, 1100);
  };

  const handleMouseMove = ({ clientX, clientY }) => {
    const container = containerRef.current;
    if (!container) return;
    const { top, left } = container.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    const xDiff = Math.abs(position.x - x);
    const yDiff = Math.abs(position.y - y);
    if (xDiff >= 20 || yDiff >= 20) {
      addElements(x, y);
    } else return;
    setPosition({ x, y });
  };

  return (
     <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="w-full h-full overflow-hidden relative"
      >
        <div className="flex items-center gap-1 absolute bottom-0 left-0 p-4 z-10">
          {emojis.map((emo, index) => (
            <button
              onClick={() => {
                setEmoji(emo);
              }}
              className={\`\${
                emo === emoji
                  ? "border-zinc-400"
                  : "border-zinc-200/ hover:border-zinc-400"
              } size-10 border  transition-all duration-300 \`}
              key={index}
            >
              {emo}
            </button>
          ))}
        </div>
    </div>
  );
};

export default Cursor;
`;
const typescript: string = `import { FC, MouseEvent, useRef, useState } from "react";
import { useAnimate } from "framer-motion";


const Cursor: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [emoji, setEmoji] = useState("✨");
  const [scope, animate] = useAnimate();

  const emojis = ["😂", "⭐️", "✨", "❄️", "❤️", "🖤", "💖"];

  const animateEl = (el: HTMLElement) => {
    animate(
      el,
      {
        y: 100,
        opacity: 0,
        scale: 0.5,
      },
      {
        duration: 1.5,
      }
    );
  };

  const elClass = "absolute text-3xl pointer-events-none";

  const addElements = (x: Number, y: Number) => {
    const container = containerRef.current;
    if (!container) return;
    const el = document.createElement("div");
    el.innerHTML += emoji;
    el.className = elClass;

    el.style.top = y + "px";
    el.style.left = x + "px";
    container.appendChild(el);
    animateEl(el);
    setTimeout(() => {
      container.removeChild(el);
    }, 1100);
  };

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const { top, left } = container.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    const xDiff = Math.abs(position.x - x);
    const yDiff = Math.abs(position.y - y);
    if (xDiff >= 20 || yDiff >= 20) {
      addElements(x, y);
    } else return;
    setPosition({ x, y });
  };

  return (
     <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="w-full h-full overflow-hidden relative"
      >
        <div className="flex items-center gap-1 absolute bottom-0 left-0 p-4 z-10">
          {emojis.map((emo, index) => (
            <button
              onClick={() => {
                setEmoji(emo);
              }}
              className={\`\${
                emo === emoji
                  ? "border-zinc-400"
                  : "border-zinc-200/ hover:border-zinc-400"
              } size-10 border  transition-all duration-300 \`}
              key={index}
            >
              {emo}
            </button>
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
