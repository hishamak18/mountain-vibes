import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ResortReservationForm from "../components/ResortReservationForm";
import MobileMenu from "../components/MobileMenu"
import reservationimg from '../img/reservation.svg';


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${reservationimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const Reservation = () => {
  return (
    <Container>
      <Navbar />
      <MobileMenu/>
      <Wrapper>
        <ResortReservationForm />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Reservation;
