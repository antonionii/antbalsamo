"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from Next.js
import PageHeaderText from "./components/PageHeaderText";
import HeroText from "./components/HeroText";
import CardComponent from "./components/CardComponent";
import Button from "./components/ButtonComponent";
import Tags from "./components/Tags";
import StyledSnackbar from "./components/StyledSnackbar";
import projectCardData from "./data/projectCardData";
import { pageAnimation, cardAnimation, slideleftAnim, slidedownAnim } from './styles/animation';
import { useRouter } from "next/navigation";
import PasswordModal from "./components/PasswordModal"; 
import { PageContainer } from "./styles/PageContainer"; 
const Home = () => {
  const [colorForegroundTextDefault, setcolorForegroundTextDefault] = useState("");
  const [colorBackgroundDefault, setcolorBackgroundDefault] = useState("");
  const [isClient, setIsClient] = useState(false); // Track if it's client-side

  const [pendingCard, setPendingCard] = useState(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  useEffect(() => {
    // Check if we are on the client side
    if (typeof window !== "undefined") {
      setIsClient(true);
      const colorForegroundTextDefault = getComputedStyle(document.documentElement).getPropertyValue('--color-Foreground-Text-Default').trim();
      const colorBackgroundDefault = getComputedStyle(document.documentElement).getPropertyValue('--color-Background-Default').trim();
      setcolorForegroundTextDefault(colorForegroundTextDefault);
      setcolorBackgroundDefault(colorBackgroundDefault);
    }
  }, []);



  const [icon, setIcon] = useState("link");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isWiggling, setIsWiggling] = useState(false);
const [theme, setTheme] = useState("light");

useEffect(() => {
  // Read the theme from the CSS variable
  const getTheme = () => {
    const themeId = getComputedStyle(document.documentElement)
      .getPropertyValue('--theme-id')
      .trim();
    // If you use "b1" for dark, otherwise adjust as needed
    return themeId === "b1" ? "dark" : "light";
  };

  // Set initial theme
  setTheme(getTheme());

  // Listen for theme changes (optional: use a custom event if you trigger one in changeColor)
  const observer = new MutationObserver(() => {
    setTheme(getTheme());
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });

  return () => observer.disconnect();
}, []);


  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleIconClick = () => {
    setIsWiggling(true);
    setIcon("sentiment_satisfied");
    navigator.clipboard.writeText(window.location.href);
    setOpenSnackbar(true);

    setTimeout(() => {
      setIcon("link");
    }, 1500);

    setTimeout(() => {
      setIsWiggling(false);
    }, 2000);
  };

  const router = useRouter();

  const handlePasswordSuccess = () => {
    setShowPasswordModal(false);
    if (pendingCard) {
      router.push(pendingCard.linkTo);
      setPendingCard(null);
    }
  };

  useEffect(() => {
      if (typeof window === "undefined") return;

    window.isPasswordModalOpen = showPasswordModal;
  }, [showPasswordModal]);

  // Only render the component when on the client side
  if (!isClient) {
    return null; // Return null or a loading state for server-side rendering
  }
//https://i.imgur.com/IUJufqm.png
  return (
    <PageContainer>

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
            numOfItems={6}
            itemsText={[ "Product Designer" ]}
            variant={slideleftAnim}
            fontColor={colorForegroundTextDefault}
          />
          
          <StyledIcon
            className="material-symbols-outlined"
            data-icon="true" 
            animate={isWiggling ? { rotate: [0, 30, -30, 30, -30, 0] } : {}}
            transition={{ type: "spring", stiffness: 500, damping: 2, duration: 2 }}
            onClick={handleIconClick}
          >
            {icon}
          </StyledIcon>
        </HeroContainer>
        <HeroImage
  src={
    theme === "dark"
      ? "https://i.imgur.com/71KHhPR.png"
      : "https://i.imgur.com/ItIuUEc.png"
  }
  alt="picture of me"
/>
        <CardText>Designing creative and delightful experiences into scalable products.</CardText>
        <CardText>If you&apos;d like to work together, drop me a message at my email below.</CardText>
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
          itemsText={["Here ", "are ", "some ", "recent ", "highlights."]} 
          variant={slidedownAnim} 
          fontSize="1.4rem" 
          fontColor={colorForegroundTextDefault}
        />
      </div>
      <CardComponent 
      cards={projectCardData.slice(0, 4) } 
      onCardClick={card => {}}
      onProtectedCardClick={card => {
        setPendingCard(card);
        setShowPasswordModal(true);
}}
       />
      {/* Use Link for navigation */}
      <Button onClick={() => router.push("/Projects")}>
        See All Projects
      </Button>
  
      {showPasswordModal && (
        <PasswordModal
          isOpen={showPasswordModal}
          onClose={() => setShowPasswordModal(false)}
          onSuccess={handlePasswordSuccess}
        />
      )}
    </motion.div>
        </PageContainer>

  );
};

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;


`;

const CardText = styled.p`
  font-size: 1.2rem;
  color: var(--color-Foreground-Text-Default);
  font-weight: 500;
  margin-top: 5px;
  padding: 0.5rem 0rem 0rem 0rem;
  transition: font-weight 0.3s ease, text-shadow 0.3s ease;
`;

const HeroImage = styled.img`
  width: auto;
  height: auto;
  display: block;                // Make image a block element
  margin-left: auto;             // Center horizontally
  margin-right: auto;
  
  
  object-position: center 16%;
  @media (min-width: 780px) {

  }
  @media (min-width: 1300px) {
  width: auto;
  height: auto;  
    width: 60%;    
      object-position: center;
      padding: 0rem 2rem 0rem 0rem;

}
`;

const StyledSection = styled(motion.div)`
  width: 100%;
  margin: 12rem auto 0 auto;
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--color-Background-Default);
  color: var(--color-Foreground-Text-Default);
  box-sizing: border-box;
  overflow: hidden;

  @media (min-width: 780px) {
    width: 55%;
    margin: 12rem auto 0 auto;
    padding: 0rem 2rem 2rem 2rem;
  }

  @media (min-width: 1300px) {
    width: 35%;
    margin: 8rem auto 0 auto;
    padding: 0rem 2rem 2rem 2rem;
  }
`;

const ResponsiveHeroText = styled(HeroText)`
  display: flex;
  flex-wrap: wrap; /* Allow wrapping */
  align-items: flex-start;

  h1 {
    font-size: 1.5rem;
    margin-right: 0.4rem; /* Consistent spacing */
    line-height: 1.3;
    white-space: nowrap; /* Prevent text breaking within each item */
    flex: 0 0 auto; /* Prevent shrinking */

    @media (max-width: 780px) {
      font-size: 1.2rem; /* Smaller font size on mobile */
    }

    @media (min-width: 780px) {
      font-size: 2rem;
    }

    @media (min-width: 1300px) {
      font-size: 2.8rem;
    }
  }

  h1:first-of-type {
    flex-basis: 100%; /* Push to a new line */
    margin-bottom: 0.5rem; /* Add spacing below */
    
    @media (min-width: 780px) {
      flex-basis: auto; /* Revert for larger screens */
      margin-bottom: 0; /* Reset margin */
    }
  }
`;



const StyledIcon = styled(motion.span)`
  font-size: 2rem;
  display: inline-block;
  vertical-align: middle;
  margin-top: 0.8rem;
  color: var(--color-Foreground-Text-Default);
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
