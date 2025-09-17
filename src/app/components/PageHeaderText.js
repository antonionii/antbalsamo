import React, { useState, useEffect } from "react";
// Framer Motion
import { motion } from "framer-motion";
import { useWindowScroll, useMediaQuery } from "beautiful-react-hooks";
import { StyledDescription } from "../styles/styles";
import useDebounce from "../hooks/use-debounce";
import styled from "styled-components";

const PageHeaderText = ({ numOfItems, itemsText, variant, fontSize, fontColor, fontWeight }) => {
  const [screenHeight, setScreenHeight] = useState(null);
const [scrollY, setScrollY] = useState(0); 
  const [circle1XPos, setCircle1XPos] = useState(0);
  const isMediumDisplay = useMediaQuery("(min-width: 780px)");
  const isLargeDisplay = useMediaQuery("(min-width: 1300px)");

useEffect(() => {
  if (typeof window !== "undefined") {
    setScrollY(window.scrollY);
  }
}, []);

  useEffect(() => {
  if (typeof window !== "undefined") {
    setScreenHeight(window.screen.availHeight);
  }
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
                color: fontColor || "var(--color-Foreground-Text-Default)",
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
  width: 100%;
  margin: 12rem auto 0 auto;
  
  padding: .5rem 0;
  border-radius: 1rem;
  background-color: var(--color-Background-Default);
  color: var(--color-Foreground-Text-Base);
  box-sizing: border-box;
  text-align: center;

  @media (min-width: 780px) {
    display: inline-block;
  width: auto;
    padding: .5rem .5rem;
    max-width: 700px;
      margin: 6rem auto 0 auto;

  }

@media (min-width: 1280px) {
  display: inline-block;
  width: auto;
  padding: .5rem 1rem;
  max-width: none;
}
`;


export default PageHeaderText;
