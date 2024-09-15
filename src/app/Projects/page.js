"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PageHeaderText from "../components/PageHeaderText";
import { pageAnimation, slidedownAnim } from "../styles/animation";
import CardComponent from "../components/CardComponent";
import projectCardData from "../data/projectCardData";

const Projects = () => {
  const [accentTextColor, setAccentTextColor] = useState("");
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    // Ensure code runs only on the client-side
    if (typeof window !== "undefined") {
      // Fetch computed styles safely on the client
      const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accentText-color').trim();
      setAccentTextColor(accentColor);

      // Get window width
      setWindowWidth(window.innerWidth);

      // Add event listener for resizing
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      // Cleanup on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty dependency array ensures it runs once on mount

  // Only render content when `accentTextColor` is available (client-side render)
  if (!accentTextColor) {
    return null; // Prevent rendering until window-based data is available
  }

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div
        initial="hidden"
        animate="show"
        exit="exit"
        style={{ textAlign: "center" }}
      >
        <PageHeaderText
          numOfItems={8}
          itemsText={["🐸", "I'm", "endlessly", "adding", "to", "this", "page.", "🐸"]}
          variant={slidedownAnim}
          fontSize="1.4rem"
          fontColor={accentTextColor} // Value only available client-side
        />
      </motion.div>
      <CardComponent cards={projectCardData} /> {/* Render the project cards */}
    </motion.div>
  );
};

// Styled components
const ProjectsContainer = styled(motion.div)`
  margin: 8rem 0rem 0rem 0rem; /* Reduce top margin */
`;

export default Projects;
