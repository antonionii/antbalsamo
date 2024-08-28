import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, } from "framer-motion";
import { pageAnimation } from "../animation"; // Import your animation

const Bubble = styled.div`
  background-color: white;
  border-radius: 24px;
  margin-top: 1rem;
  padding: 1rem;
  width: auto; /* Automatically adjusts width based on content */
  max-width: 80%; /* Ensures the bubble doesn't get too wide */
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: black;
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* Add transition for smooth hover effect */
`;

// Define the Card component after Bubble
const Card = styled(motion(Link))`
  background-color: white;
  box-shadow: 1rem 0.6rem 0rem 0rem black;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  color: black;
  height: auto;
  width: 20rem;
  position: relative; /* Ensure the card is positioned relative to apply absolute positioning to child elements */

  &:hover {
    box-shadow: 2rem 1rem 0rem 0rem black;
    transform: translateY(-10px);

    /* Apply hover effect to the bubble when card is hovered */
    ${Bubble} {
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      transform: translateY(-5px);
    }
  }
`;


const CardImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 10rem;
  margin-top: 1rem;
  border-radius: 8px;
  object-fit: cover;
`;



const BubbleText = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  color: black;
  font-weight: bolder;
`;
const CardGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: calc(100% - 10rem);
  max-width: 60rem;
  margin: 0rem auto;
  padding: 8rem 4rem;

  

`;

const CardText = styled.p`
  font-size: 1rem;
  margin-top: 5px;
  padding: 0rem 0rem;
  transition: font-weight 0.3s ease, text-shadow 0.3s ease;
`;

// const cardData = [
//   {
//     title: "In App Notification",
//     image: "https://i.imgur.com/vFh0hCo.png",
//     text: "Description for Card 1",
//     linkTo: "/destination1",
//   },
//   {
//     title: "Workflows UX",
//     image: "https://i.imgur.com/vFh0hCo.png",
//     text: "Description for Card 2",
//     linkTo: "/destination2",
//   },
//   {
//     title: "Card 3",
//     image: "https://i.imgur.com/vFh0hCo.png",
//     text: "Description for Card 2",
//     linkTo: "/destination2",
//   },
//   {
//     title: "Card 4",
//     image: "https://i.imgur.com/vFh0hCo.png",
//     text: "Description for Card 2",
//     linkTo: "/destination2",
//   },
//   {
//     title: "Card 5",
//     image: "https://i.imgur.com/vFh0hCo.png",
//     text: "Description for Card 2",
//     linkTo: "/destination2",
//   },
//   {
//     title: "Card 6",
//     image: "https://i.imgur.com/vFh0hCo.png",
//     text: "Description for Card 2",
//     linkTo: "/destination2",
//   },
//   {
//     title: "Card 7",
//     image: "https://i.imgur.com/vFh0hCo.png",
//     text: "Description for Card 2",
//     linkTo: "/destination2",
//   },
//   {
//     title: "Card 8",
//     image: "https://i.imgur.com/vFh0hCo.png",
//     text: "Description for Card 2",
//     linkTo: "/destination2",
//   },
//   // Add more cards as needed
// ];



const CardComponent = ({ cards }) => {
    return (
      <CardGrid
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {cards.map((card, index) => (
          <Card key={index} to={card.linkTo}>
            <h3>{card.title}</h3>
            <CardText>{card.text}</CardText>
            <CardImage src={card.image} alt={card.title} />
            <Bubble>
            <BubbleText>{card.bubbleText}</BubbleText>
          </Bubble>
          </Card>
        ))}
      </CardGrid>
    );
  };
export default CardComponent;
