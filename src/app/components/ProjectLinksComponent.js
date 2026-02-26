import React from "react";
import styled from "styled-components";
import Link from "next/link";

const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 0;

  @media (max-width: 999px) {
    max-width: 20rem;
    margin: 0 auto;
  }
`;

const LinkRow = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.6rem;
  padding: 0.4rem 0;
  white-space: nowrap;

  @media (max-width: 999px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  @media (min-width: 1000px) {
    flex-wrap: nowrap;
    align-items: center;
  }
`;

const ProjectLink = styled.a`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-Foreground-Text-Base);
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.65;
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 0.4rem;
  align-items: center;
`;

const Tag = styled.span`
  background-color: var(--color-Tag-Background);
  color: var(--color-Foreground-Text-Default);
  border-radius: 999px;
  padding: 0.15rem 0.65rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  white-space: nowrap;
`;

const ProjectLinksComponent = ({ cards, onCardClick, onProtectedCardClick }) => {
  return (
    <LinksList>
      {cards.map((card, index) => {
        const isExternal = card.linkTo.startsWith("http");

        const handleInternalClick = (e) => {
          if (card.passwordProtected) {
            e.preventDefault();
            onProtectedCardClick(card);
          }
        };

        const linkContent = (
          <LinkRow key={index}>
            {isExternal ? (
              <ProjectLink
                href={card.linkTo}
                target="_blank"
                rel="noopener noreferrer"
              >
                {card.title}
              </ProjectLink>
            ) : (
              <Link href={card.linkTo} passHref legacyBehavior>
                <ProjectLink onClick={handleInternalClick}>
                  {card.title}
                </ProjectLink>
              </Link>
            )}
            <TagList>
              {card.tags &&
                card.tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
            </TagList>
          </LinkRow>
        );

        return linkContent;
      })}
    </LinksList>
  );
};

export default ProjectLinksComponent;
