import React, { useState, useEffect } from "react";
// Framer Motion
import { motion } from "framer-motion";
import { slideleftAnim } from "../animation";
import { useWindowScroll, useMediaQuery } from "beautiful-react-hooks";
import { StyledDescription } from "../styles";
import useDebounce from "../hooks/use-debounce";

const PageHeaderText = ({ numOfItems, itemsText }) => {
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
      return; // do not fail on Server Side Render (in future)
    }
    setScreenHeight(window.screen.availHeight);
  }, []);

  const debouncedScrollY = useDebounce(scrollY, 300);

  const getCircleXPosition1 = () => {
    let targetPositionX1 = 0 - (scrollY - screenHeight / 2 / 1.5);
    return targetPositionX1;
  };

  useEffect(() => {
    setCircle1XPos(
      debouncedScrollY > screenHeight / 3 ? getCircleXPosition1() : 0
    );
  }, [debouncedScrollY, getCircleXPosition1, screenHeight]);

  let endXPosForCircle1;

  if (isMediumDisplay) {
    endXPosForCircle1 = -230;
  } else if (isLargeDisplay) {
    endXPosForCircle1 = -200;
  } else {
    endXPosForCircle1 = -100;
  }

  // Ensure itemsText has enough text items for numOfItems
  const items = itemsText.slice(0, numOfItems);

  return (
    <StyledDescription style={{ display: "flex", alignItems: "center", marginBottom: 0 }}>
      <motion.div className={"introText"} style={{ display: "flex", marginBottom: 0 }}>
        {items.map((text, index) => (
          <motion.h1
            key={index}
            style={{ display: "inline-block", marginRight: "10px" }}
            variants={slideleftAnim(0.1 * (index + 1))}
          >
            {text}
          </motion.h1>
        ))}
      </motion.div>
    </StyledDescription>
  );
};

export default PageHeaderText;
