import React, { useState } from "react";
//Framer Motion
import { motion, AnimatePresence } from "framer-motion";
import { thumbnailAnim } from "../animation";
// import { uuid } from "uuidv4";
import { BasicLayout } from "../styles";
import VideoPlayer from "./VideoPlayer";
import styled from "styled-components";

const DemoContainer = styled(motion.div)`
  position: relative;
  padding: 0rem 0rem 0rem 0rem;
  left: 20px;
  bottom: 80px;
  justify-content: center;
  width: 100%;
  height: auto;

  @media (min-width: 750px) {
    left: 0px;
    bottom: 0px;
    top: 50px;
  }

  @media (min-width: 1300px) {
  }
`;

const VideoSection = () => {
  //Ref for our element
  const [isFullScreenVideoShown, setIsFullScreenVideoShown] = useState(false);

  return (
    <BasicLayout>
      <DemoContainer>
        <motion.img
          src="https://image.mux.com/00c01ueogq01fHfB9E9GIkMvOShYvaSG600N6mY9a02ztgJM/animated.gif?start=10&end=14"
          variants={thumbnailAnim(2)}
          alt="gif of video"
          onClick={() => setIsFullScreenVideoShown(true)}
          style={{
            maxWidth: "600px",
            pointerEvents: "auto",
            cursor: "pointer",
          }}
        />
      </DemoContainer>

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
              // key={uuid()}
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
              <VideoPlayer playbackUrl="https://stream.mux.com/00c01ueogq01fHfB9E9GIkMvOShYvaSG600N6mY9a02ztgJM.m3u8" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BasicLayout>
  );
};

//Styled Components were here before

export default VideoSection;
