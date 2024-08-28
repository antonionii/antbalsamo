import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
//Images
//Animations
import {motion} from "framer-motion";
import {pageAnimation} from "../animation";
import {useMediaQuery} from "beautiful-react-hooks";
import Marquee from "react-fast-marquee";
import CardComponent from "../components/CardComponent";

const cardData = [
  {
    title: "In App Notification",
    image: "https://i.imgur.com/vFh0hCo.png",
    text: "Description for Card 1",
    linkTo: "/destination1",
    bubbleText: "Open Project",
  },
  {
    title: "Workflows UX",
    image: "https://i.imgur.com/vFh0hCo.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
    bubbleText: "Open Project",

  },
  {
    title: "Card 3",
    image: "https://i.imgur.com/vFh0hCo.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
    bubbleText: "Open Project",

    
  },
  {
    title: "Card 4",
    image: "https://i.imgur.com/vFh0hCo.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
    bubbleText: "Open Project",

  },
  {
    title: "Card 5",
    image: "https://i.imgur.com/vFh0hCo.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
    bubbleText: "Open Project",

  },
  {
    title: "Card 6",
    image: "https://i.imgur.com/vFh0hCo.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
    bubbleText: "Open Project",

  },
  {
    title: "Card 7",
    image: "https://i.imgur.com/vFh0hCo.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
    bubbleText: "Open Project",

  },
  {
    title: "Card 8",
    image: "https://i.imgur.com/vFh0hCo.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
    bubbleText: "Open Project",

  },
  // Add more cards as needed
];
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
    <div>
  <CardComponent cards={cardData} /> {/* Only show 4 cards */}  </div>
  );
};


export default Projects;
