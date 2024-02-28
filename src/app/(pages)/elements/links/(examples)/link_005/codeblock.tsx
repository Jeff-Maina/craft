import { linkCompProps } from "../../Interfaces";

const javascript: string = `import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const motionVariants = {
  initial: { x: "-100%" },
  active: {
    x: "0%",
    transition: {
      x: {
        duration: 0.5,
      },
    },
  },
  inactive: {
    x: "100%",
    transition: {
      x: {
        duration: 0.4,
      },
    },
  },
};

const Link () => {

  const [isLinkHovered, setLinkHovered] = useState(false),
      hoverLink => setLinkHovered(true),
      unhoverLink => setLinkHovered(false);

  return(
    <a
      href="#"
      onMouseEnter={hoverLink}
      onMouseLeave={unhoverLink}
      className="relative overflow-hidden"
    >
      <span className="text-lg lg:text-xl">join the team</span>
      <AnimatePresence mode="wait">
        {isLinkHovered ? (
          <motion.div
            variants={motionVariants}
            initial="initial"
            animate="active"
            exit="inactive"
            className="h-[1px] bottom-0 absolute w-full bg-black"
          ></motion.div>
        ) : null}
      </AnimatePresence>
    </a>
    );
};

export default Link;
`;

const typescript: string = `import { AnimatePresence, motion, Variants} from 'framer-motion';
import { useState, FC } from 'react';

const motionVariants: Variants = {
  initial: { x: "-100%" },
  active: {
    x: "0%",
    transition: {
      x: {
        duration: 0.5,
      },
    },
  },
  inactive: {
    x: "100%",
    transition: {
      x: {
        duration: 0.4,
      },
    },
  },
};

const Link () => {

  const [isLinkHovered, setLinkHovered] = useState(false),
      hoverLink: () => void = () => setLinkHovered(true),
      unhoverLink: () => void = () => setLinkHovered(false);

  return(
    <a
      href="#"
      onMouseEnter={hoverLink}
      onMouseLeave={unhoverLink}
      className="relative overflow-hidden"
    >
      <span className="text-lg lg:text-xl">join the team</span>
      <AnimatePresence mode="wait">
        {isLinkHovered ? (
          <motion.div
            variants={motionVariants}
            initial="initial"
            animate="active"
            exit="inactive"
            className="h-[1px] bottom-0 absolute w-full bg-black"
          ></motion.div>
        ) : null}
      </AnimatePresence>
    </a>
    );
};

export default Link;
`;

const link: linkCompProps = {
  javascript,
  typescript,
  label: "link",
  dateCreated: "Thursday, 8 February 2024",
};

export const tabs = [link];
