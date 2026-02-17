"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import lottie from "lottie-web";
import { slidedownAnim, slideleftAnim, textFade } from "../styles/animation";
import { changeColor } from "./theme/changeColor";

const NavHeader = ({ colorSchemeType, setColorSchemeType }) => {
  const pathname = usePathname();
  const [direction, setDirection] = useState(1);
  const [isLight, setIsLight] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const animationContainer = useRef(null);
  const animRef = useRef(null);

  const startAnimation = useCallback(
    (event) => {
      if (event) {
        event.stopPropagation();
      }
      if (!animRef.current) {
        return;
      }
      animRef.current.setDirection(direction);
      animRef.current.play();

      if (direction === -1) {
        animRef.current.setSpeed(2);
        changeColor("light");
        setColorSchemeType("light");
        setIsLight(true);
      } else {
        animRef.current.setSpeed(1);
        changeColor("dark");
        setColorSchemeType("dark");
        setIsLight(false);
      }

      setDirection(direction * -1);
    },
    [direction, setColorSchemeType]
  );

  useEffect(() => {
    setIsLight(colorSchemeType === "light");
    const newDirection = colorSchemeType === "light" ? 1 : -1;
    if (newDirection !== direction) {
      setDirection(newDirection);
      startAnimation();
    }
  }, [colorSchemeType, direction, startAnimation]);

  useEffect(() => {
    if (pathname.startsWith("/Projects") || pathname.startsWith("/Blocks")) {
      setActiveItem("/Projects");
    } else if (pathname.startsWith("/Blog") || pathname.startsWith("/Blogs")) {
      setActiveItem("/Blog");
    } else {
      setActiveItem(pathname);
    }
  }, [pathname]);

  useEffect(() => {
    if (!animRef.current && typeof window !== "undefined") {
      animRef.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "https://assets1.lottiefiles.com/packages/lf20_ebutdyzo.json",
      });
    }

    return () => {
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, []);

  return (
    <StickyHeader>
      <NavInner>
        <ul>
          <motion.div
            transition-delay="0s"
            initial="hidden"
            animate="show"
            variants={textFade}
          >
            <NavItem
              style={{ paddingLeft: "0" }}
              isActive={activeItem === "/"}
              onClick={() => setActiveItem("/")}
            >
              <motion.div initial="hidden" animate="show" variants={slidedownAnim()}>
                <Link href="/" onClick={() => setActiveItem("/")}>
                  Anthony Balsamo
                </Link>
              </motion.div>
              <Line
                transition={{ duration: 0.5 }}
                initial={{ width: "0%" }}
                animate={{
                  width: activeItem === "/" ? "100%" : "0%",
                }}
              />
            </NavItem>
          </motion.div>

          <NavItem isActive={activeItem === "/Projects"}>
            <motion.div
              initial="hidden"
              animate="show"
              variants={slidedownAnim(0.1)}
            >
              <Link href="/Projects" onClick={() => setActiveItem("/Projects")}>
                Projects
              </Link>
            </motion.div>
            <Line
              transition={{ duration: 0.5 }}
              initial={{ width: "0%" }}
              animate={{
                width: activeItem === "/Projects" ? "80%" : "0%",
              }}
            />
          </NavItem>

          {/* <NavItem isActive={activeItem === "/Blog"}>
            <motion.div
              initial="hidden"
              animate="show"
              variants={slidedownAnim(0.2)}
            >
              <Link href="/Blog" onClick={() => setActiveItem("/Blog")}>
                Blog
              </Link>
            </motion.div>
            <Line
              transition={{ duration: 0.5 }}
              initial={{ width: "0%" }}
              animate={{
                width: activeItem === "/Blog" ? "65%" : "0%",
              }}
            />
          </NavItem> */}

          <NavItem>
            <motion.div
              initial="hidden"
              animate="show"
              variants={slidedownAnim(0.3)}
            >
              <a
                href="/Anthony Balsamo Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                Resume
              </a>
            </motion.div>
          </NavItem>

          <li style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
            <motion.div
              initial="hidden"
              animate="show"
              variants={slideleftAnim(0.4)}
            >
              <div
                className="anime-contain"
                ref={animationContainer}
                onClick={startAnimation}
                style={{
                  width: 30,
                  height: 30,
                  cursor: "pointer",
                }}
              />
            </motion.div>
          </li>
        </ul>
      </NavInner>
      <NavLine />
    </StickyHeader>
  );
};

/* ── Styled Components ── */

const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 15;
  background: var(--color-Background-Base);
  padding: 1rem 2rem 1rem;

  @media (min-width: 768px) {
    padding: 1rem 2.5rem 1rem;
  }

  @media (min-width: 1280px) {
    padding: 1rem 4rem 1rem;
  }
`;

const NavInner = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  color: var(--color-Foreground-Text-Base);

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 0;
  }

  @media (max-width: 1100px) {
    ul {
      flex-wrap: wrap;
      justify-content: center;
      gap: 5%;
    }
  }

  @media (max-width: 667px) {
    ul {
      flex-wrap: wrap;
      justify-content: center;
      gap: 5%;
    }
  }
`;

const NavItem = styled.li`
  position: relative;
  list-style: none;
  height: 2.8rem;
  line-height: 2.1rem;
  padding-left: 1rem;

  a {
    font-size: ${(props) =>
      props.noResize ? "1.6rem" : props.isActive ? "2rem" : "1.6rem"};
    color: ${(props) =>
      props.isActive ? "var(--color-Foreground-Text-Base)" : "inherit"};
    font-weight: ${(props) => (props.isActive ? "900" : "regular")};
  }
`;

const Line = styled(motion.div)`
  height: 0.5rem;
  background: var(--color-Foreground-Border-Default);
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

export default NavHeader;
