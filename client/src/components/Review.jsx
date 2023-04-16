import React from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 20vh;
  overflow: hidden;
  // background: grey;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 50px;
  // background-image: url("https://images.pexels.com/photos/62693/pexels-photo-62693.jpeg?auto=compress&cs=tinysrgb&w=1600");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 480px) {
    flex-direction:column;
    width:100%;
    height: 20vh;
    margin-top:50px;
  }
`;

const Tittle = styled.h1`
  font-weight: 700 !important;
  font-family: "Playfair Display", times, serif;
  margin-bottom: 0.5rem;
  color: grey;
  padding-top: 20px;
  padding-right: 30px;
  font-size: 2.9em;
`;

const Button = styled.button`
  border-radius: 25px;
  border: none;
  background: #132a13;
  color: white;
  padding: 20px 30px 20px 30px;
  font-size: 2.05em;
  font-weight: bold;
  box-shadow: rgba(0, 0, -22, 5.1) 3px 31px 92px -31px;

  @media (max-width: 480px) {
    border-radius: 10px;
    padding: 10px 20px 10px 20px;
    font-size: 1.15em;
  }
`;

const Review = () => {
  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* <Tittle>Reserve Yours!</Tittle> */}
        <Button>
          <Link
            to="/Reservation"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontFamily: "Playfair Display, times, serif",
              fontWeight: "700!important",
            }}
          >
            Reserve Yours Now
          </Link>
        </Button>
      </div>
    </Container>
  );
};

export default Review;
