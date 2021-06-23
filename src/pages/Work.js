import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

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
import { scrollReveal } from "../animation";

const Work = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      id="workBg"
      style={{}}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 id="pageAnimations" variants={slider}></Frame1>
        <Frame2 id="pageAnimations" variants={slider}></Frame2>
        <Frame3 id="pageAnimations" variants={slider}></Frame3>
        <Frame4 id="pageAnimations" variants={slider}></Frame4>
      </motion.div>

      <StyledMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div
          variants={lineAnim}
          id="lineAnimations"
          className="line"
        ></motion.div>
        <Link to="/Work/the-athlete">
          <StyledHide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </StyledHide>
        </Link>
      </StyledMovie>
      <StyledMovie
        ref={element}
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
      >
        <h2>The Racer</h2>
        <motion.div
          variants={lineAnim}
          id="lineAnimations"
          className="line"
        ></motion.div>
        <Link to="/Work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </StyledMovie>
      <StyledMovie
        ref={element2}
        variants={scrollReveal}
        animate={controls2}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div
          variants={lineAnim}
          id="lineAnimations"
          className="line"
        ></motion.div>
        <Link to="/Work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </StyledMovie>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;
  overflow: hidden;
  .line {
    height: 0.3rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledHide = styled(motion.div)`
  overflow: hidden;
`;

//Frame Animation

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  z-index: 2;
`;

const Frame2 = styled(Frame1)``;

const Frame3 = styled(Frame1)``;

const Frame4 = styled(Frame1)``;

export default Work;
