// 3rd party libraries;
import { FC, useState } from "react";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { ChevronRight, X } from "lucide-react";

// component imports;
import Codebox from "./Codedisplay";

import { MaskProps, ModalProps } from "./Interfaces";
import { MaskVariants, ModalVariants } from "./Variants";
import useScreenSize from "@/utils/hooks/useScreenSize";
import Dependencies from "./Dependencies";

const Mask: FC<MaskProps> = ({ closeModal }) => {
  return (
    <motion.section
      onClick={closeModal}
      variants={MaskVariants}
      initial="initial"
      animate="active"
      exit="inactive"
      className="absolute top-0 left-0 w-full h-screen bg-[#0000002d] backdrop-blur-sm md:backdrop-blur-none"
    ></motion.section>
  );
};

const CodeModal: FC<ModalProps> = ({ modalProps }) => {
  const { closeModal, isModalActive, tabs, dependencies } = modalProps;
  const screensize = useScreenSize();
  const isLargeScreen = screensize.width > 1024;

  // dragging logic
  const controls = useDragControls();
  const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    controls.start(event.nativeEvent);
  };

  const [dateCreated, setDateCreated] = useState("");
  const updateDate = (date: string) => setDateCreated(date);

  return (
    <AnimatePresence mode="wait">
      {isModalActive ? (
        <section className="fixed inset-0 h-screen w-full z-[999] flex items-center ">
          <Mask closeModal={closeModal} />
          <motion.section
            variants={ModalVariants}
            drag={isLargeScreen ? true : false}
            dragControls={controls}
            dragListener={false}
            dragMomentum={false}
            whileDrag={{
              opacity: 0.9,
            }}
            initial="initial"
            animate="active"
            exit="inactive"
            className="p-6 !pb-8  lg:p-4 flex flex-col gap-6 lg:gap-4 w-full  md:rounded-[0.5rem] max-w-xl lg:max-w-2xl   bg-white h-full md:h-[95%] shadow-xl absolute z-[50] right-0 md:right-6"
          >
            <div className="flex justify-between items-center lg:pr-4 relative">
              <div
                onPointerDown={startDrag}
                className="hidden lg:block cursor-grab active:cursor-grabbing  p-4"
              >
                <small className="select-none">[ drag ]</small>
              </div>
              <button className="ml-auto" onClick={closeModal}>
                {/* <X size={18} /> */}
                <ChevronRight size={24} />
              </button>
              <div className="w-full h-10 bg-gradient-to-b from-white via-[#ffffffc4] to-transparent absolute pointer-events-none top-3/4 hidden lg:block"></div>
            </div>
            <section className="flex flex-col gap-6 lg:gap-4 overflow-y-scroll no_scrollbar md:pt-4 lg:pt-0">
              <Codebox tabs={tabs} updateDate={updateDate} />
              <div className="lg:p-4">
                <div className="text-sm grid gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <button className="text-zinc-600">Dependencies</button>
                  </div>
                  <Dependencies dependencies={dependencies} />
                </div>
              </div>

              <div className="lg:px-4 flex justify-between items-center gap-3 w-full">
                <p className="text-zinc-600 text-sm">
                  Added on : <span className="text-black">{dateCreated}</span>
                </p>
              </div>
            </section>
          </motion.section>
        </section>
      ) : null}
    </AnimatePresence>
  );
};

export default CodeModal;

// *
// source code javascript and typescript
