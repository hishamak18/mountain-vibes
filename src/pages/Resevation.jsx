import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ResortReservationForm from "../components/ResortReservationForm ";
import MobileMenu from "../components/MobileMenu"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://images.pexels.com/photos/6707629/pexels-photo-6707629.jpeg?auto=compress&cs=tinysrgb&w=1600");

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
