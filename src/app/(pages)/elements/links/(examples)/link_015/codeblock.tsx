import { linkCompProps } from "../../Interfaces";

const javascript: string = `import { motion } from "framer-motion";
import { useState } from "react";

const Link = () => {
  const [isButtonHovered, setButtonHovered] = useState(false);
  const hoverButton = () => setButtonHovered(true);
  const unHoveredButton = () => setButtonHovered(false);

  const word = "Bordeaux";

  return(
      <div
        onMouseEnter={hoverButton}
        onMouseLeave={unHoveredButton}
        className="font-alfa text-5xl md:text-6xl relative cursor-pointer leading-none origin-left group/link"
      >
        <div className="flex select-none origin-left rotate-0 group-hover/link:-rotate-[4deg] transition-all duration-300">
          {Array.from(word).map((char, index) => {
            return (
              <motion.div
                initial={{
                  color: "#000",
                  scale: 1,
                }}
                animate={{
                  color: isButtonHovered ? ["#FC6736", "#0C2D57"] : "#000",
                  scale: isButtonHovered ? [1, 1.3, 1] : 1,
                }}
                transition={{
                  color: {
                    duration: 0.3,
                    delay: 0.05 * index,
                  },
                  scale: {
                    duration: 0.3,
                    delay: 0.05 * index,
                  },
                }}
              >
                {char}
              </motion.div>
            );
          })}
        </div>
      </div>
  )
}

export default Link
`

const typescript: string = `import  { FC,useState } from "react";
import { motion } from "framer-motion";

const Link: FC = () => {
  const [isButtonHovered, setButtonHovered] = useState<boolean>(false);
  const hoverButton = () => setButtonHovered(true);
  const unHoveredButton = () => setButtonHovered(false);

  const word: string = "Bordeaux";

  return (
    <div
        onMouseEnter={hoverButton}
        onMouseLeave={unHoveredButton}
        className="font-alfa text-5xl md:text-6xl relative cursor-pointer leading-none origin-left group/link"
      >
        <div className="flex select-none origin-left rotate-0 group-hover/link:-rotate-[4deg] transition-all duration-300">
          {Array.from(word).map((char, index) => (
            <motion.div
              key={index}
              initial={{
                color: "#000",
                scale: 1,
              }}
              animate={{
                color: isButtonHovered ? ["#FC6736", "#0C2D57"] : "#000",
                scale: isButtonHovered ? [1, 1.3, 1] : 1,
              }}
              transition={{
                color: {
                  duration: 0.3,
                  delay: 0.05 * index,
                },
                scale: {
                  duration: 0.3,
                  delay: 0.05 * index,
                },
              }}
            >
              {char}
            </motion.div>
          ))}
        </div>
    </div>
  );
};

export default Link;
`;

const link: linkCompProps = {
  javascript,
  typescript,
  label: "component",
  dateCreated: "Tuesday, 13 February 2024",
};

export const tabs = [link];
