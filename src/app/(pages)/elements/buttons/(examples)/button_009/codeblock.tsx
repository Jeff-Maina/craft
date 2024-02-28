import { buttonCompProps } from "../../Interfaces";

const javascript: string = `import { useRef } from "react";
import { useAnimate } from "framer-motion";

const Button = () => {
  const buttonRef = useRef(null);
  const [scope, animate] = useAnimate();

  const animateBubble = async (el) => {
    animate( el, { scale: 15, opacity: 0},{ duration: 1 });
  };

  const elementStyle = "size-8 absolute bg-[#7a7a7a] rounded-full opacity-[0.6] z-[5]";

  const addBubbles = ({ clientX, clientY }) => {
    const parent = buttonRef.current;
    if (!parent) return;
    const { top, left } = parent.getBoundingClientRect();

    const bubble = document.createElement("div");
    bubble.className = elementStyle;

    // used 16 because that's the bubble's dimensions / 2
    const x = clientX - (left + 16);
    const y = clientY - (top + 16);

    bubble.style.left = x + "px";
    bubble.style.top = y + "px";
    parent.appendChild(bubble);

    animateBubble(bubble);

    setTimeout(() => {
      parent.removeChild(bubble);
    }, 1100);
  };

  return {
    <button
      ref={buttonRef}
      onClick={addBubbles}
      className="bg-[#2a2a2a] text-white py-4 px-10 rounded-full relative overflow-hidden isolate"
    >
      <span className="text-xl relative z-10">click me</span>
    </button>
  }
}

export default Button;`;

const typescript: string = `import { MouseEvent, MouseEventHandler, useRef } from "react";
import { useAnimate } from "framer-motion";

interface BubbleElement extends HTMLElement {
  className: string;
  style: CSSStyleDeclaration;
}

const Button = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [scope, animate] = useAnimate();

  const animateBubble = async (el: BubbleElement) => {
    animate( el, { scale: 15, opacity: 0},{ duration: 1 });
  };

  const elementStyle = "size-8 absolute bg-[#7a7a7a] rounded-full opacity-[0.6] z-[5]";

  const addBubbles: MouseEventHandler = ({ clientX, clientY }: MouseEvent) => {
    const parent = buttonRef.current;
    if (!parent) return;
    const { top, left } = parent.getBoundingClientRect();

    const bubble = document.createElement("div");
    bubble.className = elementStyle;

    // used 16 because that's the bubble's dimensions / 2
    const x = clientX - (left + 16);
    const y = clientY - (top + 16);

    bubble.style.left = x + "px";
    bubble.style.top = y + "px";
    parent.appendChild(bubble);

    animateBubble(bubble);

    setTimeout(() => {
      parent.removeChild(bubble);
    }, 1100);
  };

  return {
    <button
      ref={buttonRef}
      onClick={addBubbles}
      className="bg-[#2a2a2a] text-white py-4 px-10 rounded-full relative overflow-hidden isolate"
    >
      <span className="text-xl relative z-10">click me</span>
    </button>
  }
}

export default Button;`;
const button: buttonCompProps = {
  javascript,
  typescript,
  label: "button",
  dateCreated: "Monday, 19 February 2024",
};

export const tabs = [button];
