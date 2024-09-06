import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../styles/animation"; // Import your animation

const CardGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); /* Ensure the grid items are flexible */
  gap: 4rem 4rem; /* 4rem top/bottom, 4rem left/right */
  width: 90%; /* Full width for the grid */
  max-width: 60rem; /* Maximum width of the grid */
  margin: 0 auto; /* Center the grid horizontally */
  padding: 4rem 2rem; /* Adjust padding if necessary */
`;



const Card = styled(motion.div)`

  background-color: var(--card-color);
  box-shadow: 1rem 0.6rem 0rem 0rem black;
  border-radius: 12px;
  padding: 1rem 2rem !important;
  text-align: left;
  text-decoration: none;
  color: black;
  height: auto !important;
  width: 100% !important; /* Ensure the card takes up the full width of its grid column */

  &:hover {
    box-shadow: 2rem 1rem 0rem 0rem black;
    transform: translateY(-10px);
  }
`;

const CardImage = styled.img`
  width: calc(100% + 4rem) !important;; /* Adjust width to compensate for the padding in the Card */
  //height: auto !important;
  max-height: 14rem !important;
  margin-top: 1rem !important;
  margin-left: -2rem !important; /* Offset to the left to account for the card's padding */
  margin-right: -2rem !important;/* Offset to the right to account for the card's padding */
  object-fit: cover !important;
`;

const Bubble = styled.div`
  border-color:black;
  border-width: 6px;
  border-radius: 6px ;
  margin-top: 1rem !important;
  padding: .7rem !important;
  width: auto !important;
  max-width: 55%;
  margin-left: auto !important;
  margin-right: auto !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;

  background-color: var(--background-color);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
`;


const CardText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 5px;
  padding: 0.5rem 0rem 0rem 0rem;
  transition: font-weight 0.3s ease, text-shadow 0.3s ease;
`;

const BubbleText = styled.h4`
  font-size: 1.4rem;
  margin: 0;
  color: var(--text-color);
`;

const CardComponent = ({ cards }) => {
  return (
    <CardGrid
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {cards.map((card, index) => {
        const isExternal = card.linkTo.startsWith("http");
        const CardContent = (
          <>
            <h4>{card.title}</h4>
            <CardText>
              {card.text.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </CardText>
            <CardImage src={card.image} alt={card.title} />
            <Bubble>
              <BubbleText>{card.bubbleText}</BubbleText>
            </Bubble>
          </>
        );

        return (
          <Card key={index}>
            {isExternal ? (
              <a href={card.linkTo} target="_blank" rel="noopener noreferrer">
                {CardContent}
              </a>
            ) : (
              <Link to={card.linkTo}>{CardContent}</Link>
            )}
          </Card>
        );
      })}
    </CardGrid>
  );
};


export default CardComponent;
