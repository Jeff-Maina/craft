// 3rd party libraries;
import { FC, useState } from "react";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { ModalProps } from "./Interfaces";
import { MaskVariants, ModalVariants } from "./Variants";
import useScreenSize from "@/utils/hooks/useScreenSize";
import Codebox from "./Codebox";
import { X } from "lucide-react";

const CodeModal: FC<ModalProps> = ({ modalProps }) => {
  const { setModalActive, isModalActive, codeBlock } = modalProps;

  // toggle modal functions;
  const closeModal = () => setModalActive(false);
  const openModal = () => setModalActive(true);

  const screensize = useScreenSize();
  const isLargeScreen = screensize.width > 1024;

  // dragging logic
  const controls = useDragControls();
  const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    controls.start(event.nativeEvent);
  };

  return (
    <AnimatePresence mode="wait">
      {isModalActive ? (
        <section className="fixed inset-0 h-screen w-full z-[999] flex items-center ">
          <motion.section
            onClick={closeModal}
            variants={MaskVariants}
            initial="initial"
            animate="active"
            exit="inactive"
            className="absolute top-0 left-0 w-full h-screen bg-[#0000002d]"
          ></motion.section>
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
            className="p-6 md:p-4 flex flex-col gap-6 md:gap-4 md:w-full w-[95%] md:rounded-[0.5rem] max-w-xl lg:max-w-2xl   bg-white h-full md:h-[95%] shadow-xl absolute z-[50] right-0 md:right-6"
          >
            <div className="flex justify-between items-center md:pr-4">
              <div
                onPointerDown={startDrag}
                className="hidden lg:block cursor-grab active:cursor-grabbing  p-4"
              >
                <small className="select-none">[ drag ]</small>
              </div>
              <button className="ml-auto" onClick={closeModal}>
                <X size={18} />
              </button>
            </div>
            <Codebox codeBlock={codeBlock} closeModal={closeModal} />
          </motion.section>
        </section>
      ) : null}
    </AnimatePresence>
  );
};

export default CodeModal;

// *
// source code javascript and typescript
