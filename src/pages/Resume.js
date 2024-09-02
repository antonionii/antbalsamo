import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
//Images
//Animations
import {motion} from "framer-motion";
import {pageAnimation} from "../animation";
import {useMediaQuery} from "beautiful-react-hooks";
import Marquee from "react-fast-marquee";
import CardComponent from "../components/CardComponent";
import PageHeaderText from "../components/PageHeaderText";
import {BasicLayout} from "../styles";

const ProjectsContainer = styled(motion.div)`
  @media (min-width: 780px) {
    display: flex;
  }
  @media (min-width: 1300px) {
    display: flex;
  }
  margin: 8rem 0rem 0rem 0rem; /* Reduce top margin */
`;
const Resume = () => {
  // const [element, controls] = useScroll();
  // const [element2, controls2] = useScroll();
  const w = window.innerWidth;
  console.log(w);

  useEffect(() => {
    console.log("rendered!");
  });

  const isLargeDisplay = useMediaQuery("(min-width: 48rem)");

  // const col2ScrollSpeed = isLargeDisplay ? "2" : "1";

  return (
    <BasicLayout>
      <motion.div initial="hidden" animate="show" exit="exit">
      <PageHeaderText
      numOfItems={4}
      itemsText={["📄","Another","One","📄"]}
    />
      </motion.div></BasicLayout>
  );
};


export default Resume;
