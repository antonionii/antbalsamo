"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const Blocks = () => {
   const { pageId } = useParams();
  const [metadata, setMetadata] = useState(null);
  const [blockData, setBlockData] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (pageId) {
      const fetchBlockData = async () => {
        try {
          const res = await fetch(`/api/blocks?pageId=${pageId}`);
          const data = await res.json();
          if (res.ok) {
            setMetadata(data.metadata);
            setBlockData(data.blocks);
          } else {
            setError(data.error);
          }
        } catch (err) {
          setError("failed to fetch data");
        }
      };
      fetchBlockData();
    }
  }, [pageId]);


  
  
  
  if (error) {
    return <ErrorContainer>Error: {error}</ErrorContainer>;
  }

    const textLink = (richTextArray) => {
      return richTextArray.map((text, index) => {
        if (text.href) {
          return (
            <a
              key={index}
              href={text.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              {/* {text.plain_text} */}
              {textAnnotations(text)}
            </a>
          );
        } else {
          // return <span key={index}>{text.plain_text}</span>;
          return <span key={index}>{textAnnotations(text)}</span>;
        }
      });
    };

    // const textAnnotations = (text) => {
    //   const { annotations, plain_text } = text;
    
    //   let formattedText = plain_text;
    //   if (annotations.bold = true) {
    //     formattedText = <b>{formattedText}</b>;
    //   }
    //   if (annotations.italic) {
    //     formattedText = <i>{formattedText}</i>;
    //   }
    //   if (annotations.underline) {
    //     formattedText = <u>{formattedText}</u>;
    //   }
    //   if (annotations.code) {
    //     formattedText = <code>{formattedText}</code>;
    //   }
    
    //   return formattedText;
    // };

    const textAnnotations = (text) => {
      const { annotations, plain_text } = text;
      
      let style = {};
      if (annotations.bold) {
        style.fontWeight = 'bold';
      }
      if (annotations.italic) {
        style.fontStyle = 'italic';
      }
      if (annotations.underline) {
        style.textDecoration = 'underline';
      }
      if (annotations.code) {
        style.fontFamily = 'monospace';
      }
      if (annotations.color) {
        style.color = annotations.color;
      }
      if (annotations.background_color) {
        style.backgroundColor = annotations.background_color;
      }
      return (
        <span style={style}>
          {plain_text}
        </span>
      );
    };
    

  const nestBlock = (block) => {
    switch (block.type) {
      case 'paragraph':
        return <Paragraph>
          {textLink(block.paragraph.rich_text)}
        </Paragraph>;

      case 'heading_1':
        return <Heading1 key={block.id}>{textLink(block.heading_1.rich_text)}</Heading1>;

      case 'heading_2':
        return <Heading2 key={block.id}>{textLink(block.heading_2.rich_text)}</Heading2>;

      case 'heading_3':
        return <Heading3 key={block.id}>{textLink(block.heading_3.rich_text)}</Heading3>;

      case 'image': {
        const imageFile = block.image.type === 'external' ? block.image.external.url : block.image.file.url;
        return (
          <ImageContainer key={block.id}>
            <img src={imageFile} alt="image file" />
          </ImageContainer>
        );
      }

       case 'callout':
        if (block.callout.rich_text.length > 0) {
         return (<Callout key={block.id}>
               {textLink(block.callout.rich_text)}    
         </Callout>);
         } else {
          return null; 
        }
      // case 'callout':
      // if (block.callout.rich_text.length > 0) {
      //   return (
      //     <Callout style={{ backgroundColor: block.callout.color }}>
      //       {block.callout.icon && <span>{block.callout.icon.emoji}</span>}
      //       {block.callout.rich_text.map((text, index) => (
      //         <span key={index}>{text.plain_text}</span>
      //       ))}
      //     </Callout>
      //   );
      // } else {
      //   return null; 
      // }

      case 'bulleted_list_item':
        return (
          <BulletedList key={block.id}>
            <li>{textLink(block.bulleted_list_item.rich_text)}</li>
          </BulletedList>
        );
          // return <ul key={block.id}>{block.bulleted_list_item.rich_text[0]?.plain_text}</ul>;
        // case 'bulleted_list_item':
        // return block.bulleted_list_item.rich_text?.map((text, index) => (
        //   <div key={index} className="bulleted_list_item">
        //     <p>{text.plain_text}</p>
        //   </div>
        // ));
        // return <ul>
        //   <li>{  textLink(block.bulleted_list_item.rich_text)}</li>
        // </ul>


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
          {/* <MetadataDate>Created on: {metadata.createdTime}</MetadataDate> */}
          {/* <MetadataDate>Last edited on: {metadata.lastEditedTime}</MetadataDate> */}
        </MetadataContainer>
      ) : (
        // <LoadingText>Loading metadata...</LoadingText>
        <LoadingText>.</LoadingText>
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
  width:50%;
  justify-content:center;
  align-items: center;
  padding: 2rem;
  padding-top:2rem;
  color: var(--text-color);
   margin: 12rem auto 0 auto;
  border-radius: 1rem;
  background-color: var(--card-color);
  box-sizing: border-box;
  overflow: hidden;
  @media (min-width: 780px) {
    width: 55%;
    margin: 12rem auto 0 auto;
    padding: 0rem 2rem 2rem 2rem;
  }
  // @media (min-width: 1300px) {
  //   width: 35%;
  //   margin: 12rem auto 0 auto;
  //   padding: 0rem 2rem 2rem 2rem;
`;
const MainBlock = styled(motion.div)``

const MetadataContainer = styled.div`
  text-align: start;
  margin-bottom: 2rem;
   color:black;
`;

const MetadataTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color:black;
  line-height: 300%;
  padding-top: 5%;
`;

const CoverImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const MetadataIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
   color:black;
`;

const MetadataDate = styled.p`
  font-size: 1rem;
  color: var(--accent-text-color);
`;

const LoadingText = styled.h4`
  text-align: center;
  margin: 2rem 0;
  color:black;
`;

const ErrorContainer = styled.div`
  text-align: center;
  color: red;
  margin: 2rem 0;
`;

const BlockContainer = styled.div`
  margin: 1rem 0;
   color:black;
`;

const StyledLink = styled.a`
  color: var(--link-color);
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const Paragraph = styled.p`
 

  line-height: 1.6rem;
  // color: ${({ color }) => color || 'inherit'};
  font-size: 1.2rem;
  color: black;
  font-weight: 500;
  margin-top: 5px;
  padding: 0.5rem 0rem 0rem 0rem;
  transition: font-weight 0.3s ease, text-shadow 0.3s ease;
  
  b {
    font-weight: bold;
  }

  i {
    font-style: italic;
  }

  u {
    text-decoration: underline;
  }

  code {
    // background-color: #f5f5f5;
    padding: 0.2rem;
    border-radius: 0.3rem;
  }

  // span[color="gray"] {
  //   color: gray;
  // }
  // span[color="red"] {
  //   color: red;
  // }
  
`;

const Heading1 = styled.h1`
  font-size: 2.5rem;
  line-height: 1.3;
  margin: 1.5rem 0;
   color:black;
`;

const Heading2 = styled.h2`
  font-size: 2rem;
  line-height: 1.4;
  margin: 1.25rem 0;
   color:black;
`;

const Heading3 = styled.h3`
  font-size: 1.75rem;
  line-height: 1.5;
  margin: 1rem 0;
    color:black;
`;

const BlockParagraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 1rem 0;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin: 1rem 0;
  max-width:100%;
  width:100%;
  justify-content:center;
  align-items:center;
  margin: auto;
   color:black;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const Callout = styled.div`
  border-left: 4px solid var(--accent-color);
  padding-left: 1rem;
  margin: 1rem 0;

  background-color: #f9f9f9;
   color:black;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BulletedList = styled.ul`
  list-style-type: disc;
  padding-left: 1rem;
   color:black;
`;

export default Blocks;
