import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ResortReservationForm from "../components/ResortReservationForm";
import MobileMenu from "../components/MobileMenu";
import buildings from "../img/buildings.svg";
import bed from "../img/bed.svg";
import reservationimg from '../img/reservation.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: url(${bed});
  @media (max-width: 480px) {
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const Img = styled.img`
display: none;
  @media (max-width: 480px) {
  }
`;

const Reservation = () => {
  return (
    <Container>
      <Navbar />
      <MobileMenu />
      <Wrapper>
        <Img src={buildings} />
        <ResortReservationForm />
        <Img src={bed} />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Reservation;
