import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { CancelSvg } from "./Svgs";

interface NavProps {
  isMenuActive: boolean;
  CloseMenu: any;
}

const MenuVariants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
  },
  inactive: {
    opacity: 0,
  },
};

const NavMenu: FC<NavProps> = ({ isMenuActive, CloseMenu }) => {
  return (
    <AnimatePresence>
      {isMenuActive && (
        <motion.section
          variants={MenuVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="w-screen h-screen top-0 left-0 fixed bg-white z-50 flex flex-col gap-16"
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
          <footer className="absolute bottom-0 p-6">
            <p className="font-satoshi-medium">Craft</p>
          </footer>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default NavMenu;
