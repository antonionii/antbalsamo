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
  style={{
    display: "flex",
    flexWrap: "wrap",  // Enable wrapping only when necessary
    justifyContent: "flex-start",  // Align text to the left
    width: "100%",  // Make sure it spans the full width
    gap: "0.2rem",  // Add consistent space between words, but not dynamic growth
  }}
>
        {items.map((text, index) => (
          <StyledMotionH1
            key={index}
            style={{
              fontWeight: fontWeight || "700", // Apply the fontWeight prop or default to "400"
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
          </StyledMotionH1>))}
      </motion.div>
    </StyledDescription>
  );
};

const StyledMotionH1 = styled(motion.h1)`
  margin-top: 0.2rem;
  white-space: normal;  // Ensure the text wraps when necessary
  line-height: 1.3;
  overflow-wrap: break-word; // Break long words if needed
  text-align: left; // Ensure text aligns left, but wraps if needed
  flex-shrink: 0; // Prevent the text from shrinking too much
  display: inline-block; // Keep the items inline but allow wrapping
  max-width: 100%; // Prevent it from overflowing beyond its container

  @media (min-width: 780px) {
    margin-top: 1rem;
  }

  @media (min-width: 1300px) {
    margin-top: 1rem;
  }
`;

export default HeroText;
