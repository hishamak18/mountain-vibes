import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import MainPage from "../components/MainPage";
import Navbar from "../components/Navbar";
import ResortReservationForm from "../components/ResortReservationForm ";
import Image from "../img/heroBlur.jpg";


const Wrapper = styled.div`
  background-position: centre;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display:flex;
`;




const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const Reservation = () => {
  return (
      <Container>
        <Navbar/>
        <Wrapper style={{backgroundImage:`url(${Image})`}}>
        <ResortReservationForm/>
                </Wrapper>
      <Footer />
    </Container>
    
  );
};

export default Reservation;
