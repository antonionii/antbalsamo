"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Blocks = () => {
  const router = useRouter();
  const { projectId } = router.query;

  const [metadata, setMetadata] = useState(null);
  const [blockData, setBlockData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlockData = async () => {
      try {
        const response = await fetch("/api/blocks/${pageId}");
        const data = await response.json();
         const { pageId } = router.query;
        if (response.ok) {
          setMetadata(data.metadata);
          setBlockData(data.blocks);
        } else {
          setError(data.error);
        }
      } catch (error) {
        setError("Failed to fetch data from Notion");
      }
    };

    fetchBlockData();
  }, []);

  if (error) {
    return <ErrorContainer>Error: {error}</ErrorContainer>;
  }

  const renderLinkText = (richTextArray) =>
    richTextArray.map((text, index) => {
      const link = text.text?.href || text.text?.link;

      return link ? (
        <StyledLink key={index} href={link} target="_blank" rel="noopener noreferrer">
          {text.text.content}
        </StyledLink>
      ) : (
        <span key={index}>{text.text.content}</span>
      );
    });

  const nestBlock = (block) => {
    switch (block.type) {
      case 'paragraph':
        return <Paragraph>
          {renderLinkText(block.paragraph.rich_text)}
        </Paragraph>;

      case 'heading_1':
        return <Heading1>{renderLinkText(block.heading_1.rich_text)}</Heading1>;

      case 'heading_2':
        return <Heading2>{renderLinkText(block.heading_2.rich_text)}</Heading2>;

      case 'heading_3':
        return <Heading3>{renderLinkText(block.heading_3.rich_text)}</Heading3>;

      case 'image': {
        const imageFile = block.image.type === 'external' ? block.image.external.url : block.image.file.url;
        return (
          <ImageContainer key={block.id}>
            <img src={imageFile} alt="image file" />
          </ImageContainer>
        );
      }

      case 'callout':
        return <Callout>{renderLinkText(block.callout.rich_text)}</Callout>;

      case 'bulleted_list_item':
        return (
          <BulletedList>
            <li>{renderLinkText(block.bulleted_list_item.rich_text)}</li>
          </BulletedList>
        );

      default:
        return null;
    }
  };

  const nestBlockChild = (block) => {
    return (
      <BlockContainer key={block.id}>
        {nestBlock(block)}
        {block.children && block.children.map(nestBlockChild)}
      </BlockContainer>
    );
  };

  return (
    <MainContainer>
      {metadata ? (
        <MetadataContainer>
          <MetadataTitle>{metadata.title}</MetadataTitle>
          {metadata.coverImage && (
            <CoverImage src={metadata.coverImage} alt="cover image" />
          )}
          {metadata.icon && <MetadataIcon>{metadata.icon}</MetadataIcon>}
          <MetadataDate>Created on: {metadata.createdTime}</MetadataDate>
          <MetadataDate>Last edited on: {metadata.lastEditedTime}</MetadataDate>
        </MetadataContainer>
      ) : (
        <LoadingText>Loading metadata...</LoadingText>
      )}
      {blockData.length === 0 ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
       <MainBlock>
        { blockData.map(nestBlockChild)}
       </MainBlock>
      )}
    </MainContainer>
  );
};

const MainContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width:70%;
  justify-content:center;
  margin:auto;
  align-items: center;
  padding: 2rem;
  background-color: var(--background-color);
  color: var(--text-color);
`;
const MainBlock = styled(motion.div)``

const MetadataContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const MetadataTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CoverImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const MetadataIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const MetadataDate = styled.p`
  font-size: 1rem;
  color: var(--accent-text-color);
`;

const LoadingText = styled.h4`
  text-align: center;
  margin: 2rem 0;
`;

const ErrorContainer = styled.div`
  text-align: center;
  color: red;
  margin: 2rem 0;
`;

const BlockContainer = styled.div`
  margin: 1rem 0;
`;

const StyledLink = styled.a`
  color: var(--link-color);
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.6; 
  margin: 1rem 0;
  color: var(--text-color);
`;

const Heading1 = styled.h1`
  font-size: 2.5rem;
  line-height: 1.3;
  margin: 1.5rem 0;
`;

const Heading2 = styled.h2`
  font-size: 2rem;
  line-height: 1.4;
  margin: 1.25rem 0;
`;

const Heading3 = styled.h3`
  font-size: 1.75rem;
  line-height: 1.5;
  margin: 1rem 0;
`;

const BlockParagraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 1rem 0;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin: 1rem 0;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const Callout = styled.div`
  border-left: 4px solid var(--accent-color);
  padding-left: 1rem;
  margin: 1rem 0;
`;

const BulletedList = styled.ul`
  list-style-type: disc;
  padding-left: 1rem;
`;

export default Blocks;
