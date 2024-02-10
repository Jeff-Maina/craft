const javascript: string = `import { AnimatePresence, motion};
import { useState } from 'react';

const motionVariants = {
  initial: {
    x: "-100%",
  },
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
  )}

export default Link;
`;

const typescript: string = ``;

export const codeblock = {
  javascript,
  typescript,
};
