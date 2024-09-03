import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
//Images
//Animations
import {motion} from "framer-motion";
import {pageAnimation, slidedownAnim} from "../styles/animation";
import {useMediaQuery} from "beautiful-react-hooks";
import Marquee from "react-fast-marquee";
import CardComponent from "../components/CardComponent";
import PageHeaderText from "../components/PageHeaderText";
import {BasicLayout} from "../styles/styles";

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
];

const ProjectsContainer = styled(motion.div)`

  margin: 8rem 0rem 0rem 0rem; /* Reduce top margin */
`;
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
    <div
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit"
    >

      <motion.div initial="hidden" animate="show" exit="exit">
      <PageHeaderText 
        numOfItems={8} 
        itemsText={["🐸","I'm","endlessly","adding","to","this","page.","🐸" ]}
        variant={slidedownAnim} 
        fontSize="1.4rem" 
        fontColor= "var(--text-color)"

      />
      </motion.div>
  <CardComponent cards={cardData} /> {/* Only show 4 cards */}  </div>

  );
};


export default Projects;
