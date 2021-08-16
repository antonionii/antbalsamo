import React from "react";
import { motion } from "framer-motion";
import { rotateText, fade, photoAnim, thumbnailAnim } from "../animation";
import picofme from "../img/picofme.JPG";
import sefcGIF from "../img/sefcGIF.gif";

import {
  BasicLayout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";

const AboutMe = () => {
  return (
    <BasicLayout>
      <StyledDescription>
        <StyledImage>
          <motion.img
            variants={thumbnailAnim}
            src={picofme}
            alt="profile of Anthony"
          />
        </StyledImage>
        <motion.div>
          <StyledHide>
            <motion.img src={sefcGIF} alt="gif of video" />

            <motion.h2 variants={rotateText}>Create</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={rotateText}>
              <span>Code</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={rotateText}>Animate</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact me for your ideas and let's give them life.{" "}
        </motion.p>
        <motion.button variants={fade}>Ping Me</motion.button>
      </StyledDescription>
    </BasicLayout>
  );
};

export default AboutMe;
