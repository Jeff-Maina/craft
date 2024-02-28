import { buttonCompProps } from "../../Interfaces";

const javascript: string = `// install framer motion;
import { AnimatePresence, motion } from "framer-motion";

// motion variants;
const ButtonVariants = {
  initial: { y: "20%" },
  active: {
    y: "-50%",
    transition: {
      y: {
        duration: 0.3,
      },
    },
  },
  inactive: {
    y: "-120%",
    transition: { y: {
        duration: 0.3,
      },
    },
  },
};

const Button = () => {

  const [isButtonHovered, setButtonHovered] = useState(false);
  const hoverButton = () => setButtonHovered(true);
  const unHoverButton = () => setButtonHovered(false);

  return (
    <button
      onMouseEnter={hoverButton}
      onMouseLeave={unHoverButton}
      className="border border-black bg-white leading-none p-5 px-10 rounded-full group/button active:scale-105 outline-blue-500 relative isolate overflow-hidden transition-all duration-300"
     >
      <span className="relative lg:text-lg text-black group-hover/button:text-white transition-colors duration-300"> Join us today</span>
        <AnimatePresence mode="wait">
          {isButtonHovered ? (
            <motion.div
              variants={ButtonVariants}
              initial="initial"
              animate="active"
              exit="inactive"
              className="absolute bg-[#2a2a2a] size-52 rounded-full -z-10 top-2/4 left-0 pointer-events-none"
              ></motion.div>
          ) : null}
        </AnimatePresence>
      </button>
    )
}
export default Button;
`;

const typescript: string = `// install framer-motion;
import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

// motion variants;
const ButtonVariants = {
  initial: {
    y: "20%",
  },
  active: {
    y: "-50%",
    transition: {
      y: {
        duration: 0.3,
      },
    },
  },
  inactive: {
    y: "-120%",
    transition: {
      y: {
        duration: 0.3,
      },
    },
  },
};

const Button:FC = () => {

  const [isButtonHovered, setButtonHovered] = useState(false);
  const hoverButton: () => void = () => setButtonHovered(true);
  const unHoverButton: () => void = () => setButtonHovered(false);

  return (
    <button
      onMouseEnter={hoverButton}
      onMouseLeave={unHoverButton}
      className="border border-black bg-white leading-none p-5 px-10 rounded-full group/button active:scale-105 outline-blue-500 relative isolate overflow-hidden transition-all duration-300"
     >
      <span className="relative lg:text-lg text-black group-hover/button:text-white transition-colors duration-300"> Join us today</span>
        <AnimatePresence mode="wait">
          {isButtonHovered ? (
            <motion.div
              variants={ButtonVariants}
              initial="initial"
              animate="active"
              exit="inactive"
              className="absolute bg-[#2a2a2a] size-52 rounded-full -z-10 top-2/4 left-0 pointer-events-none"
              ></motion.div>
          ) : null}
        </AnimatePresence>
      </button>
    )
}
export default Button;
`;

const button: buttonCompProps = {
  javascript,
  typescript,
  label: "button",
  dateCreated: "Tuesday, 6 February 2024",
};

export const tabs = [button];

