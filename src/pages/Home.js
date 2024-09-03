import React from "react";
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
  const textColor = getComputedStyle(document.documentElement).getPropertyValue('var(--text-color)').trim();

  const accentTextColor = getComputedStyle(document.documentElement).getPropertyValue('--accentText-color').trim();
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default scrolling behavior
    history.push("/Projects"); // Navigate to the /projects path
  };
  return (
    <div
variants={pageAnimation}
initial="hidden"
animate="show"
exit="exit"
>

    <motion.div initial="hidden" animate="show" exit="exit">
      <section style = {{width: "45%", margin: "12rem auto auto auto", borderRadius: "1rem"}}className="bg-section">
    <HeroText 
        numOfItems={5} 
        itemsText={["Designing", "scalable", "products",]} 
        variant={slideleftAnim} 
        fontSize="2.2rem" 
        fontColor={accentTextColor}
      />
    <Tags />
    </section>
    <div style={{margin:"6rem 0rem 0rem 0rem"}}>
    <PageHeaderText 
        numOfItems={7} 
        itemsText={["👇","Here","are","some","recent","highlights.","👇",]}
        variant={slidedownAnim} 
        fontSize="1.4rem"
        fontColor= "var(--text-color)"

      />
      </div>
      <CardComponent cards={cardData.slice(0, 4)} /> {/* Only show 4 cards */}
      <Button onClick={handleClick}>See All Projects</Button>    </motion.div></div>
  );
};

export default Home;
