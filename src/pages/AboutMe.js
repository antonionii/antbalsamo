import React from "react";
import { motion } from "framer-motion";
import {
  rotateText,
  fade,
  photoAnim,
  thumbnailAnim,
  pageAnimation,
  sliderightAnim,
  slideleftAnim,
} from "../animation";
import picofme from "../img/picofme.JPG";
import sefcGIF from "../img/sefcGIF.gif";
import styled from "styled-components";

import { BasicLayout, StyledDescription, StyledHide } from "../styles";

const ProfileImage = styled(motion.div)`
  overflow: hidden;
  padding: 0 1rem;
  width: 100%;
  /* outline: 2px solid red; */

  @media (min-width: 780px) {
    display: inline-flex;
    width: 50%;
    padding: 0 5rem;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const AboutContainer = styled(motion.div)`
  @media (min-width: 780px) {
    display: flex;
  }
  @media (min-width: 1300px) {
    display: flex;
  }
`;

const ProfileText = styled(motion.div)`
  display: block;
  width: 100%;
  margin: 0;
  pointer-events: auto;
  /* outline: 2px solid green; */
  align-items: center;
  justify-content: center;
  padding: 6rem 4rem;
  overflow: hidden;

  h3 {
    font-size: 1.5rem;
    text-overflow: hidden;
    word-break: break-word;
    font-family: karla;
    color: var(--text-color);
    font-weight: 400;
    text-align: left;
  }
  @media (min-width: 780px) {
    display: inline-flex;
    width: 50%;

    h3 {
      font-size: 2rem;
      text-overflow: hidden;
      word-break: break-word;
      font-family: karla;
      color: var(--text-color);
      font-weight: 400;
      text-align: left;
    }
  }
`;

const AboutMe = () => {
  return (
    <BasicLayout
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutContainer className="aboutContainer">
        <ProfileText className="profileText">
          <motion.h3 variants={sliderightAnim}>
            <b>Anthony Balsamo (b.1990)</b> is a senior motion designer and
            programmer currently based in Chicago. <br></br>
            <br></br>With a start in video production and currently
            professionally working in motion graphic design, I've spent the last
            few years studying programming to take on other creative endeavors.
            Inspired by a wide range of styles and mediums, I find myself
            pulling from 90s nostalgia, otaku culture, the zine scene to art
            history. <br></br>
            <br></br>
            Feel free to reach out to me about any projects you have that you'd
            think I'd be a right fit for. The best way to find me is on my
            morning walks to get iced coffee.. <br></br>
            <br></br>every morning..
          </motion.h3>
        </ProfileText>
        <ProfileImage className="profileImage">
          <motion.img
            variants={slideleftAnim()}
            src={picofme}
            alt="profile of Anthony"
          />
        </ProfileImage>
      </AboutContainer>

      {/* <div style={{ padding: 30 }}>something else here</div> */}
    </BasicLayout>
  );
};
export default AboutMe;
