import { linkCompProps } from "../../Interfaces";

const vjs: string = `export const textVariants = {
  initial: {
    x: 0,
  },
  active: {
    x: "110%",
    transition: {
      x: {
        duration: 0.7,
        delay: 0.15,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    },
  },
  inactive: {
    x: 0,
    transition: {
      x: {
        duration: 0,
      },
    },
  },
};

export const textVariants2 = {
  initial: {
    x: "-110%",
  },
  active: {
    x: "0%",
    transition: {
      x: {
        duration: 0.7,
        delay: 0.15,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    },
  },
  inactive: {
    x: "-110%",
    transition: {
      x: {
        duration: 0,
      },
    },
  },
};

export const lineVariants = {
  initial: {
    x: 0,
  },
  active: {
    x: "110%",
    transition: {
      x: {
        duration: 0.8,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    },
  },
  inactive: {
    x: 0,
    transition: {
      x: {
        duration: 0,
      },
    },
  },
};

export const lineVariants2 = {
  initial: {
    x: "-110%",
  },
  active: {
    x: "0%",
    transition: {
      x: {
        duration: 0.8,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    },
  },
  inactive: {
    x: "-110%",
    transition: {
      x: {
        duration: 0,
      },
    },
  },
};

export const iconVariants = {
  initial: {
    scale: 0,
  },
  hidden: {
    scale: 0,
  },
  active: {
    scale: 1,
  },
};

export const SvgVariants = {
  initial: {
    transform: "translate(-130%,130%)",
    opacity: 0,
  },
  hidden: {
    transform: "translate(-130%,130%)",
    opacity: 0,
    transition: {
      duration: 0.2,
      opacity: {
        duration: 0,
      },
    },
  },
  active: {
    transform: "translate(0%,0%)",
    opacity: 1,
    transition: {
      transform: {
        duration: 0.3,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
      opacity: {
        duration: 0.4,
      },
    },
  },
};
`;
const vts: string = `import { motion, Variants } from "framer-motion";

export const textVariants: Variants = {
  initial: {
    x: 0,
  },
  active: {
    x: "110%",
    transition: {
      x: {
        duration: 0.7,
        delay: 0.15,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    },
  },
  inactive: {
    x: 0,
    transition: {
      x: {
        duration: 0,
      },
    },
  },
};

export const textVariants2: Variants = {
  initial: {
    x: "-110%",
  },
  active: {
    x: "0%",
    transition: {
      x: {
        duration: 0.7,
        delay: 0.15,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    },
  },
  inactive: {
    x: "-110%",
    transition: {
      x: {
        duration: 0,
      },
    },
  },
};

export const lineVariants: Variants = {
  initial: {
    x: 0,
  },
  active: {
    x: "110%",
    transition: {
      x: {
        duration: 0.8,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    },
  },
  inactive: {
    x: 0,
    transition: {
      x: {
        duration: 0,
      },
    },
  },
};

export const lineVariants2: Variants = {
  initial: {
    x: "-110%",
  },
  active: {
    x: "0%",
    transition: {
      x: {
        duration: 0.8,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    },
  },
  inactive: {
    x: "-110%",
    transition: {
      x: {
        duration: 0,
      },
    },
  },
};

export const iconVariants: Variants = {
  initial: {
    scale: 0,
  },
  hidden: {
    scale: 0,
  },
  active: {
    scale: 1,
  },
};

export const SvgVariants: Variants = {
  initial: {
    transform: "translate(-130%,130%)",
    opacity: 0,
  },
  hidden: {
    transform: "translate(-130%,130%)",
    opacity: 0,
    transition: {
      duration: 0.2,
      opacity: {
        duration: 0,
      },
    },
  },
  active: {
    transform: "translate(0%,0%)",
    opacity: 1,
    transition: {
      transform: {
        duration: 0.3,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
      opacity: {
        duration: 0.4,
      },
    },
  },
};`;

const linkVariants: linkCompProps = {
  javascript: vjs,
  typescript: vts,
  label: "Variants",
  dateCreated: "Monday, 19 February 2024",
};

const ljs: string = `import { textVariants,textVariants2,lineVariants,lineVariants2,iconVariants,SvgVariants }
import { motion } from 'framer-motion'

const Link: FC = () => {
  const [isLinkHovered, setLinkHovered] = useState(false);
  const hoverLink => setLinkHovered(true);
  const unhoverlink => setLinkHovered(false);
  const iconRef = useRef(null);

  // move the indicator
  const moveIcon = ({
    clientX,
    clientY,
  }) => {
    const moveContainerY = gsap.quickTo(iconRef.current, "top", {
      duration: 0.4,
      ease: "power3",
    });
    const moveContainerX = gsap.quickTo(iconRef.current, "left", {
      duration: 0.4,
      ease: "power3",
    });

    const icon = iconRef.current;
    if (!icon) return;

    let { top, left, width } = icon.getBoundingClientRect();

    moveContainerX(clientX - left + width);
    moveContainerY(clientY - top);
  };

  return (
    <a
    href=""
    className="font-satoshi-medium lg:text-4xl relative"
    onMouseEnter={hoverLink}
    onMouseLeave={unhoverlink}
    onMouseMove={(e) => moveIcon(e)}
  >
    <div className="relative overflow-hidden">
      <motion.p
        variants={textVariants}
        initial="initial"
        animate={isLinkHovered ? "active" : "inactive"}
      >
        Watch now
      </motion.p>
      <motion.p
        variants={textVariants2}
        initial="initial"
        animate={isLinkHovered ? "active" : "inactive"}
        className="absolute inset-0"
      >
        Watch now
      </motion.p>
    </div>
    <div className="relative overflow-hidden mt-1">
      <motion.div
        variants={lineVariants}
        initial="initial"
        animate={isLinkHovered ? "active" : "inactive"}
        className="h-[2px] w-full bg-red-500"
      ></motion.div>
      <motion.div
        variants={lineVariants2}
        initial="initial"
        animate={isLinkHovered ? "active" : "inactive"}
        className="h-[2px] w-full bg-red-500 absolute inset-0"
      ></motion.div>
    </div>
    <motion.div
      ref={iconRef}
      variants={iconVariants}
      initial="initial"
      animate={isLinkHovered ? "active" : "inactive"}
      className="bg-red-500 size-12 rounded-full absolute inset-0 grid place-items-center"
    >
      <motion.div
        variants={SvgVariants}
        initial="initial"
        animate={isLinkHovered ? "active" : "inactive"}
      >
        <PlayIcon className="fill-white stroke-white h-[16px] w-[16px]" />
      </motion.div>
    </motion.div>
  </a>
  )
}

export default Link;
`;
const lts: string = `import { textVariants,textVariants2,lineVariants,lineVariants2,iconVariants,SvgVariants }
import { motion } from 'framer-motion'
import { FC } from 'React'

const Link: FC = () => {
  const [isLinkHovered, setLinkHovered] = useState(false);
  const hoverLink: () => void = () => setLinkHovered(true);
  const unhoverlink: () => void = () => setLinkHovered(false);
  const iconRef = useRef<HTMLDivElement>(null);

  // move the indicator
  const moveIcon: MouseEventHandler = ({
    clientX,
    clientY,
  }: MouseEvent<HTMLButtonElement>) => {
    const moveContainerY = gsap.quickTo(iconRef.current, "top", {
      duration: 0.4,
      ease: "power3",
    });
    const moveContainerX = gsap.quickTo(iconRef.current, "left", {
      duration: 0.4,
      ease: "power3",
    });

    const icon = iconRef.current;
    if (!icon) return;

    let { top, left, width } = icon.getBoundingClientRect();

    moveContainerX(clientX - left + width);
    moveContainerY(clientY - top);
  };

  return (
    <a
    href=""
    className="font-satoshi-medium lg:text-4xl relative"
    onMouseEnter={hoverLink}
    onMouseLeave={unhoverlink}
    onMouseMove={(e) => moveIcon(e)}
  >
    <div className="relative overflow-hidden">
      <motion.p
        variants={textVariants}
        initial="initial"
        animate={isLinkHovered ? "active" : "inactive"}
      >
        Watch now
      </motion.p>
      <motion.p
        variants={textVariants2}
        initial="initial"
        animate={isLinkHovered ? "active" : "inactive"}
        className="absolute inset-0"
      >
        Watch now
      </motion.p>
    </div>
    <div className="relative overflow-hidden mt-1">
      <motion.div
        variants={lineVariants}
        initial="initial"
        animate={isLinkHovered ? "active" : "inactive"}
        className="h-[2px] w-full bg-red-500"
      ></motion.div>
      <motion.div
        variants={lineVariants2}
        initial="initial"
        animate={isLinkHovered ? "active" : "inactive"}
        className="h-[2px] w-full bg-red-500 absolute inset-0"
      ></motion.div>
    </div>
    <motion.div
      ref={iconRef}
      variants={iconVariants}
      initial="initial"
      animate={isLinkHovered ? "active" : "inactive"}
      className="bg-red-500 size-12 rounded-full absolute inset-0 grid place-items-center"
    >
      <motion.div
        variants={SvgVariants}
        initial="initial"
        animate={isLinkHovered ? "active" : "inactive"}
      >
        <PlayIcon className="fill-white stroke-white h-[16px] w-[16px]" />
      </motion.div>
    </motion.div>
  </a>
  )
}

export default Link012;
`;

const linkCode: linkCompProps = {
  javascript: ljs,
  typescript: lts,
  label: "Link",
  dateCreated: "Monday, 19 February 2024",
};

export const tabs = [linkVariants, linkCode];
