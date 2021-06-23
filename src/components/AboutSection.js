import React from "react";
import picofme from "../img/picofme.JPG";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import ScrollTop from "../components/ScrollTop";
import ReactPlayer from "react-player";
import SEFCgif from "../img/SEFCgif.gif";

import {
  BasicLayout,
  StyledDescription,
  StyledImage,
  StlyedHide,
} from "../styles";

const AboutSection = () => {
  return (
    <BasicLayout>
      <StyledDescription>
        <motion.div>
          <StlyedHide>
            <motion.img variants={} src={SEFCgif} alt="gif of video" />

            <motion.h2 variants={titleAnim}>Create</motion.h2>
          </StlyedHide>
          <StlyedHide>
            <motion.h2 variants={titleAnim}>
              <span>Code</span>
            </motion.h2>
          </StlyedHide>
          <StlyedHide>
            <motion.h2 variants={titleAnim}>Animate</motion.h2>
          </StlyedHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact me for your ideas and let's give them life.{" "}
        </motion.p>
        <motion.button variants={fade}>Ping Me</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={photoAnim}
          src={picofme}
          alt="profile of Anthony"
        />
      </StyledImage>
    </BasicLayout>
  );
};

//Styled Components were here before

export default AboutSection;
