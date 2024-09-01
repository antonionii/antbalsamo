import React from "react";
import IntroSection from "../components/IntroSection";
//Animations
import {motion} from "framer-motion";
import AboutMe from "./AboutMe";
import CardComponent from "../components/CardComponent";

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
const Home = () => {
  return (
    <motion.div  initial="hidden" animate="show" exit="exit">
      <IntroSection />
  <CardComponent cards={cardData} /> {/* Only show 4 cards */} 
     <AboutMe></AboutMe>
    </motion.div>
  );
};

export default Home;
