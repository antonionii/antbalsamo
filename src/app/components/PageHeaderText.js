import React, { useState, useEffect } from "react";
// Framer Motion
import { motion } from "framer-motion";
import { useWindowScroll, useMediaQuery } from "beautiful-react-hooks";
import { StyledDescription } from "../styles/styles";
import useDebounce from "../hooks/use-debounce";
import styled from "styled-components";

const PageHeaderText = ({ numOfItems, itemsText, variant, fontSize, fontColor, fontWeight }) => {
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


  // Ensure itemsText has enough text items for numOfItems
  const items = itemsText.slice(0, numOfItems);
  
  return (
    <StyledMotionText>
      <StyledDescription style={{ display: "flex", alignItems: "center" }}>
        <motion.div className={"introText"} style={{ display: "flex", gap: "0.4rem" }}>
          {items.map((text, index) => (
            <motion.h1
              key={index}
              style={{
                display: "inline-block",

                fontWeight: fontWeight || "600",
                fontSize: fontSize || "4rem",
                color: fontColor || "var(--accentText-color)"
              }}
              variants={typeof variant === "function" ? variant(0.1 * (index + 1)) : variant}
            >
              {text}
            </motion.h1>
          ))}
        </motion.div>
      </StyledDescription>
    </StyledMotionText>
  );
};


const StyledMotionText = styled.section`
  display: inline-block; /* Ensure the width and height hug the content */
  margin: 8rem auto 0 auto;  /* Center horizontally and set top margin */
  padding: .5rem .5rem; /* Add padding for better visual spacing */
  border-radius: 1rem;
  background-color: var(--card-color);
  color: var(--text-color);
  box-sizing: border-box;
  text-align: center; /* Center text content */

  @media (min-width: 780px) {
    padding: .5rem .5rem; /* Increase padding on larger screens */
  }

  @media (min-width: 1300px) {
    padding: .5rem .5rem; /* Increase padding on larger screens */
  }
`;


export default PageHeaderText;
