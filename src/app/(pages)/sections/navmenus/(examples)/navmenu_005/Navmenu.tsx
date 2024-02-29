import { FC } from "react";
import { MaskProps } from "./Interfaces";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { LinkVariants, MaskVariants } from "./Variants";

const Links = [
  "Introduction",
  "Current Market",
  "Products",
  "Team",
  "Careers",
  "White Paper",
  "FAQ",
  "Contact",
];

const NavMenu: FC<MaskProps> = ({ isMenuActive, closeMenu }) => {
  return (
    <AnimatePresence mode="wait">
      {isMenuActive ? (
        <motion.section
          variants={MaskVariants}
          initial="initial"
          animate="active"
          exit="inactive"
          className="absolute top-full left-0 w-full h-[90vh]"
        >
          <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3 grid-rows-4 py-[3px] lg:py-[5px] gap-[3px] lg:gap-[5px] overflow-hidden">
            {Links.map((link, index) => {
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={LinkVariants}
                  initial="initial"
                  animate="active"
                  exit="inactive"
                  onClick={closeMenu}
                  className="group/link w-full h-full bg-black rounded-[0.3rem] p-2 lg:p-4 text-sm lg:text-base flex flex-col justify-between hover:bg-[#ffffe5] text-white hover:text-black cursor-pointer transition-colors duration-300"
                >
                  <div className="flex items-center w-full justify-between">
                    <div className="size-7 bg-black grid place-items-center -translate-x-1 -translate-y-1 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0 group-hover/link:translate-y-0 transition-all duration-300">
                      <ArrowRight
                        size={16}
                        className="stroke-white rotate-45 origin-center"
                      />
                    </div>
                    <p className="max-w-fit text-xs lg:text-base">0{index}</p>
                  </div>
                  <p>{link}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
};
export default NavMenu;
