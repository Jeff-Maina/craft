// Variants
export const MaskVariants = {
    initial: {
        opacity: 0,
    },
    active: {
        opacity: 1,
        transition: {
            opacity: {
                duration: 1,
            },
        },
    },
    inactive: {
        opacity: 0,
        transition: {
            opacity: {
                duration: 0.5,
            },
        },
    },
};

export const LinkVariants = {
    initial: {
        y: "-300%",
    },
    active: (index: number) => ({
        y: "0%",
        transition: {
            y: {
                duration: 0.4,
                delay: 0.14 - index * 0.02,
                ease: [0.41, 0.3, 0.5, 0.95],
            },
        },
    }),
    inactive: (index: number) => ({
        y: "300%",
        transition: {
            y: {
                duration: 0.5,
                delay: 0.14 - index * 0.02,
                ease: [0.41, 0.3, 0.5, 0.95],
            },
        },
    }),
};
