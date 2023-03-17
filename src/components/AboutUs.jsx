import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  background-color: #f7f7f7;
  padding: 50px;
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
      <AboutTitle>About Us</AboutTitle>
      <AboutText>
        Welcome to our beautiful resort, where luxury and relaxation meet. Our
        resort is located in a serene and picturesque setting,
        <br />
        surrounded by lush greenery and crystal clear waters. We offer a wide
        range of amenities and activities <br />
        to ensure that your stay with us is nothing short of exceptional.
      </AboutText>
      <AboutList>
        <AboutListItem>
          <AboutListItemIcon>1</AboutListItemIcon>
          <AboutListItemText>
            Five-star accommodations with breathtaking views
          </AboutListItemText>
        </AboutListItem>
        <AboutListItem>
          <AboutListItemIcon>2</AboutListItemIcon>
          <AboutListItemText>
            Gourmet dining options featuring the freshest ingredients
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
