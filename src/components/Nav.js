import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useScroll } from "./useScroll";
import { useIntersection } from "react-use";
import lottie from "lottie-web";
import {
  slidedownAnim,
  sliderightAnim,
  fade,
  slideleftAnim,
  textFade,
} from "../animation";

import { changeColor } from "../theme/changeColor";

const Nav = ({ colorSchemeType, setColorSchemeType }) => {
  let animObj = null;
  let animBox = null;
  const { pathname } = useLocation();

  const [direction, setDirection] = useState(1);

  const [hoveredMenuItem, sethoveredMenuItem] = useState("");

  const [element, controls] = useScroll();
  const sectionRef = useRef(null);
  // All the reg to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "200px",
    threshold: 1,
  });

  let animationContainer = React.createRef();

  const [anim, setAnim] = useState(null);

  React.useEffect(() => {
    const newDirection = colorSchemeType === "light" ? 1 : -1;

    if (newDirection !== direction) {
      setDirection(newDirection);
      startAnimation();
    }
  }, [colorSchemeType]);

  React.useEffect(() => {
    if (anim) {
      return;
    }

    let tempAnim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "https://assets1.lottiefiles.com/packages/lf20_ebutdyzo.json",
    });
    setAnim(tempAnim);
    console.log("anim is set");
  }, []);

  function startAnimation() {
    if (!anim) {
      return;
    }
    anim.setDirection(direction);
    anim.play();
    if (direction === -1) {
      // from dark to light
      anim.setSpeed(2);
      changeColor("light");
      setColorSchemeType("light");
    } else {
      // from light to dark
      anim.setSpeed(1);
      changeColor("dark");
      setColorSchemeType("dark");
    }
    // change direction
    setDirection(direction * -1);

    // This seems to fire immediately,å before the icon has completed its animation?
    // anim.addEventListener('loopComplete', complete(icon));

    // Suggestion
    // https://github.com/bodymovin/bodymovin/issues/622#issuecomment-331753202
  }

  return (
    <StyledNav id="nav">
      <motion.div
        transition-delay="2s"
        initial="hidden"
        animate="show"
        variants={textFade}
      >
        <h1>
          <Link id="Logo" to="/">
            ANTHONY BALSAMO
          </Link>
        </h1>
      </motion.div>
      <ul>
        <li
          onMouseOver={() => sethoveredMenuItem("/")}
          onMouseOut={() => sethoveredMenuItem("")}
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={slidedownAnim()}
          >
            <Link to="/AboutMe">ABOUT ME</Link>
          </motion.div>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{
              width:
                pathname === "/AboutMe" || hoveredMenuItem === "/"
                  ? "50%"
                  : "0%",
            }}
          />
        </li>
        <li
          onMouseOver={() => sethoveredMenuItem("/Work")}
          onMouseOut={() => sethoveredMenuItem("")}
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={slidedownAnim(0.3)}
          >
            <Link to="/Work">WORK </Link>
          </motion.div>

          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{
              width:
                pathname === "/Work" || hoveredMenuItem === "/Work"
                  ? "50%"
                  : "0%",
            }}
          />
        </li>
        <li
          onMouseOver={() => sethoveredMenuItem("/ContactMe")}
          onMouseOut={() => sethoveredMenuItem("")}
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={slidedownAnim(0.5)}
          >
            <Link to="/ContactMe">CONTACT ME </Link>
          </motion.div>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{
              width:
                pathname === "/ContactMe" || hoveredMenuItem === "/ContactMe"
                  ? "50%"
                  : "0%",
            }}
          />
        </li>
        <li>
          <motion.div initial="hidden" animate="show" variants={slideleftAnim}>
            <div
              id="animationContainer"
              ref={animationContainer}
              onClick={startAnimation}
              style={{ width: 30, height: 30, cursor: "pointer" }}
            ></div>
          </motion.div>
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 15;
  background: var(--background-color);
  transition: 0.3s all ease-in-out;
  pointer-events: none;

  h1 {
    pointer-events: auto;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    pointer-events: auto;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 2rem 1rem;
    background: var(--background-color);

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
  height: 1px;
  background: var(--line-color, "#000");
  width: 0%;
  position: absolute;
  bottom: -1rem;
  right: 0;
`;

const NavLine = styled(motion.div)`
  height: 4px;
  background: #ff0000;
  width: 100%;
  position: absolute;
  top: -10%;
  bottom: 0%;
  left: 0%;
  &:after {
    height: 4px;
    background: #ffff00;
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
