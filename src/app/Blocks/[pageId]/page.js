"use client";
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import PageHeaderText from "../../components/PageHeaderText";
import { slidedownAnim } from "../../styles/animation";  
import { ModalContext } from "../../layout";  // Import Modal Context
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Blocks = () => {
  const { pageId } = useParams();
  const [metadata, setMetadata] = useState(null);
  const [blockData, setBlockData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);  // Track loading state
  const { openImageModal } = useContext(ModalContext); // Get modal function

  const [isClient, setIsClient] = useState(false); // Track if rendered on client side
  const linkColor = getComputedStyle(document.documentElement).getPropertyValue('--link-color').trim();

  useEffect(() => {
    setIsClient(true);  // Set to true after client-side mount
  }, []);
  
  useEffect(() => {
    if (pageId) {
      const fetchBlockData = async () => {
        setIsLoading(true);  // Start loading
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
          setError("Failed to fetch data");
        } finally {
          setIsLoading(false);  // End loading
        }
      };
      fetchBlockData();
    }
  }, [pageId]);


  const textLink = (richTextArray) => {
    return richTextArray.map((text, index) => {
      if (text.href) {
        return (
          <a
            key={index}
            href={text.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: linkColor, fontSize:"1.2rem", textDecoration: "underline" }}
          >
            {textAnnotations(text)}
          </a>
        );
      } else {
        return <span key={index}>{textAnnotations(text)}</span>;
      }
    });
  };

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
    return <span style={style}>{plain_text}</span>;
  };

  
  const renderRichText = (richTextArray) => {
    return richTextArray.map((text, index) => {
      const { plain_text } = text;
      return <span key={index}>{plain_text}</span>;
    });
  };

  const renderProperties = () => {
    if (!metadata || !metadata.properties) return null;
  
    // Define the desired property order
    const propertyOrder = [
      "Role",
      "Product",
      "Company",
      "Time",
      "User Persona Roles",
      "Status"
    ];
  
    // Filter and map the properties according to the defined order
    return propertyOrder.map((key) => {
      const property = metadata.properties[key];
      if (!property) return null; // Skip if the property doesn't exist
  
      let valueContent = null;
  
      switch (property.type) {
        case "rich_text":
          valueContent = renderRichText(property.rich_text);
          break;
        case "status":
          valueContent = <span>{property.status?.name || "Unknown"}</span>;
          break;
        default:
          valueContent = <span>Unsupported property type</span>;
      }
  
      return (
        <PropertyRow key={property.id}>
          <PropertyName>
            <span className="material-symbols-outlined">subject</span>
            {key}
          </PropertyName>
          <PropertyValue>{valueContent}</PropertyValue>
        </PropertyRow>
      );
    });
  };


  const nestBlock = (block) => {
    switch (block.type) {
      case 'paragraph':
        return <Paragraph>{textLink(block.paragraph.rich_text)}</Paragraph>;
      case 'heading_1':
        return <Heading1 key={block.id}>{textLink(block.heading_1.rich_text)}</Heading1>;
      case 'heading_2':
        return <Heading2 key={block.id}>{textLink(block.heading_2.rich_text)}</Heading2>;
      case 'heading_3':
        return <Heading3 key={block.id}>{textLink(block.heading_3.rich_text)}</Heading3>;
        case "image": {
          const imageFile = block.image.type === "external" ? block.image.external.url : block.image.file.url;
          return (
            <ImageContainer key={block.id}>
              <img src={imageFile} alt="image file" onClick={() => openImageModal(imageFile)} />
            </ImageContainer>
          );
        }
      case 'callout':
        if (block.callout.rich_text.length > 0) {
          return (
            <Callout style={{ backgroundColor: block.callout.color }}>
              {block.callout.icon && <span>{block.callout.icon.emoji}</span>}
              {block.callout.rich_text.map((text, index) => (
                <span key={index}>{text.plain_text}</span>
              ))}
            </Callout>
          );
        } else {
          return null;
        }
      case 'bulleted_list_item':
        return (
          <BulletedList key={block.id}>
            <li>{textLink(block.bulleted_list_item.rich_text)}</li>
          </BulletedList>
        );
      default:
        return null;
    }
  };

  const nestBlockChild = (block, parentIsCallout = false) => {
    const isCallout = block.type === 'callout';

    return (
      <BlockContainer key={block.id} isCallout={isCallout}>
        {nestBlock(block)}
        {isCallout && block.children && block.children.length > 0 ? (
          <CalloutContainer>
            {block.children.map((childBlock) => nestBlockChild(childBlock, isCallout))}
          </CalloutContainer>
        ) : (
          block.children && block.children.map((childBlock) => nestBlockChild(childBlock, parentIsCallout))
        )}
      </BlockContainer>
    );
  };

  return (
    <>
      {metadata && metadata.coverImage && (
        <FullWidthCoverImage src={metadata.coverImage} alt="cover image" />
      )}
      <MainContainer>
        {metadata ? (
          <>
            <LeftAlignedContainer>
              <MetadataContainer>
                <MetadataTitle>{metadata.title}</MetadataTitle>
                {metadata.icon && <MetadataIcon>{metadata.icon}</MetadataIcon>}
                <PropertiesGrid>{renderProperties()}</PropertiesGrid>
              </MetadataContainer>
            </LeftAlignedContainer>
            <LineSeparator />

          </>
        ) : (
          <LoaderContainer>
          <ClimbingBoxLoader color="var(--text-color)" size={25} />
        </LoaderContainer>        )}
        {blockData.length === 0 ? (
 <LoaderContainer>
 <ClimbingBoxLoader color="var(--text-color)" size={25} />
</LoaderContainer>        ) : (
          <MainBlock>{blockData.map((block) => nestBlockChild(block))}</MainBlock>
        )}
      </MainContainer>
    </>
  );
};


const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8); // Dark semi-transparent background
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // Ensure the modal is on top
  cursor: default; // Normal cursor for the overlay
`;

const ModalImageWrapper = styled.div`
  position: relative;
  cursor: ${(props) => (props.isZoomed ? "zoom-out" : "zoom-in")}; // Zoom cursor
  display: flex;
  justify-content: center; // Center the image horizontally
  align-items: center; // Center the image vertically
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  transform: translate(${(props) =>
      `${(0.5 - props.zoomPosition.x) * (props.zoomLevel - 1) * 100}%`},
    ${(props) =>
      `${(0.5 - props.zoomPosition.y) * (props.zoomLevel - 1) * 100}%`})
    scale(${(props) => props.zoomLevel});
  transition: transform 0.3s ease-in-out;
`;

const MainContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width:90%;
  justify-content:center;
  align-items: center;
  padding: 2rem;
   margin: 0 auto 0 auto;

  box-sizing: border-box;
  overflow: hidden;
  @media (min-width: 780px) {
    width: 65%;
    margin: 0 auto 0 auto;
    padding: 0rem 2rem 2rem 2rem;
  }
   @media (min-width: 1300px) {
     width: 45%;
     margin: 0 auto 0 auto;
     padding: 0rem 2rem 2rem 2rem;
`;

const LeftAlignedContainer = styled.div`
  width: 100%; /* Full width for left alignment */
  display: flex;
  justify-content: flex-start; /* Align content to the left */
`;

const MainBlock = styled(motion.div)``

const MetadataContainer = styled.div`
  color: var(--text-color);
`;
const MetadataTitle = styled.h1`
  font-size: 3rem;
  color: black;
  color: var(--accent-text-color);
    padding: 1rem 0 ;
  margin: 1rem 0 1rem 0;
  text-align: left; /* Ensure text is aligned to the left */
`;

const FullWidthCoverImage = styled.div`
  width: 100vw;  /* Ensure it spans the full viewport width */
  height: calc(100vh / 3);  /* Adjust the height based on viewport height */
  background-image: url(${(props) => props.src});
  background-position: center 6rem;  /* Center horizontally, 40% from top */
  background-repeat: no-repeat;
  background-size: cover;  /* Ensure it covers the area while maintaining aspect ratio */
  position: relative;
  
  /* Remove negative margins and let width handle alignment */
  margin: 0;

  @media (min-width: 780px) {
  background-position: center 0px;  /* Center horizontally, 40% from top */
  background-repeat: no-repeat;
  background-size: cover;  /* Ensure it covers the area while maintaining aspect ratio */
  position: relative;
    }

  @media (min-width: 1300px) {
    background-position: center;  /* Adjust for large screens */
  }
`;


const MetadataIcon = styled.div`
  font-size: 1.5rem;
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



const StyledLink = styled.a`
  color: var(--link-color);
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const Paragraph = styled.p`
 

  line-height: 2rem;
  // color: ${({ color }) => color || 'inherit'};
  color: var(--accentText-color);
  font-weight: 500;
  font-size:1.2rem;
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


`;

const Callout = styled.div`
`;
const CalloutContainer = styled.div`
  background-color: var(--secCard-color);
  border-radius: 6px;
  padding: .5rem 2rem;
`;

const BlockContainer = styled.div`
  margin: 1rem 0;

`;
const Heading1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  font-weight: bold;
    background-color: var(--secCard-color);
  border-radius: 12px;
  padding: .5rem 1rem;
        

`;
const Heading2 = styled.h2`
  font-size: 2rem;
  
  margin-bottom: 2.4rem;
    text-decoration: underline;

    font-weight: 700;

  line-height: 1.4;
   color:black;
`;

const Heading3 = styled.h3`
  font-size: 1.75rem;
  line-height: 1.5;
  margin: 1rem 0;
    color:black;
`;

const BlockParagraph = styled.p`
  font-size: 2.25rem;
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
    cursor: zoom-in;  /* Show magnifying glass cursor on hover */
  }

  img:hover {
    opacity: 0.96;  /* Optional: Slightly dim the image on hover */
  }
`;

// const Callout = styled.div`
//   border-left: 4px solid var(--accent-color);
//   padding-left: 1rem;
//   margin: 1rem 0;

//   background-color: #f9f9f9;
//    color:black;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   padding: 16px;
//   margin: 16px 0;
// `;

const BulletedList = styled.ul`
  list-style-type: disc;
  padding-left: 0.75rem; /* Reduce padding on the left */
  color: black;


  li {
  margin: 0 1rem;
  padding-right: 2rem;
      padding-left: 1rem; /* Keep this to maintain proper alignment */
  font-weight: 500;
  font-size:1.2rem;

  }
`;

const LineSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--mutedText-color);
  margin-bottom: 2.5rem; /* Add spacing above the line */
  opacity: 40%
`;
const PropertiesGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1.8rem;
  
`;

const PropertyRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center; 
`;

const PropertyName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--mutedText-color);
  font-weight: 500;
  font-size: 1.2rem;
`;

const PropertyValue = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  color: var(--text-color);
`;
export default Blocks;

