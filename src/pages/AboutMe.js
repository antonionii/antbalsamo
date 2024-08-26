import React from "react";
import {motion} from "framer-motion";
import {pageAnimation, slideleftAnim, sliderightAnim} from "../animation";
import styled from "styled-components";
import {BasicLayout} from "../styles";

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

const StyledContact = styled(motion.div)`
  padding: 4rem 4rem;
  color: #353535;
  min-height: 90vh;

  @media (min-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
    `;
    const StyledSocial = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
      font-family: karla;
      font-size: 1.5rem;
  
      margin: 1rem;
  
      @media (min-width: 780px) {
        font-size: 4rem;
      }
  
      @media (min-width: 1300px) {
        font-size: 4.5rem;
      }
    }
  `;
const AboutContainer = styled(motion.div)`
  @media (min-width: 780px) {
    display: flex;
  }
  @media (min-width: 1300px) {
    display: flex;
  }
    padding: 2rem 0rem  0rem  0rem
`;

const ProfileText = styled(motion.div)`
  display: block;
  width: 100%;
  margin: 0;
  pointer-events: auto;
  /* outline: 2px solid green; */
  align-items: center;
  justify-content: center;
  padding: 0rem 4rem 0rem 4rem;
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
            <b>Currently a Product Designer at Willow. </b>
             Spending my nights descoping personal
             game dev projects.
             <br/><br/><br/>
             <a
            style={{ position: "relative", zIndex: 10 }}
            href="mailto: antbalsamo@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Email me at antbalsamo@gmail.com
          </a>
          <br/><a
            style={{ position: "relative", zIndex: 10 }}
          
            href="https://www.linkedin.com/in/antbalsamo/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Message me on LinkedIn
          </a>
          </motion.h3>
        </ProfileText>
        <ProfileImage className="profileImage">
          <motion.img
            variants={slideleftAnim()}
            src={
              "https://image.mux.com/qIrGaTbptemJ7b4AGbhECkUC6Ss1onaxlavFm00bde2s/animated.gif"
            }
            alt="profile of Anthony"
          />
        </ProfileImage>
        
      </AboutContainer>

      {/* <div style={{ padding: 30 }}>something else here</div> */}
      
    </BasicLayout>

    
  );
};
export default AboutMe;
