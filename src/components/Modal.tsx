import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

type ModalPropType = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ onClose, children }: ModalPropType) => {
  return createPortal(
    <>
      <div
        onClick={onClose}
        className="w-screen h-screen fixed top-0 left-0 z-[70]"
      >
        <div onClick={onClose}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0, transition: { delay: 0.3 } }}
            className="w-screen h-screen fixed top-0 left-0 z-[70] bg-primary-bg"
          ></motion.div>
          <div className="w-screen h-screen fixed top-0 left-0 z-[80] backdrop-blur-[0.5px]"></div>
        </div>
        <div onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onClose()
        }} className="w-screen h-screen absolute top-0 left-0 flex z-[90] justify-center items-center">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            exit={{
              scaleY: 0,
              transition: { duration: 0.1, delay: 0 },
            }}
            style={{
              background:
                "linear-gradient(to bottom, #3B79D4 0%, #000000 100%)",
            }}
            className="px-[1px] py-[1px] w-fit h-fit rounded-2xl"
          >
            <motion.div
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
              className={`font-popins px-10 py-10 text-white bg-primary-bg z-[85] w-[70vw] md:w-[40vw] lg:w-[40vw] xl:w-[30vw] h-fit rounded-2xl shadow-2xl`}
            >
              {children}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>,
    document.getElementById("modal")!
  );
};

export default Modal;
