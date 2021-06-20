import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Create</h2>
          </div>
          <div className="hide">
            <h2>
              <span>Code</span>
            </h2>
          </div>
          <div className="hide">
            <h2>Animate</h2>
          </div>
          <p>Contact me for your ideas and let's give them life. </p>
          <button>Ping Me</button>
        </div>
        <div className="image">
          <img src={home1} alt="profile picture of Anthony" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
