import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure the component only renders client-side to avoid styling mismatches
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Don't render on the server-side to prevent hydration issues
  }

  return (
    <FooterDiv>
      <ContentDiv>
        <p>
          <span>
            <a href={"https://github.com/antonionii/antbalsamo"} target="_blank" rel="noopener noreferrer">
              &lt;source code here&gt;
            </a>
          </span>
        </p>
      </ContentDiv>
    </FooterDiv>
  );
};

const FooterDiv = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    pointer-events: auto;
    box-sizing: border-box;
    margin-top: 4rem; /* Add margin-top to create space above the footer */
`;

const ContentDiv = styled.div`
    padding: 1rem 2rem; /* Add some padding to give the content breathing room */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-Background-Default); 
    border-radius: 12px 12px 0 0; 
    border-bottom: none; 
    box-sizing: border-box;
    width: auto;
    color: var(--link-color);
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
`;

export default Footer;
