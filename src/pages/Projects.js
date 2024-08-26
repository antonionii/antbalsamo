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


const Projects = () => {
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
    <div>
    <CardComponent />
  </div>
  );
};


export default Projects;
