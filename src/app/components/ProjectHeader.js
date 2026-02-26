"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import lottie from "lottie-web";
import { changeColor } from "./theme/changeColor";

const ProjectHeader = ({ colorSchemeType, setColorSchemeType }) => {
  const router = useRouter();
  const [direction, setDirection] = useState(1);
  const [isLight, setIsLight] = useState(false);
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
      <HeaderInner>
        <BackButton onClick={() => router.back()}>
          <span className="material-symbols-outlined">arrow_back</span>
        </BackButton>
        <DarkModeContainer>
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
        </DarkModeContainer>
      </HeaderInner>
      <NavLine />
    </StickyHeader>
  );
};

const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 15;
  background: var(--color-Background-Base);
  padding: 0.5rem 1rem;

  @media (min-width: 768px) {
    padding: 0.75rem 2.5rem;
  }

  @media (min-width: 1280px) {
    padding: 0.75rem 4rem;
  }
`;

const HeaderInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-Foreground-Text-Base);
  padding: 0.5rem;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  transition: background-color 0.2s ease;

  .material-symbols-outlined {
    font-size: 1.5rem;

    @media (min-width: 780px) {
      font-size: 1.8rem;
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const DarkModeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLine = styled.div`
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
`;

export default ProjectHeader;
