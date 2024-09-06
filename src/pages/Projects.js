import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
//Images
//Animations
import {motion} from "framer-motion";
import {pageAnimation, slidedownAnim} from "../styles/animation";
import {useMediaQuery} from "beautiful-react-hooks";
import Marquee from "react-fast-marquee";
import CardComponent from "../components/CardComponent";
import PageHeaderText from "../components/PageHeaderText";
import {BasicLayout} from "../styles/styles";
import projectCardData from "../data/projectCardData"; 



const ProjectsContainer = styled(motion.div)`

  margin: 8rem 0rem 0rem 0rem; /* Reduce top margin */
`;
const Projects = () => {
  // const [element, controls] = useScroll();
  // const [element2, controls2] = useScroll();
  const w = window.innerWidth;
  const accentTextColor = getComputedStyle(document.documentElement).getPropertyValue('--accentText-color').trim();

  console.log(w);

  useEffect(() => {
    console.log("rendered!");
  });

  const isLargeDisplay = useMediaQuery("(min-width: 48rem)");

  // const col2ScrollSpeed = isLargeDisplay ? "2" : "1";

  return (
    <div
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit"
    >

      <motion.div initial="hidden" animate="show" exit="exit" style={{  textAlign: "center" }}>

      <PageHeaderText 
        numOfItems={8} 
        itemsText={["🐸","I'm","endlessly","adding","to","this","page.","🐸" ]}
        variant={slidedownAnim} 
        fontSize="1.4rem" 
        fontColor={accentTextColor}

      />
      </motion.div>
  <CardComponent cards={projectCardData} /> {/* Only show 4 cards */}  </div>

  );
};


export default Projects;
