import React from "react";
import styled from "styled-components";

const CARD = styled.div`
  height: calc(8rem + 12vw);
  width: calc(9rem + 12vw);
  border-radius: 20px;
  position: relative;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media only screen and (max-width: 40em) {
    width: 300px;
    height: 350px;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const TEXT = styled.h4`
  padding: 0 calc(1rem + 1vw);
  color: grey;
  text-align: center;
  font-size: calc(0.6rem + 0.5vw);
`;

const NAME = styled.h3`
  padding-top: 1rem;
  font-size: calc(0.5rem + 1vw);
  @media only screen and (max-width: 40em) {
    font-size: 1em;
    padding-bottom: 0.4rem;
  }
`;

const Card = ({ name, text, image }) => {
  return (
    <CARD>
      <Image img={image} width="400" height="400" />
    </CARD>
  );
};

export default Card;
