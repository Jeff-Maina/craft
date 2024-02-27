export const MaskVariants = {
    initial: {
      opacity: 0,
    },
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
    },
  };
  
  export const ModalVariants = {
    initial: {
      x: "100%",
    },
    active: {
      x: "0%",
      transition: {
        x: {
          type: "tween",
          duration: 0.4,
          ease: "easeOut",
        },
      },
    },
    inactive: {
      x: "100%",
      transition: {
        x: {
          type: "tween",
          duration: 0.4,
          ease: "easeOut",
        },
      },
    },
  };