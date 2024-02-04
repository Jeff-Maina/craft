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
            className="flex flex-col border-r w-[90%] h-full bg-white"
          >
            <header className="flex justify-end border-b border-zinc-200/60">
              <button
                onClick={CloseMenu}
                className="size-16 border-l grid place-items-center border-zinc-200/60"
              >
                <CancelSvg className="h-[25px] w-[25px] fill-black" />
              </button>
            </header>
            <div className="p-8 font-satoshi-medium text-zinc-400">
              <p>Navigation.</p>
            </div>
            <div className="">
              <ul className="w-full text-black font-satoshi-bold text-3xl flex flex-col divide-y divide-zinc-200/60 leading-none border-t border-b border-zinc-200/60">
                <li className="p-8">Components.</li>
                <li className="p-8">Sections.</li>
                <li className="p-8">Elements.</li>
                <li className="p-8">Pages.</li>
              </ul>
            </div>
            <footer className="absolute bottom-0 border-t border-zinc-200/60 w-full grid grid-cols-2 divide-x divide-zinc-200/60 text-zinc-400">
              <div className="p-8 ">
                <p className="font-satoshi-medium">Craft</p>
              </div>
              <div className="grid place-items-center">
                <p className="font-satoshi-medium">2024</p>
              </div>
            </footer>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default NavMenu;
