import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import { pageAnimation, cardAnimation } from "../styles/animation"; // Import your animation

const CardGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); /* Ensure the grid items are flexible */
  gap: 4rem 4rem; /* 4rem top/bottom, 4rem left/right */
  width: 100%; /* Full width for the grid */
  max-width: 60rem; /* Maximum width of the grid */
  margin: 0 auto; /* Center the grid horizontally */
  padding: 0; /* Spacing handled by parent gap */
`;

const CardLink = styled.a`
  text-decoration: none; /* Remove underline for the link */
  color: inherit; /* Inherit text color */
  display: block; /* Make the entire card clickable */
`;

const Card = styled(motion.div)`
  background-color: var(--color-Background-Default);
  box-shadow: 1rem 0.6rem 0rem 0rem black;
  border-radius: 12px;
  padding: 1rem 2rem !important;
  text-align: left;
height:auto;
  width: 100% !important; /* Ensure the card takes up the full width of its grid column */

  &:hover {
    box-shadow: 2rem 1rem 0rem 0rem rgba(0, 0, 0, 1);
    transform: translateY(-1rem);
    border-color: var(--color-Foreground-Border-Default);
    border-width: 0.6rem;
  }

  @media (max-width: 779px) {
    box-shadow: none;

    &:hover {
      box-shadow: none;
    }
  }
`;

const CardImage = styled.img`
  width: calc(100% + 4rem) !important; /* Adjust width to compensate for the padding in the Card */
  max-height: 14rem !important;
  margin-top: 1rem !important;
  margin-left: -2rem !important; /* Offset to the left to account for the card's padding */
  margin-right: -2rem !important; /* Offset to the right to account for the card's padding */
  object-fit: cover !important;
    flex-grow: 1; /* Allow the image to take up remaining space in the card */
`;

const Bubble = styled.div`
  border-width: 6px;
  border-radius: 6px;
  margin-top: 1rem !important;
  
  padding: 0.7rem !important;
  width: auto !important;
  max-width: 65%;
  margin-left: auto !important;
  margin-right: auto !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  background-color: var(--color-Background-Base);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: var(--color-Foreground-Text-Default);
  font-weight: 500;
  margin-top: 5px;
  padding: 0.5rem 0rem 0rem 0rem;
  transition: font-weight 0.3s ease, text-shadow 0.3s ease;
  
  strong {
      font-weight: bold; /* Bold specific words */
  }
`;

const BubbleText = styled.h4`
  font-size: 1.4rem;
  margin: 0;
  color: var(--color-Foreground-Text-Base);
`;

const CardTitle = styled.h4`
  color: var(--color-Foreground-Text-Default);

`
const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Tag = styled.span`
  background: #cbd5e0;
  color: var(--color-Foreground-Text-Default);
  border-radius: 999px;
  margin-top: 0.5rem;
  padding: 0.2rem 0.8rem;
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-block;
`;
const CardComponent = ({ cards, onCardClick, onProtectedCardClick }) => {
  return (
    <CardGrid
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {cards.map((card, index) => {
        const isExternal = card.linkTo.startsWith("http");

        // // Replace "App Feature" or "Game" with bold text and line breaks
         let formattedText = card.text
        //   .replace("App Feature", "<strong>App Feature</strong><br />")
        //   .replace("Game", "<strong>Game</strong><br />");

        // Add the number of extra line breaks based on the `lineBreaks` property
        for (let i = 0; i < card.lineBreaks; i++) {
          formattedText += '<br />';
        }


        const CardContent = (
          <>
            <CardTitle>{card.title}</CardTitle>
                <TagList>
      {card.tags && card.tags.map((tag, i) => (
        <Tag key={i}>{tag}</Tag>
      ))}
    </TagList>
            <CardText
              dangerouslySetInnerHTML={{
                __html: formattedText,
              }}
            />
            <CardImage src={card.image} alt={card.title} />
            <Bubble>
              <BubbleText>{card.bubbleText}</BubbleText>
            </Bubble>
          </>
        );

            // Handler for internal links
        const handleInternalClick = (e) => {
          if (card.passwordProtected) {
            e.preventDefault();
            onProtectedCardClick(card);
          }
          // else, allow normal navigation
        };

        return isExternal ? (
          <CardLink
            href={card.linkTo}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <Card
              variants={cardAnimation}
              whileHover={{
                translateY: "-2rem",
                borderWidth: "1rem",
                borderColor: "var(--color-Foreground-Border-Default)",
              }}
            >
              {CardContent}
            </Card>
          </CardLink>
        ) : (
          <Link href={card.linkTo} passHref key={index}>
            <CardLink onClick={handleInternalClick}>
              <Card
                variants={cardAnimation}
                whileHover={{
                  translateY: "-2rem",
                  borderWidth: "1rem",
                  borderColor: "var(--color-Foreground-Border-Default)",
                }}
              >
                {CardContent}
              </Card>
            </CardLink>
          </Link>
        );
      })}
    </CardGrid>
  );
};


export default CardComponent;
