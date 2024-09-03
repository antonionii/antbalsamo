import React, { useState, useEffect } from "react";
// Framer Motion
import { motion } from "framer-motion";
import { useWindowScroll, useMediaQuery } from "beautiful-react-hooks";
import { StyledDescription } from "../styles/styles";
import useDebounce from "../hooks/use-debounce";

const HeroText = ({ numOfItems, itemsText, variant, fontSize, fontColor, fontWeight }) => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [screenHeight, setScreenHeight] = useState(null);
  const [circle1XPos, setCircle1XPos] = useState(0);
  const isMediumDisplay = useMediaQuery("(min-width: 780px)");
  const isLargeDisplay = useMediaQuery("(min-width: 1300px)");

  useWindowScroll(() => {
    setScrollY(window.scrollY);
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
  }, [debouncedScrollY, screenHeight]);

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
    <StyledDescription
      style={{ display: "flex", alignItems: "center", marginBottom: 0 }}
    >
      <motion.div
        className={"introText"}
        style={{ display: "flex" }}
      >
        {items.map((text, index) => (
          <motion.h1
            key={index}
            style={{
              fontFamily: '"Rubik", sans-serif', // Apply the Rubik font family
              fontWeight: fontWeight || "700", // Apply the fontWeight prop or default to "400"
              marginTop: "2rem",
              display: "inline-block",
              marginRight: ".6rem",
              fontSize: fontSize || "2rem", // Apply the fontSize prop or default to "2rem"
              color: fontColor || "var(--accentText-color)", // Apply the fontColor prop or default to a CSS variable
            }}
            variants={
              typeof variant === "function"
                ? variant(0.1 * (index + 1))
                : variant
            }
          >
            {text}
          </motion.h1>
        ))}
      </motion.div>
    </StyledDescription>
  );
};

export default HeroText;
