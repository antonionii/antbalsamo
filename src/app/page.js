"use client";
import React, { useState } from "react";import styled from "styled-components";
import { Link } from "react-router-dom";
import PageHeaderText from "./components/PageHeaderText";
import HeroText from "./components/HeroText";
//Animations
import {motion} from "framer-motion";
import CardComponent from "./components/CardComponent";
import Button from "./components/ButtonComponent";
import { useHistory } from "react-router-dom";
import {BasicLayout} from "./styles/styles";
import {pageAnimation, slidedownAnim, slideleftAnim, sliderightAnim, cardAnimation} from "./styles/animation";
import Tags from "./components/Tags";
import StyledSnackbar from "./components/StyledSnackbar";
import projectCardData from "./data/projectCardData"; 


const Home = () => {
  const accentTextColor = getComputedStyle(document.documentElement).getPropertyValue('--accentText-color').trim();
  const cardColor = getComputedStyle(document.documentElement).getPropertyValue('--card-color').trim();
  
  const history = useHistory();
  const [icon, setIcon] = useState("link");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isWiggling, setIsWiggling] = useState(false);
  
  
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleClick = (event) => {
    event.preventDefault();
    history.push("/Projects");
  };

  const handleIconClick = () => {
    setIsWiggling(true); 
    setIcon("sentiment_satisfied");
    navigator.clipboard.writeText(window.location.href);
    setOpenSnackbar(true);

    setTimeout(() => {
      setIcon("link");
    }, 1500); // Change back to "link" before the animation ends

    setTimeout(() => {
      setIsWiggling(false);
    }, 2000); // End the wiggle animation after 1.2 seconds

  };

  return (
    <motion.div 
    variants={pageAnimation} 
    initial="hidden" 
    animate="show" 
    exit="exit" 
    style={{ display: 'block' }}
    >
      <StyledSection variants={cardAnimation} className="bg-section">
        <HeroContainer>
          <ResponsiveHeroText
            numOfItems={5}
            itemsText={["Product", "+", "Game", "Designer"]}
            variant={slideleftAnim}
            fontColor={accentTextColor}
          />
          
          <StyledIcon
            className="material-symbols-outlined"
            data-icon="true"  // Add this attribute to identify the icon
            animate={isWiggling ? { rotate: [0, 30, -30, 30, -30, 0] } : {}}
            transition={{ type: "spring", stiffness: 500, damping: 2, duration: 2 }}
            onClick={handleIconClick}
          >
            {icon}
          </StyledIcon>
        </HeroContainer>
        <HeroImage src={"https://i.imgur.com/kxtX2ZX.png"} alt={"picture of me"} />
        <CardText>Designing creative and delightful experiences into scalable products.</CardText>
        <CardText>If you'd like to work together, drop me a message at my email below.</CardText>
        <Tags />
      </StyledSection>
      <StyledSnackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message="Copied link: Tony's Website"
      />
      <div style={{ textAlign: "center" }}>
        <PageHeaderText 
          numOfItems={7} 
          itemsText={["👇", "Here ", "are ", "some ", "recent ", "highlights.", "👇"]} 
          variant={slidedownAnim} 
          fontSize="1.4rem" 
          fontColor={accentTextColor}
        />
      </div>
      <CardComponent cards={projectCardData.slice(0, 4)} />
      <Button onClick={handleClick}>See All Projects</Button>
    </motion.div>
  );
};

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 780px) {
    flex-direction: column-reverse; /* Reverse the order of children (Icon above Text) */
    align-items: flex-end; /* Align items to the start (left) */
    margin-top: -1.5rem; /* Decrease space above the link button */
  }
`;



const CardText = styled.p`
  font-size: 1.2rem;
  color: black;
  font-weight: 500;
  margin-top: 5px;
  padding: 0.5rem 0rem 0rem 0rem;
  transition: font-weight 0.3s ease, text-shadow 0.3s ease;
`;

const HeroImage = styled.img`
  width: calc(100% + 2rem);
  height: auto;
  max-height: 20rem;
  margin-top: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;
  object-fit: cover;
  object-position: center 16%;
  @media (min-width: 780px) {
    width: calc(100% + 4rem);
    margin-left: -2rem;
  }
  @media (min-width: 1300px) {
    width: calc(100% + 4rem);
  }
`;

const StyledSection = styled(motion.div)`
  width: 80%;
  margin: 12rem auto 0 auto;
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--card-color);
  color: var(--text-color);
  box-sizing: border-box;
  overflow: hidden;
  @media (min-width: 780px) {
    width: 55%;
    margin: 12rem auto 0 auto;
    padding: 0rem 2rem 2rem 2rem;
  }
  @media (min-width: 1300px) {
    width: 35%;
    margin: 12rem auto 0 auto;
    padding: 0rem 2rem 2rem 2rem;
  }
`;

const ResponsiveHeroText = styled(HeroText)`
  text-align: left;
  h1 {
    font-size: 1.5rem;
    text-align: left;
    @media (min-width: 780px) {
      font-size: 2.2rem;
    }
    @media (min-width: 1300px) {
      font-size: 3rem;
    }
  }
`;


const StyledIcon = styled(motion.span)`
  font-size: 2rem;
  display: inline-block;
  vertical-align: middle;
  margin-top: 0.8rem;
  color: var(--accentText-color);
  cursor: pointer;
  padding: .5rem;
  border-radius: 10%;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }

  @media (max-width: 780px) {
    margin-top: 0.5rem;
    &:hover {
      background-color: transparent; 
    }
  }
`;
export default Home;