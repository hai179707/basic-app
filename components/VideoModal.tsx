import { AnimatePresence, motion } from "framer-motion";
import { FC, memo } from "react";
import { RiCloseFill } from "react-icons/ri";

interface VideoModalProps {
  src: string;
  isOpen: boolean;
  handleClose: () => void;
}

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const VideoModal: FC<VideoModalProps> = ({ src, isOpen, handleClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed z-10 inset-0 flex justify-center items-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div
            className="absolute inset-0 bg-black opacity-50 cursor-pointer -z-1"
            onClick={handleClose}
          ></div>
          <div className="w-full max-w-[900px] flex justify-center relative">
            <div className="w-[95%] h-0 pb-[53.40%] relative">
              <iframe
                width="900"
                height="506"
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-xl drop-shadow-lg"
              ></iframe>
              <RiCloseFill
                className="absolute -top-8 right-0 text-2xl text-white cursor-pointer"
                onClick={handleClose}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(VideoModal);
