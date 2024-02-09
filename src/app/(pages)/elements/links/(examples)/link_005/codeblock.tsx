const javascript: string = `
<a
href="#"
onMouseEnter={hoverLink}
onMouseLeave={unhoverLink}
className="relative overflow-hidden"
>
<span className="text-lg lg:text-xl">join the team</span>
<AnimatePresence mode="wait">
  {isLinkHovered ? (
    <motion.div
      variants={motionVariants}
      initial="initial"
      animate="active"
      exit="inactive"
      className="h-[1px] bottom-0 absolute w-full bg-black"
    ></motion.div>
  ) : null}
</AnimatePresence>
</a>`;

const typescript: string = ``;

export const codeblock = {
  javascript,
  typescript,
};
