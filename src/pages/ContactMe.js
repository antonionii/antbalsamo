import React, {useEffect, useState} from "react";
import styled from "styled-components";
//Animations
import {motion} from "framer-motion";
import {pageAnimation, slideText} from "../styles/animation";
import {useMediaQuery, useWindowScroll} from "beautiful-react-hooks";
import useDebounce from "../hooks/use-debounce";

const ContactMe = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [screenHeight, setScreenHeight] = useState(null);
  const [circle1XPos, setCircle1XPos] = useState(0);
  const isMediumDisplay = useMediaQuery("(min-width: 780px)");
  const isLargeDisplay = useMediaQuery("(min-width: 1300px)");

  useWindowScroll((event) => {
    setScrollY(window.scrollY);
    console.log("scroll Y", window.scrollY);
  });

  useEffect(() => {
    if (!window) {
      return; /// do not fail on Servwer Side Render (in future)
    }
    setScreenHeight(window.screen.availHeight);
  }, []);

  const debouncedScrollY = useDebounce(scrollY, 300);

  const getCircleXPosition1 = () => {
    // 400 - 0
    // 401 - little bit to left

    let targetPositionX1 = 0 - (scrollY - screenHeight / 2 / 1.5);

    return targetPositionX1;
  };

  useEffect(() => {
    setCircle1XPos(
      debouncedScrollY > screenHeight / 3 ? getCircleXPosition1() : 0
    );
  }, [debouncedScrollY]);

  let endXPosForCircle1;

  if (isMediumDisplay) {
    endXPosForCircle1 = 600;
  } else if (isLargeDisplay) {
    endXPosForCircle1 = 800;
  } else {
    endXPosForCircle1 = 20;
  }

  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Hide>
        <StyledTitle variants={slideText}>
          Have an idea that<br></br>you want to bring to life?
        </StyledTitle>
      </Hide>
      <Line
        transition={{ duration: 2 }}
        initial={{ width: "0%" }}
        animate={{
          width: "60%",
        }}
      />
      <Hide>
        <StyledSocial variants={slideText}>
          <Circle />
          <a
            style={{ position: "relative", zIndex: 10 }}
            href="mailto: antbalsamo@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <h2>Email me at antbalsamo@gmail.com</h2>
          </a>
        </StyledSocial>
      </Hide>
      {/* <div>
        <Hide>
          <StyledSocial variants={slideText}>
            <Circle />
            <h2>Call my line.</h2>
          </StyledSocial>
        </Hide>
      </div> */}
      <div>
        <Hide>
          <StyledSocial variants={slideText}>
            <Circle />
            <a
              style={{ position: "relative", zIndex: 10 }}
              href="https://www.linkedin.com/in/antbalsamo/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Message me on LinkedIn</h2>
            </a>
          </StyledSocial>
        </Hide>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 4rem 4rem;
  color: #353535;
  min-height: 90vh;

  @media (min-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const StyledTitle = styled(motion.div)`
  display: inline-block;
  width: 90%;
  height: auto;
  margin-bottom: 2rem;
  color: var(--text-color);
  font-family: karla;
  font-size: 2rem;

  margin-top: 5rem;
  @media (min-width: 780px) {
    font-size: 4.5rem;
  }

  @media (min-width: 1300px) {
    font-size: 4.5rem;
  }
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background: var(--text-color);
  padding: 0rem 0rem 0rem 1rem;
`;

const Hide = styled(motion.div)`
  overflow: hidden;
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

const Line = styled(motion.div)`
  height: 3px;

  background: var(--line-color, "#000");
  width: 0%;
  bottom: -1rem;
  right: 0;

  @media (min-width: 780px) {
    height: 6px;
  }

  @media (min-width: 1300px) {
    height: 11px;
    max-width: 40%;
  } ;
`;

export default ContactMe;
