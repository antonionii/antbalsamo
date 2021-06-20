import React from "react";
import home1 from "../img/home1.png";
//Styled
import styled from "styled-components";

import {
  BasicLayout,
  StyledDescription,
  StyledImage,
  StlyedHide,
} from "../styles";

const AboutSection = () => {
  return (
    <BasicLayout>
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
    </BasicLayout>
  );
};

//Styled Components were here before

export default AboutSection;
