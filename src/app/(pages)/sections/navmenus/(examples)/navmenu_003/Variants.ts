import { Variants } from "framer-motion"

export const MenuVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 0.97
    }
    , active: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4
        }
    }, inactive: {
        opacity: 0,
        scale: 0.97, transition: {
            duration: 0.4
        }
    }
}

export const LinkVariants: Variants = {
    initial: {
        y: "100%",
    },
    active: {
        y: "0%",
        transition: {
            y: {
                duration: 0.2,
                delay: 0.2
            },
        },
    },
    inactive: {
        y: "100%",
        transition: {
            y: {
                duration: 0.2,
            },
        },
    },
};
