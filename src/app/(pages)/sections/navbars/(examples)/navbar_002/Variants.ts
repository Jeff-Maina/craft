// Animation Variants;
export const heightVariants = {
    initial: { height: 0 },
    active: {
        height: "auto",
        transition: {
            height: {
                duration: 0.4,
            },
        },
    },
    inactive: {
        height: 0,
        transition: {
            height: {
                duration: 0.4,
            },
        },
    },
};
export const widthVariants = {
    initial: { width: 0 },
    active: {
        width: "auto",
        transition: {
            width: {
                duration: 0.5,
            },
        },
    },
    inactive: {
        width: 0,
        transition: {
            width: {
                duration: 0.6,
                // ease: [0.785, 0.135, 0.15, 0.86],
            },
        },
    },
};
export const opacityVariants = {
    initial: { opacity: 0 },
    active: {
        opacity: 1,
        transition: {
            opacity: {
                duration: 0.4,
            },
        },
    },
    inactive: {
        opacity: 0,
        transition: {
            opacity: {
                duration: 0.4,
            },
        },
    },
};

export const NavLinkVariants = {
    initial: {
        opacity: 0,
    },
    active: (index: number) => ({
        opacity: [1, 0, 1],
        transition: {
            opacity: {
                duration: 0.2,
                delay: 0.2 + 0.1 * index,
            },
        },
    }),
    exit: {
        opacity: 0,
        transition: {
            opacity: {
                duration: 0.2,
            },
        },
    },
    hover: (index: number) => ({
        opacity: [1, 0, 1],
        transition: {
            opacity: {
                duration: 0.2,
                delay: 0.1 * index,
            },
        },
    }),
};
