import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { CancelSvg } from "./Svgs";

interface NavProps {
  isMenuActive: boolean;
  CloseMenu: any;
}

const MenuVariants = {
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
};

const MaskVariants = {
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
        delay: 0.3,
      },
    },
  },
};

const NavMenu: FC<NavProps> = ({ isMenuActive, CloseMenu }) => {
  return (
    <AnimatePresence>
      {isMenuActive && (
        <motion.section
          variants={MaskVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="w-screen h-screen top-0 left-0 fixed bg-[#00000079] backdrop-blur-sm z-50"
        >
          <motion.div
            variants={MenuVariants}
            initial="initial"
            animate="active"
            exit="inactive"
            className="flex flex-col gap-16 border-r w-[90%] h-full bg-white"
          >
            <header className="flex justify-end border-b border-zinc-200/60">
              <button
                onClick={CloseMenu}
                className="size-20 border-l grid place-items-center border-zinc-200/60"
              >
                <CancelSvg className="h-[25px] w-[25px] fill-black" />
              </button>
            </header>
            <div className="p-6">
              <ul className="w-full text-black font-satoshi-bold text-4xl gap-5 flex flex-col">
                <li className="">Components.</li>
                <li className="">Sections.</li>
                <li className="">Elements.</li>
                <li className="">Pages.</li>
              </ul>
            </div>
            <footer className="absolute bottom-0 p-6 border-t border-zinc-200/60 w-full">
              <p className="font-satoshi-medium">Craft</p>
            </footer>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default NavMenu;
