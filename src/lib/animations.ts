type variants = {
    initial: Object,
    active: Object,
    inactive: Object
}

export const opacityVariants: variants = {
    initial: {
        opacity: 0
    },
    active: {
        opacity: 1,
        transition: {
            opacity: {
                duration: 0.3
            }
        }
    }
    , inactive: {
        opacity: 0,
        transition: {
            opacity: {
                duration: 0.3
            }
        }
    }
}

export const heightVariants: variants = {
    initial: {
        height: 0,
    },
    active: {
        height: "auto",
        transition: {
            duration: 0.15,
        },
    },
    inactive: {
        height: 0,
    },
}

export const MaskVariants: variants = {
    initial: {
        opacity: 0,
    },
    active: {
        opacity: 1,
        transition: {
            opacity: {
                duration: 0.3,
                type: "tween",
            },
        },
    },
    inactive: {
        opacity: 0,
        transition: {
            opacity: {
                duration: 0.3,
                type: "tween",
                delay: 0.2,
            },
        },
    },
}

export const NavMenuVariants: variants = {
    initial: {
        x: "-100%",
    },
    active: {
        x: "0%",
        transition: {
            x: {
                duration: 0.3,
                delay: 0.3,
                type: "tween",
            },
        },
    },
    inactive: {
        x: "-100%",
        transition: {
            x: {
                duration: 0.3,
                type: "tween",
            },
        },
    },
}

export const ModalVariants: variants = {
    initial: {
        y: "5%",
        opacity: 0,
    },
    active: {
        y: "0%",
        opacity: 1,
        transition: {
            y: {
                duration: 0.3,
            },
            opacity: {
                duration: 0.3,
            },
        }
    },
    inactive: {
        y: "5%",
        opacity: 0,
        transition: {
            y: {
                duration: 0.3,
            },
            opacity: {
                duration: 0.3,
            },
        }
    }
}

