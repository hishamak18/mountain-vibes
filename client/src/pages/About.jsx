import React from "react";
import styled from "styled-components";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu"
import aboutimg from '../img/aboutus.svg';



const Wrapper = styled.div`
  height: 100vh;
  padding:20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${aboutimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  @media (max-width: 480px) {
    margin-top:60px;

  }
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
        <AboutUs />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Reservation;
