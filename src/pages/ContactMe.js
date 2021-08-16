import React from "react";
import styled from "styled-components";

//Animations
import { motion } from "framer-motion";
import { pageAnimation, slideText } from "../animation";
import { AnimatePresence } from "framer-motion";

const ContactMe = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#ffffff" }}
    >
      <StyledTitle>
        <Hide>
          <motion.h2 variants={slideText}>Let's talk.</motion.h2>
        </Hide>
      </StyledTitle>
      <div>
        <Hide>
          <StyledSocial variants={slideText}>
            <Circle />
            <h2>Send me an email.</h2>
          </StyledSocial>
        </Hide>
      </div>
      <div>
        <Hide>
          <StyledSocial variants={slideText}>
            <Circle />
            <h2>Call my line.</h2>
          </StyledSocial>
        </Hide>
      </div>
      <div>
        <Hide>
          <StyledSocial variants={slideText}>
            <Circle />
            <h2>Follow Me.</h2>
          </StyledSocial>
        </Hide>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const StyledTitle = styled(motion.div)`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1300px) {
    margin-top: 2rem;
  }
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const Hide = styled(motion.div)`
  overflow: hidden;
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactMe;
