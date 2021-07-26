import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import gridTest from "../img/gridTest.gif";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import sefcGIF from "../img/sefcGIF.gif";
import academyGIF from "../img/academyGIF.gif";

//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  titleAnim,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { AnimatePresence } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { scrollReveal, vertAnim } from "../animation";

import {
  BasicLayout,
  StyledDescription,
  StyledImage,
  StlyedHide,
} from "../styles";

const Work = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const w = window.innerWidth;
  console.log(w);
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      /*variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      id="workBg"
      style={{}}
             <motion.div variants={sliderContainer}>
        <Frame1 id="pageAnimations" variants={slider}></Frame1>
        <Frame2 id="pageAnimations" variants={slider}></Frame2>
        <Frame3 id="pageAnimations" variants={slider}></Frame3>
        <Frame4 id="pageAnimations" variants={slider}></Frame4>
      </motion.div>
      
      
      */
    >
      <workBox class="videoBox">
        <ul>
          <li>
            <videoCard class="videoCard">
              <div class="cardLine"></div>
              <motion.img src={academyGIF} alt="gif of video" />
              <motion.h2 variants={titleAnim}></motion.h2>
              <h3>Academy '21</h3>
            </videoCard>
          </li>
          <li>
            <videoCard class="videoCard">
              <div class="cardLine"></div>
              <motion.img src={sefcGIF} alt="gif of video" />
              <motion.h2 variants={titleAnim}></motion.h2>
              <h3>Heading 2</h3>
            </videoCard>
          </li>
          <li>
            <videoCard class="videoCard">
              <div class="cardLine"></div>
              <motion.img src={sefcGIF} alt="gif of video" />
              <motion.h2 variants={titleAnim}></motion.h2>
              <h3>Heading 3</h3>
            </videoCard>
          </li>
          <li>
            <videoCard class="videoCard">
              <div class="cardLine"></div>
              <motion.img src={academyGIF} alt="gif of video" />
              <motion.h2 variants={titleAnim}></motion.h2>
              <h3>Heading 4</h3>
            </videoCard>
          </li>
          <li>
            <videoCard class="videoCard">
              <div class="cardLine"></div>
              <motion.img src={sefcGIF} alt="gif of video" />
              <motion.h2 variants={titleAnim}></motion.h2>
              <h3>Heading 5</h3>
            </videoCard>
          </li>
          <li>
            <videoCard class="videoCard">
              <div class="cardLine"></div>
              <motion.img src={sefcGIF} alt="gif of video" />
              <motion.h2 variants={titleAnim}></motion.h2>
              <h3>Heading 6</h3>
            </videoCard>
          </li>
        </ul>
      </workBox>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const workBox = styled(motion.div)`
  width: 80%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const videoBox = styled(motion.div)``;

const videoCard = styled(motion.div)``;
export default Work;
