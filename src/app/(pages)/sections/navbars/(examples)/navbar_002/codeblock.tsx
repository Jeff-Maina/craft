const javascript: string = ``;
const typescript: string = ``;

export const codeblock = { javascript, typescript };


// "use client";

// import ElementLayout from "@/app/(pages)/elements/ElementLayout";
// import { codeblock } from "./codeblock";

// // 3rd party libraries;
// import { useState, FC, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";

// // utils
// import useScreenSize from "@/utils/hooks/useScreenSize";
// import {
//   opacityVariants,
//   widthVariants,
//   heightVariants,
//   NavLinkVariants,
// } from "./Variants";

// //  Types;
// type link = {
//   label: string;
//   link: string;
// };

// interface linkAnim {
//   isMenuActive: boolean;
//   label: string;
// }

// // Data;
// const Links: Array<link> = [
//   { label: "Product", link: "Product" },
//   { label: "App", link: "App" },
//   { label: "Company", link: "Company" },
//   { label: "Community", link: "Community" },
// ];

// //! mini components;

// const LinkAnim: FC<linkAnim> = ({ isMenuActive, label }) => {
//   const arr = Array.from(label);

//   return (
//     <AnimatePresence mode="wait">
//       {isMenuActive ? (
//         <motion.div
//           variants={opacityVariants}
//           initial="initial"
//           animate="active"
//           exit="inactive"
//           whileHover="hover"
//           className="flex !cursor-pointer"
//         >
//           {arr.map((char, index) => (
//             <div key={index} className="overflow-hidden uppercase xl:!text-xs">
//               <motion.div custom={index} variants={NavLinkVariants}>
//                 {char}
//               </motion.div>
//             </div>
//           ))}
//         </motion.div>
//       ) : null}
//     </AnimatePresence>
//   );
// };

// //
// const Navbar002 = () => {
//   const [isMenuActive, setMenuActive] = useState(false);

//   const { width, height } = useScreenSize();

//   const isXlScreen = width > 1280;

//   // Menu control functions
//   const clickMenuOpen = () => {
//     if (!isXlScreen) {
//       setMenuActive(!isMenuActive);
//     }
//   };

//   const hoverMenuOpen = () => {
//     if (isXlScreen) {
//       setMenuActive(true);
//     }
//   };

//   const resetMenu = () => {
//     if (isXlScreen) {
//       setMenuActive(false);
//     }
//   };

//   const icon = isMenuActive ? (
//     <X className="stroke-[#575349]" size={16} />
//   ) : (
//     <Menu className="stroke-[#575349]" size={16} />
//   );

//   return (
//     <ElementLayout codeBlock={codeblock} className="!pt-0 border-none">
//       <div className="w-full h-full flex items-start justify-center pt-5 lg:pt-10 text-sm xl:text-lg xl:pr-20 bg-[#c6c0b6]">
//         <div
//           onMouseLeave={resetMenu}
//           className={`bg-[#f2efe9] ${
//             isMenuActive ? "p-[4px] xl:p-[1px]" : "p-0 xl:p-[1px]"
//           } text-[#575349] rounded-[0.6rem] xl:rounded-[0.8rem]  transition-all duration-500 flex flex-col xl:flex-row-reverse xl:items-center xl:justify-start xl:ml-auto `}
//         >
//           <div
//             className={`flex items-center h-14 xl:h-20 rounded-[0.4rem]  overflow-hidden ${
//               isMenuActive ? "bg-[#d7d1c6] xl:bg-[#f2efe9]" : "bg-[#f2efe9]"
//             } p-[3px] transition-all duration-500`}
//           >
//             <button
//               onClick={clickMenuOpen}
//               onMouseEnter={hoverMenuOpen}
//               className="h-full aspect-square grid place-items-center"
//             >
//               {icon}
//             </button>

//             <div
//               className={`h-full rounded-[0.3rem] xl:rounded-[0.5rem] px-6 ${
//                 isMenuActive ? "bg-[#f2efe9] xl:bg-[#d7d1c6]" : "bg-[#d7d1c6]"
//               }  grid place-items-center transition-all duration-500 text-xs`}
//             >
//               <p className="uppercase">Preorder</p>
//             </div>
//           </div>
//           <motion.div
//             variants={!isXlScreen ? heightVariants : widthVariants}
//             initial="initial"
//             animate={isMenuActive ? "active" : "inactive"}
//             className="overflow-hidden max-w-fit"
//           >
//             <motion.ul
//               variants={opacityVariants}
//               initial="initial"
//               animate={isMenuActive ? "active" : "inactive"}
//               className="py-6 xl:py-0 px-2 flex flex-col xl:flex-row xl:pl-8 gap-5 xl:gap-10 items-center pt-6 text-[10px] xl:text-sm h-full"
//             >
//               {Links.map((link, index) => (
//                 <LinkAnim
//                   key={index}
//                   label={link.label}
//                   isMenuActive={isMenuActive}
//                 />
//               ))}
//             </motion.ul>
//           </motion.div>
//         </div>
//       </div>
//     </ElementLayout>
//   );
// };

// export default Navbar002;
