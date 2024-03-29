import React from "react";
import styled from "styled-components";
import { RoomImg } from "../data";
import { useLocation } from "react-router-dom";
import Card from "./Card";

const Container = styled.div`
  padding-top: 250px;
  padding-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 480px) {
    justify-content: space-between;
  }
`;
const Wrap = styled.div`
  display: flex;
  justifycontent: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Tittle = styled.h1`
  text-align: center;
  font-size: 60px;
  font-family: "Playfair Display", times, serif;
  font-weight: 700;
  @media (max-width: 480px) {
    font-size: 20px;
    margin-top: 50px;
    padding-bottom: 20px;
  }
`;

const P = styled.p`
  color: grey;
  padding-right: 30px;
  font-family: "Roboto", arial, sans-serif;
  font-weight: 200;
  font-size: 16px;
  line-height: 1.8;
  color: #6c757d;
  text-align: Center;
  font-family: "Roboto", arial, sans-serif;
  font-weight: 200;
  font-size: 16px;
  line-height: 1.8;
  padding-bottom: 20px;
  @media (max-width: 480px) {
    display: none;
  }
`;
const Rooms = styled.div``;
const Image = styled.img`
  height: 300px;
  @media (max-width: 480px) {
    height: 280px;
    padding: 10px;
  }
`;
const RoomTittle = styled.h2`
text-align:center;
font-size: 2rem;
color: #000;
font-family: "Playfair Display", times, serif;
@media (max-width: 480px) {
  font-size: 1rem;

}

}
`;
const RoomsRate = styled.span`
  color: grey;
  font-family: "Roboto", arial, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.8;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.2;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
`;

const AvailRooms = () => {
  const location = useLocation();
  var totalPrice = location.state && location.state.totalPrice;
  console.log(totalPrice);
  return (
    <Container>
      <div>
        <Tittle>Available Rooms For You</Tittle>
        <P>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
          Ea veniam blanditiis repellat! Ea quae impedit, <br />
          totam, voluptate eveniet quisquam possimus ipsam eius praesentium
          <br />
          vero voluptates est nihil consequatur sapiente fugiat?
        </P>
      </div>
      <Wrap>
        {RoomImg.map((item) => {
          return <Card image={item.img} key={item.tittle} />;
        })}
      </Wrap>
    </Container>
  );
};

export default AvailRooms;
