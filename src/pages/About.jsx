import React from "react";
import styled from "styled-components";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://images.pexels.com/photos/1405773/pexels-photo-1405773.jpeg?auto=compress&cs=tinysrgb&w=1600");

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
      <Wrapper>
        <AboutUs />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Reservation;
