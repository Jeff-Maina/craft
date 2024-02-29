import { navBarCompProps } from "../../Interface";

const javascript: string = `import { motion } from "framer-motion";
import { useState } from "react";

const links = ["Home", "About", "Contact"];

const Navbar = () => {

  const [hoveredLinkIndex, setHoveredLinkIndex] = useState(0);
  const moveIndicator = (index) => setHoveredLinkIndex(index);

  return (
    <div className="h-full w-full flex justify-end p-8">
      <nav className="max-w-fit relative z-10">
        <div className="flex items-center bg-[#000000ab] text-white rounded-[0.3rem] group/nav backdrop-blur">
          { links.map((link, index) => {
            const isHovered = hoveredLinkIndex === index;
            return (
              <div
                key={index}
                onMouseEnter={() => moveIndicator(index)}
                className="py-3 px-6 cursor-pointer relative"
              >
                <div className="relative z-10 h-full w-full">{link}</div>
                {isHovered && (
                  <motion.div
                    layoutId="indicator"
                    transition={{
                      duration: 0.3,
                    }}
                    className="absolute w-full h-full inset-0 opacity-[0] group-hover/nav:opacity-100 transition-opacity duration-100 p-1"
                  >
                    <div className="w-full h-full bg-[#2a2a2a] rounded pointer-events-none"></div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
      <div  className="absolute inset-0 h-full w-full object-cover bg-blue-200"  />
    </div>
  );
};

export default Navbar;
`

const typescript: string = `import { motion } from "framer-motion";
import { useState } from "react";

const links: string[] = ["Home", "About", "Contact"];

const Navbar: React.FC = () => {
  
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState<number>(0);
  const moveIndicator = (index: number) => setHoveredLinkIndex(index);

  return (
    <div className="h-full w-full flex justify-end p-8">
      <nav className="max-w-fit relative z-10">
        <div className="flex items-center bg-[#000000ab] text-white rounded-[0.3rem] group/nav backdrop-blur">
          {links.map((link, index) => {
            const isHovered: boolean = hoveredLinkIndex === index;
            return (
              <div
                key={index}
                onMouseEnter={() => moveIndicator(index)}
                className="py-3 px-6 cursor-pointer relative"
              >
                <div className="relative z-10 h-full w-full">{link}</div>
                {isHovered && (
                  <motion.div
                    layoutId="indicator"
                    transition={{
                      duration: 0.3,
                    }}
                    className="absolute w-full h-full inset-0 opacity-[0] group-hover/nav:opacity-100 transition-opacity duration-100 p-1"
                  >
                    <div className="w-full h-full bg-[#2a2a2a] rounded pointer-events-none"></div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
      <div className="absolute inset-0 h-full w-full object-cover bg-blue-200" />
    </div>
  );
};

export default Navbar;
`;

const navbar: navBarCompProps = {
  javascript,
  typescript,
  label: "navbar",
  dateCreated: "Thursday, 29 February 2024",
};

export const tabs = [navbar];
