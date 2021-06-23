import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useScroll } from "./useScroll";
import { navReveal } from "../animation";
import { useIntersection } from "react-use";
import { bodymovin } from "bodymovin";
import lottie from "lottie-web";
import animationData from "../img/darkmode24sec.json";
import darkmode24sec from "../img/darkmode24sec.json";

const Nav = () => {
  let animObj = null;
  let animBox = null;
  const { pathname } = useLocation();

  const [element, controls] = useScroll();
  const sectionRef = useRef(null);
  // All the reg to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "200px",
    threshold: 1,
  });

  //call the loadAnimation to start the animation
  /* animObj = lottie.loadAnimation({
    container: this.animBox, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: animationData, // the path to the animation json
    
  });
  
  
  
  */
  return (
    <StyledNav id="nav">
      <h1>
        <Link id="Logo" to="/">
          anthony balsamo
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Me </Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/Work">Work </Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/Work" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/ContactMe">Contact Me </Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/ContactMe" ? "50%" : "0%" }}
          />
        </li>
      </ul>
      <NavLine id="bm" />
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  min-height: 7vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 0rem 34rem 0rem 0rem;
    list-style: none;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #Logo {
      display: inline-block;
      margin: 0.5rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;

      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #120000;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

const NavLine = styled(motion.div)`
  height: 0.1rem;
  background: #120000;
  width: 100%;
  position: absolute;
  top: -10%;
  bottom: 0%;
  left: 0%;
  &:after {
    height: 0.1rem;
    background: #120000;
    width: 100%;
    position: absolute;
    top: 100%;
    bottom: 0%;
    left: 0%;
  }
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
