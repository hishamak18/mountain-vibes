import React from "react";
import styled from "styled-components";
import RoomImg from "../data";

const Container = styled.div`
  padding-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Tittle = styled.h1`
  text-align: center;
  font-size: 60px;
  font-family: "Playfair Display", times, serif;
  font-weight: 700;
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
`;
const Rooms = styled.div``;
const Image = styled.img`
  height: 300px;
`;
const RoomTittle = styled.h2`
text-align:center;
font-size: 2rem;
color: #000;
font-family: "Playfair Display", times, serif;

}
`;
const RoomsRate = styled.span`
  color: grey;
  font-family: "Roboto", arial, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.8;
  text-align: center;
`;

const AvailRooms = () => {
  return (
    <Container>
      <div>
        <Tittle>Available Rooms For You</Tittle>
        <P>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
          Ea veniam blanditiis repellat! Ea quae impedit, <br />
          totam, voluptate eveniet quisquam possimus ipsam eius praesentium{" "}
          <br />
          vero voluptates est nihil consequatur sapiente fugiat?
        </P>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {RoomImg.map((item) => {
          return (
            <Rooms>
              <Image src={item.img} />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <RoomTittle>{item.tittle}</RoomTittle>
                <RoomsRate>{item.price}</RoomsRate>
              </div>
            </Rooms>
          );
        })}
      </div>
    </Container>
  );
};
export default AvailRooms;
