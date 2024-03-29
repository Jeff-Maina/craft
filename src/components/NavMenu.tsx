// /component imports
import { CancelSvg } from "./Svgs";

// 3rd party library imports
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

// animation variants
import { MaskVariants, NavMenuVariants } from "@/lib/animations";
import { websitePages } from "@/data/AppData";
import Link from "next/link";
import Motiondiv from "./Motiondiv";

interface NavProps {
  isMenuActive: boolean;
  CloseMenu: any;
}

const NavMenu: FC<NavProps> = ({ isMenuActive, CloseMenu }) => {
  return (
    <Motiondiv
      variants={MaskVariants}
      isAnimatePresence={true}
      isAnimationActive={isMenuActive}
      className="w-screen h-screen top-0 left-0 fixed bg-[#00000079] backdrop-blur-sm z-[999]"
    >
      <motion.div
        variants={NavMenuVariants}
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
            {websitePages.map((page, index) => {
              return (
                <Link href={page.path} key={index} onClick={CloseMenu}>
                  <li className="p-8">{page.page}.</li>
                </Link>
              );
            })}
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
    </Motiondiv>
  );
};

export default NavMenu;

// *
