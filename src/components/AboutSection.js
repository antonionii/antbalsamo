import React from "react";
import home1 from "../img/home1.png";
//Styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StlyedHide>
            <h2>Create</h2>
          </StlyedHide>
          <StlyedHide>
            <h2>
              <span>Code</span>
            </h2>
          </StlyedHide>
          <StlyedHide>
            <h2>Animate</h2>
          </StlyedHide>
          <p>Contact me for your ideas and let's give them life. </p>
          <button>Ping Me</button>
        </div>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="profile of Anthony" />
      </StyledImage>
    </StyledAbout>
  );
};

//Styled Component
const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: 80%;
    height: 80vh;
    object-fit: cover;
  }
`;

const StlyedHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
