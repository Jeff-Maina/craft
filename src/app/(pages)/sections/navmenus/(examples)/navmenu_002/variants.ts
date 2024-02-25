import { Variants } from "framer-motion";

export const MenuVariants: Variants = {
    initial: {
        opacity: 0,
        y: "-100%",
    },
    active: {
        opacity: 1,
        y: "0%",
        transition: {
            opacity: {
                duration: 1.3,
            },
            y: {
                duration: 1.1,
                ease: [0.9, 0.04, 0.08, 0.99],
            },
        },
    },
    inactive: {
        opacity: 0,
        y: "-100%",
        transition: {
            opacity: {
                duration: 1,
                delay: 0.5,
            },
            y: {
                duration: 1.1,
                delay: 0.5,
                ease: [0.9, 0.04, 0.08, 0.99],
            },
        },
    },
};

export const linkVariants: (index: number) => Variants = (index: number) => ({
    initial: {
        opacity: 0,
        y: "300%",
        x: "-10%",
        rotate: "30deg",
    },
    active: {
        opacity: 1,
        y: "0%",
        x: "0%",
        rotate: "0deg",
        transition: {
            opacity: {
                duration: 0.5,
                delay: 0.8 + index * 0.05,
            },
            y: {
                duration: 0.6,
                delay: 0.8 + index * 0.05,
                ease: "easeOut",
            },
            x: {
                duration: 0.6,
                delay: 0.8 + index * 0.05,
                ease: "easeOut",
            },
            rotate: {
                duration: 0.5,
                delay: 0.8 + index * 0.05,
                ease: "easeOut",
            },
        },
    },
    inactive: {
        opacity: 0,
        y: "300%",
        x: "-10%",
        rotate: "30deg",
        transition: {
            opacity: {
                duration: 0.3,
                delay: 0.4 - index * 0.1,
            },
            y: {
                duration: 0.5,
                delay: 0.4 - index * 0.1,
                ease: "easeIn",
            },
            x: {
                duration: 0.5,
                delay: 0.4 - index * 0.1,
                ease: "easeIn",
            },
            rotate: {
                duration: 0.4,
                delay: 0.4 - index * 0.1,
                ease: "easeIn",
            },
        },
    },
});

export const buttonVariants = {
    initial: {
        opacity: 0,
    },
    active: {
        opacity: 1,
        transition: {
            duration: 0.4,
            delay: 1.4,
        },
    },
    inactive: {
        opacity: 0,
        transition: {
            duration: 0.4,
        },
    },
};

export const closeButtonVariants = {
    initial: {
        opacity: 0,
    },
    active: {
        opacity: 1,
        transition: {
            duration: 0.4,
            delay: 1,
        },
    },
    inactive: {
        opacity: 0,
        transition: {
            duration: 0.4,
        },
    },
};

export const closeLabelVariants = {
    initial: {
        opacity: 0,
        x: "-100%",
        y: "-50%",
    },
    active: {
        opacity: 1,
        x: "0%",
        y: "-50%",
        transition: {
            x: {
                duration: 1,
                delay: 1,
            },
            opacity: {
                duration: 0.5,
                delay: 1,
            },
        },
    },
    inactive: {
        opacity: 0,
        x: "-100%",
        y: "-50%",
        transition: {
            x: {
                duration: 1,
                delay: 0,
            },
            opacity: {
                duration: 0.5,
                delay: 0,
            },
        },
    },
};

export const nestedMenuVariants = {
    initial: {
        opacity: 0,
    },
    active: {
        opacity: 1,
        transition: {
            opacity: {
                duration: 0,
            },
        },
    },
    inactive: {
        opacity: 0,
        transition: {
            delay: 0.6,
        },
    },
};

export const nestedLinkVariants: (index: number) => Variants = (index: number) => ({
    initial: {
        y: "150%",
        opacity: 0,
    },
    active: {
        y: "0%",
        opacity: 1,
        transition: {
            y: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.1 + index * 0.05,
            },
            opacity: {
                duration: 0.7,
                ease: "easeOut",
                delay: 0.1 + index * 0.05,
            },
        },
    },
    inactive: {
        y: "150%",
        opacity: 0,
        transition: {
            y: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.2 - index * 0.05,
            },
            opacity: {
                duration: 0.3,
                ease: "easeOut",
                delay: 0.2 - index * 0.05,
            },
        },
    },
});