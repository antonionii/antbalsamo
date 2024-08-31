import React, { useState, useEffect } from "react";
//Framer Motion
import { motion } from "framer-motion";
import { rotateText, leftcircleAnim, slidedownAnim, slideleftAnim } from "../animation";
import { useWindowScroll, useMediaQuery } from "beautiful-react-hooks";
import { BasicLayout, StyledDescription } from "../styles";
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
  }, [debouncedScrollY,getCircleXPosition1, screenHeight]);

  let endXPosForCircle1;

  if (isMediumDisplay) {
    endXPosForCircle1 = -230;
  } else if (isLargeDisplay) {
    endXPosForCircle1 = -200;
  } else {
    endXPosForCircle1 = -100;
  }

  return (
    <BasicLayout>
    

      
      <StyledDescription>
        <motion.div className={"introText"}>
          <motion.h1
            style={{
              margin: "0rem 0rem -2rem 0rem",
              width: "100%",
              height: "auto",
            }}
            variants={slideleftAnim(0.5)}
          >
            a
          </motion.h1>

          <motion.h1
            style={{
              margin: "0rem 0rem -2rem 0rem",
              width: "100%",
              height: "auto",
            }}
            variants={slideleftAnim(1)}
          >
            placeholder
          </motion.h1>

          <motion.h1
            variants={slideleftAnim(1.5)}
            style={{ width: "100%", height: "auto" }}
          >
            here
          </motion.h1>
        </motion.div>


        

        {/* <motion.p variants={fade}>
          Contact me for your ideas and let's give them life.{" "}
        </motion.p>
        <motion.button variants={fade}>Ping Me</motion.button> */}
      </StyledDescription>
    </BasicLayout>
  );
};


export default IntroSection;
