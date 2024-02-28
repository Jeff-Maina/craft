// 3rd party libraries;
import { FC } from "react";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { ModalProps } from "./Interfaces";
import { MaskVariants, ModalVariants } from "./Variants";
import useScreenSize from "@/utils/hooks/useScreenSize";
import Codebox from "./Codebox";
import { X } from "lucide-react";
import Dependencies from "./Dependencies";
import Assets from "./Assets";

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
            className="absolute top-0 left-0 w-full h-screen bg-[#0000002d] backdrop-blur-sm md:backdrop-blur-none"
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
            className="p-6  md:p-4 flex flex-col gap-6 md:gap-4 md:w-full w-[95%] md:rounded-[0.5rem] max-w-xl lg:max-w-2xl   bg-white h-full md:h-[95%] shadow-xl absolute z-[50] right-0 md:right-6"
          >
            <div className="flex justify-between items-center md:pr-4 relative">
              <div
                onPointerDown={startDrag}
                className="hidden lg:block cursor-grab active:cursor-grabbing  p-4"
              >
                <small className="select-none">[ drag ]</small>
              </div>
              <button className="ml-auto" onClick={closeModal}>
                <X size={18} />
              </button>
              <div className="w-full h-10 bg-gradient-to-b from-white via-[#ffffffc4] to-transparent absolute top-3/4"></div>
            </div>
            <section className="flex flex-col gap-6 md:gap-4 overflow-y-scroll no_scrollbar_container">
              <Codebox codeBlock={codeBlock} closeModal={closeModal} />
              <div className="p-4">
                <div className="text-sm grid gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <button className="text-zinc-600">Dependencies</button>
                  </div>
                  <Dependencies />
                </div>
              </div>

              <div className="px-4 flex justify-between items-center gap-3 w-full">
                <p className="text-zinc-600 text-sm">
                  Inspired by :{" "}
                  <span className="text-black">addifico.design</span>
                </p>
                <p className="text-zinc-600 text-sm">
                  <span className="text-black">Wednesday 28th February</span>
                </p>
              </div>
              {/* <div className="absolute bottom-6 h-6 bg-gradient-to-t from-white to-transparent w-full"></div> */}
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
