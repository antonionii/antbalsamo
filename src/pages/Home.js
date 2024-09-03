import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageHeaderText from "../components/PageHeaderText";
import HeroText from "../components/HeroText";

//Animations
import {motion} from "framer-motion";
import CardComponent from "../components/CardComponent";
import Button from "../components/ButtonComponent";
import { useHistory } from "react-router-dom";
import {BasicLayout} from "../styles/styles";
import {pageAnimation, slidedownAnim, slideleftAnim, sliderightAnim} from "../styles/animation";
import Tags from "../components/Tags";
const cardData = [
  {
    title: "Notification System",
    image: "https://i.imgur.com/9Fd7bXq.png",
    text: "Description for Card 1",
    linkTo: "https://sudsy-scarf-562.notion.site/Notification-System-80e79e864f4f4c57b029a0b3439b4889?pvs=25",
    bubbleText: "Open Project",
  },
  {
    title: "Mingo",
    image: "https://i.imgur.com/UUYRNC8.gif",
    text: "Description for Card 2",
    linkTo: "/destination2",
    bubbleText: "Open Project",
  },
  {
    title: "Grouped Card View",
    image: "https://i.imgur.com/Cjkqvhv.png",
    text: "Description for Card 2",
    linkTo: "https://sudsy-scarf-562.notion.site/Grouped-Card-View-3328b05dcbba4ba7900873e790e145c6?pvs=25",
    bubbleText: "Open Project",
  },
  {
    title: "Insights & Workflows",
    image: "https://i.imgur.com/VMYlrXR.png",
    text: "Description for Card 2",
    linkTo: "https://sudsy-scarf-562.notion.site/Insights-Workflows-0a625c571aa34731ad7fd2d2c7f37a95?pvs=25",
    bubbleText: "Open Project",    
  },
  {
    title: "Activity Feed",
    image: "https://i.imgur.com/Kp9t8OG.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
    bubbleText: "Open Project",
  },
  {
    title: "Monitor Diagnostics",
    image: "https://i.imgur.com/YOch4l7.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
    bubbleText: "Open Project",
  },
  {
    title: "Campus Viewer",
    image: "https://i.imgur.com/SIuy1xj.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
    bubbleText: "Open Project",
  },
  {
    title: "Seal the Spoiler King",
    image: "https://i.imgur.com/vFh0hCo.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
    bubbleText: "Open Project",
  },
  // Add more cards as needed
];const Home = () => {

  const accentTextColor = getComputedStyle(document.documentElement).getPropertyValue('--accentText-color').trim();
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default scrolling behavior
    history.push("/Projects"); // Navigate to the /projects path
  };
  return (
    <motion.div initial="hidden" animate="show" exit="exit" style={{ display: 'block' }}>
    <StyledSection className="bg-section">
      <ResponsiveHeroText 
        numOfItems={5} 
        itemsText={["Designing", "scalable", "products",]} 
        variant={slideleftAnim} 
        fontColor={accentTextColor}
      />
            <HeroImage src={"https://i.imgur.com/kxtX2ZX.png"} alt={"picture of me"} />

      <Tags />

    </StyledSection>
  
    <div style={{  textAlign: "center" }}>
      <PageHeaderText 
        numOfItems={7} 
        itemsText={["👇","Here ","are ","some ","recent ","highlights.","👇",]}
        variant={slidedownAnim} 
        fontSize="1.4rem"
        fontColor={accentTextColor}
      />
    </div>
  
    <CardComponent cards={cardData.slice(0, 4)} />
    <Button onClick={handleClick}>See All Projects</Button>
  </motion.div>
  
  );
};
const HeroImage = styled.img`
  width: calc(100% + 2rem); /* Make the image wider to cover padding */
  height: auto;
  max-height: 20rem;
  margin-top: 1rem;
  margin-left: -1rem; /* Offset to the left to account for the section's padding */
  margin-right: -1rem; /* Offset to the right to account for the section's padding */
  object-fit: cover;

  object-position: center 16%; /* Move the image up */
  @media (min-width: 780px) {
  width: calc(100% + 4rem); /* Make the image wider to cover padding */
  margin-left: -2rem; /* Offset to the left to account for the section's padding */
  }

  @media (min-width: 1300px) {
  width: calc(100% + 4rem); /* Make the image wider to cover padding */
  }
`;


const StyledSection = styled.section`
  width: 80%;
  margin: 12rem auto 0 auto;  /* Auto margins for centering */
    padding: 1rem;
  border-radius: 1rem;
  background-color: var(--card-color);
  color: var(--text-color);
  box-sizing: border-box;
  overflow: hidden; /* Ensures that content, like the image, stays within the section */

  @media (min-width: 780px) {
    width: 55%;
    margin: 12rem auto 0 auto; /* Maintain top margin consistency */
    padding: 0rem 2rem 2rem 2rem;
  }

  @media (min-width: 1300px) {
    width: 35%;
    margin: 12rem auto 0 auto; /* Maintain top margin consistency */
    padding: 0rem 2rem 2rem 2rem;
  }
`;
const ResponsiveHeroText = styled(HeroText)`
  h1 {
    font-size: 1.5rem;

    @media (min-width: 780px) {
      font-size: 2.2rem;
    }

    @media (min-width: 1300px) {
      font-size: 3rem;
    }
  }
`;
export default Home;
