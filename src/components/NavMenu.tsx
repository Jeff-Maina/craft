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
          className="w-screen h-screen top-0 left-0 fixed bg-[#1a1a1a] p-6 flex flex-col gap-16"
        >
          <header className="flex justify-end">
            <button
              onClick={CloseMenu}
              className="size-16 rounded-full border border-green-700 grid place-items-center"
            >
              <CancelSvg className="h-[25px] w-[25px] fill-green-200" />
            </button>
          </header>
          <div className="">
            <ul className="w-full text-green-200 font-satoshi-bold text-4xl gap-5 flex flex-col">
              <li className="">Components.</li>
              <li className="">Sections.</li>
              <li className="">Elements.</li>
              <li className="">Pages.</li>
            </ul>
          </div>
          s
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default NavMenu;
