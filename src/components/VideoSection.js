import React, { useRef, useState } from "react";
import picofme from "../img/picofme.JPG";
//Framer Motion
import { motion, AnimatePresence } from "framer-motion";
import { fade, photoAnim, thumbnailAnim, demoAnim } from "../animation";
import sefcGIF from "../img/sefcGIF.gif";
import { useWindowScroll } from "beautiful-react-hooks";
import { InView } from "react-intersection-observer";
import { uuid } from "uuidv4";
import {
  BasicLayout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";
import VideoPlayer from "./VideoPlayer";

const VideoSection = () => {
  //Ref for our element
  const [isFullScreenVideoShown, setIsFullScreenVideoShown] = useState(false);

  return (
    <BasicLayout>
      <motion.img
        src="https://image.mux.com/01OXzd01e2502qD00P2wNOFbvUqe54IonzO1y024GzxzoeM4/animated.gif?start=10&end=14"
        variants={thumbnailAnim(2)}
        alt="gif of video"
        onClick={() => setIsFullScreenVideoShown(true)}
        style={{
          maxWidth: "600px",
          pointerEvents: "auto",
          cursor: "pointer",
        }}
      />

      <AnimatePresence>
        {isFullScreenVideoShown && (
          <motion.div
            // variants={demoAnim}
            initial={{
              // opacity: 0.2,
              padding: "0 40px",
              transform: "perspective(42rem) rotateX(-90deg) scale3d(1,1,1)",
              transformOrigin: "top center",
            }}
            animate={{
              // opacity: 1,
              transform: "perspective(42rem) rotateX(0deg) scale3d(1,1,1)",
              transition: { duration: 1, ease: "easeOut" },
            }}
            exit={{
              // opacity: 0.2,
              padding: "0 40px",
              transform: "perspective(42rem) rotateX(-90deg) scale3d(1,1,1)",
              transformOrigin: "top center",
            }}
            key="987654321"
            style={{
              position: "fixed",
              display: "flex",
              background: "rgba(0,0,0,0.9)",
              inset: 0,
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <button
              key={uuid()}
              style={{
                position: "absolute",
                top: 40,
                right: 40,
                borderRadius: "20%",
              }}
              onClick={() => setIsFullScreenVideoShown(false)}
            >
              X
            </button>
            <motion.div
              style={{
                display: "flex",
                maxWidth: 1600,
              }}
            >
              <VideoPlayer playbackUrl="https://stream.mux.com/01OXzd01e2502qD00P2wNOFbvUqe54IonzO1y024GzxzoeM4.m3u8" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BasicLayout>
  );
};

//Styled Components were here before

export default VideoSection;
