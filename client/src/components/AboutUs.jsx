import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  @media (max-width: 480px) {
    width: 350px;
    // height:700px;

  }
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
`;

const AboutText = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #555;
  margin-bottom: 30px;
  @media (max-width: 480px) {
  }
`;

const AboutList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const AboutListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const AboutListItemIcon = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  background-color: #333;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  margin-right: 15px;
`;

const AboutListItemText = styled.p`
  font-size: 20px;
  color: #555;
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <>
      <AboutTitle>About Us</AboutTitle>
      <AboutText>
                  "Welcome to MountainVibes, where adventure meets relaxation! Nestled in the heart of the mountains, <br /> our resort offers breathtaking views, cozy accommodations, <br /> and a wide range of activities to suit every taste. Whether you're seeking a peaceful escape or an adrenaline-filled adventure, <br /> our friendly staff is here to ensure that your stay is unforgettable. <br /> So sit back, relax, and let the mountain vibes take you away."

      </AboutText>
      </>
      <AboutList>
        <AboutListItem>
          <AboutListItemIcon>1</AboutListItemIcon>
          <AboutListItemText>
            breathtaking views
          </AboutListItemText>
        </AboutListItem>
        <AboutListItem>
          <AboutListItemIcon>2</AboutListItemIcon>
          <AboutListItemText>
            Gourmet dining options featuring the freshest ingredients homely food
          </AboutListItemText>
        </AboutListItem>
        <AboutListItem>
          <AboutListItemIcon>3</AboutListItemIcon>
          <AboutListItemText>
            A variety of outdoor activities, including hiking, water sports, and
            more
          </AboutListItemText>
        </AboutListItem>
      </AboutList>
    </AboutContainer>
  );
};

export default AboutUs;
