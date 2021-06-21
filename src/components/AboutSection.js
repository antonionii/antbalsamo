import React from "react";
import home1 from "../img/home1.png";
//Framer Motion
import { motion } from "framer-motion";

import {
  BasicLayout,
  StyledDescription,
  StyledImage,
  StlyedHide,
} from "../styles";

const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 0.6,
      },
    },
  };
  return (
    <BasicLayout>
      <StyledDescription>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <StlyedHide>
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
        <p>Contact me for your ideas and let's give them life. </p>
        <button>Ping Me</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="profile of Anthony" />
      </StyledImage>
    </BasicLayout>
  );
};

//Styled Components were here before

export default AboutSection;
