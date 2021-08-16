import React, { useState, useRef, useEffect } from "react";
import picofme from "../img/picofme.JPG";
//Framer Motion
import { motion } from "framer-motion";
import {
  rotateText,
  fade,
  photoAnim,
  circle,
  leftcircleAnim,
} from "../animation";
import sefcGIF from "../img/sefcGIF.gif";
import { ReactComponent as ClickAround } from "../img/ClickAround.svg";
import { useWindowScroll, useMediaQuery } from "beautiful-react-hooks";
import { InView } from "react-intersection-observer";

import { BasicLayout, StyledDescription, StyledImage } from "../styles";
import styled from "styled-components";
import useDebounce from "../hooks/use-debounce";

const IntroSection = () => {
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

  const getCircleXPosition2 = () => {
    let targetPositionX2 = -300 + scrollY / 6;

    if (targetPositionX2 > 100) {
      targetPositionX2 = 100;
    }

    return targetPositionX2;
  };

  useEffect(() => {
    setCircle1XPos(
      debouncedScrollY > screenHeight / 3 ? getCircleXPosition1() : 0
    );
  }, [debouncedScrollY]);

  let endXPosForCircle1;

  if (isMediumDisplay) {
    endXPosForCircle1 = -220;
  } else if (isLargeDisplay) {
    endXPosForCircle1 = -200;
  } else {
    endXPosForCircle1 = -100;
  }

  return (
    <BasicLayout>
      <motion.div
        style={{
          left: circle1XPos,
        }}
        className="click-around-1"
        variants={leftcircleAnim({
          startXPos: -600,
          endXPos: endXPosForCircle1,
        })}
      >
        <ClickAround className="rotating circle-size-1" />
      </motion.div>

      {/* <ClickAround
        className={"rotating"}
        style={{
          position: "absolute",
          left: getCircleXPosition1(),
          top: "22%",
          height: "300px",
          width: "300px",
        }}
      /> */}
      <StyledDescription>
        <motion.div className={"introText"}>
          <motion.h2
            style={{
              margin: "0rem 0rem -2rem 0rem",
              width: "100%",
              height: "auto",
            }}
            variants={rotateText(0.5)}
          >
            ANIMATE
          </motion.h2>

          <motion.h2
            style={{
              margin: "0rem 0rem -2rem 0rem",
              width: "100%",
              height: "auto",
            }}
            variants={rotateText(1)}
          >
            CODE
          </motion.h2>

          <motion.h2
            variants={rotateText(1.5)}
            style={{ width: "100%", height: "auto" }}
          >
            & DESIGN
          </motion.h2>
        </motion.div>

        <ClickAround
          className={" rotating clickAround2"}
          id={"midCircle"}
          style={{
            position: "absolute",
            right: getCircleXPosition2(),
            top: "69%",
          }}
        />

        {/* <motion.p variants={fade}>
          Contact me for your ideas and let's give them life.{" "}
        </motion.p>
        <motion.button variants={fade}>Ping Me</motion.button> */}
      </StyledDescription>
    </BasicLayout>
  );
};

//Styled Components were here before

export default IntroSection;
