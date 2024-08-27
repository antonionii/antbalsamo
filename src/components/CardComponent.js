import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, } from "framer-motion";
import { pageAnimation } from "../animation"; // Import your animation

// Card container with styles for hover effects, box shadow, and border radius
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

  &:hover{
    background-color: black !important;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2) !important;
    transform: translateY(-15px) !important;

    }
`;


// Style for the image inside the card
const CardImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 10rem;
  margin-top: 1rem;
  border-radius: 8px;
  object-fit: cover;
`;

// Style for the container of the cards to manage layout in grid
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
  padding: 0.5rem 0;
  transition: font-weight 0.3s ease, text-shadow 0.3s ease;
`;

const cardData = [
  {
    title: "In App Notification",
    image: "https://i.imgur.com/vFh0hCo.png",
    text: "Description for Card 1",
    linkTo: "/destination1",
  },
  {
    title: "Workflows UX",
    image: "https://i.imgur.com/vFh0hCo.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
  },
  {
    title: "Card 3",
    image: "https://i.imgur.com/vFh0hCo.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
  },
  {
    title: "Card 4",
    image: "https://i.imgur.com/vFh0hCo.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
  },
  {
    title: "Card 5",
    image: "https://i.imgur.com/vFh0hCo.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
  },
  {
    title: "Card 6",
    image: "https://i.imgur.com/vFh0hCo.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
  },
  {
    title: "Card 7",
    image: "https://i.imgur.com/vFh0hCo.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
  },
  {
    title: "Card 8",
    image: "https://i.imgur.com/vFh0hCo.png",
    text: "Description for Card 2",
    linkTo: "/destination2",
  },
  // Add more cards as needed
];

const CardComponent = () => {
    return (
      <CardGrid
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {cardData.map((card, index) => (
          <Card key={index} to={card.linkTo}>
            <h3>{card.title}</h3>
            <CardImage src={card.image} alt={card.title} />
            <CardText>{card.text}</CardText>
          </Card>
        ))}
      </CardGrid>
    );
  };

export default CardComponent;
