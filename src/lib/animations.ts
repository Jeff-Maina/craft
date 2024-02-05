export const opacityVariants = {
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

export const heightVariants = {
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