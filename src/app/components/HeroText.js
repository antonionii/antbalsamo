import React, { useState, useEffect } from "react";
// Framer Motion
import { motion } from "framer-motion";
import { useWindowScroll, useMediaQuery } from "beautiful-react-hooks";
import { StyledDescription } from "../styles/styles";
import useDebounce from "../hooks/use-debounce";
import styled from "styled-components";

const HeroText = ({ numOfItems, itemsText, variant, fontSize, fontColor, fontWeight }) => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [screenHeight, setScreenHeight] = useState(null);
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


  // Ensure itemsText has enough text items for numOfItems
  const items = itemsText.slice(0, numOfItems);

  return (
    <StyledDescription
      style={{ display: "flex", alignItems: "left", marginBottom: 0 }}
    >
      <motion.div
        style={{ display: "flex" }}
      >
        {items.map((text, index) => (
          <StyledMotionH1  
            key={index}
            style={{
              fontWeight: fontWeight || "700", // Apply the fontWeight prop or default to "400"
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
            </StyledMotionH1>        ))}
      </motion.div>
    </StyledDescription>
  );
};

const StyledMotionH1 = styled(motion.h1)`
  margin-top: .2rem;

  @media (min-width: 780px) {
    margin-top: 1rem;
  }

  @media (min-width: 1300px) {
    margin-top: 1rem;
  }
`;
export default HeroText;
