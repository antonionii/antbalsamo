import React, {useRef, useState} from "react";
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {motion} from "framer-motion";
import {useScroll} from "./useScroll";
import {useIntersection} from "react-use";
import lottie from "lottie-web";
import {slidedownAnim, slideleftAnim, textFade} from "../animation";

import {changeColor} from "../theme/changeColor";

const Nav = ({ colorSchemeType, setColorSchemeType }) => {
  let animObj = null;
  let animBox = null;
  const { pathname } = useLocation();

  const [direction, setDirection] = useState(1);
  const [isLight, setIsLight] = useState(false);

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
    setIsLight(colorSchemeType === "light");
    const newDirection = colorSchemeType === "light" ? 1 : -1;

    if (newDirection !== direction) {
      setDirection(newDirection);
      setIsLight(newDirection === 1)
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

  function startAnimation(event) {
    if(event) {
      event.stopPropagation()
    }
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
      setIsLight(true)
    } else {
      // from light to dark
      anim.setSpeed(1);
      changeColor("dark");
      setColorSchemeType("dark");
      setIsLight(false)
    }
    // change direction
    setDirection(direction * -1);
    
  }

  return (
    <StyledNav id="nav" isLight= {isLight}>
      <motion.div
        transition-delay="2s"
        initial="hidden"
        animate="show"
        variants={textFade}
      >
        <h2>
          <Link id="Logo" to="/">
            Anthony Balsamo
          </Link>
        </h2>
      </motion.div>
      <ul>
      <NavItem isActive={pathname === "/AboutMe"}>
          <motion.div initial="hidden" animate="show" variants={slidedownAnim()}>
            <Link to="/AboutMe">About</Link>
          </motion.div>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{
              width: pathname === "/AboutMe" ? "50%" : "0%",
            }}
          />
        </NavItem>
        <NavItem isActive={pathname === "/Projects"}>
          <motion.div
            initial="hidden"
            animate="show"
            variants={slidedownAnim(0.1)}
          >
            <Link to="/Projects">Projects </Link>
          </motion.div>

          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{
              width: pathname === "/Projects" ? "50%" : "0%",
            }}
          />
        </NavItem>
        <NavItem isActive={pathname === "/Resume"}>
          <motion.div
            initial="hidden"
            animate="show"
            variants={slidedownAnim(0.2)}
          >
            <Link to="/Resume">Resume </Link>
          </motion.div>

          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{
              width: pathname === "/Resume" ? "50%" : "0%",
            }}
          />
        </NavItem>
        <li style={{display: "flex", alignItems: "flex-end", justifyContent: "flex-end", flex: "1" }}>
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideleftAnim(0.4)}
          >
            <div className="anime-contain"
              id="animationContainer"
              ref={animationContainer}
              onClick={(event) => startAnimation(event)}
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
 .anime-contain {
  
  }
  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    pointer-events: auto;
  }
  @media (max-width: 667px) {
    flex-direction: column;
    padding: 2rem 1rem;
    background: var(--background-color);
    transition: 0.3s all ease-in-out;

    
    #Logo {
      display: inline-block;
      margin: 0.5rem;
    }
    ul {
      padding: 1rem;
      width: 100%;      
      //justify-content: space-around;
      gap:5%;
      margin: auto;
      justify-content:center;
      align-items: center;

      li {
        padding: 0;
      }
    }
  }
`;

const NavItem = styled.li`
  position: relative;

  a {

      font-family: ${(props) => (props.isActive ? "Rubik, sans-serif" : "inherit")};
      font-size: ${(props) => (props.isActive ? "2.2rem" : "1.8rem")};
      color: ${(props) => (props.isActive ? "var(--accent-color)" : "inherit")};

      font-weight: ${(props) =>
      props.isActive ? "900" : "regular"};
      
    transition: color 0.3s ease, text-shadow 0.3s ease;
  }
`;

const Line = styled(motion.div)`
  height: .5rem;
  background: var(--line-color, "#000");
  width: 0%;
  position: absolute;
  border-radius: 6rem;
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
