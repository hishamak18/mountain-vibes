import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import MainPage from "../components/MainPage";
import Navbar from "../components/Navbar";
import Photos from "../components/Photos";
import Review from "../components/Review";
import RoomsAndSuits from "../components/RoomsAndSuits";
import Wellcome from "../components/Wellcome";
import Image from "../img/hero.jpg";

const Wrapper = styled.div`
  background-position: centre;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://images.pexels.com/photos/3222686/pexels-photo-3222686.jpeg?auto=compress&cs=tinysrgb&w=1600");
`;
const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Navbar />
        <MainPage />
      </Wrapper>
      <Wellcome />
      <Photos />
      <Review />
      <Footer />
    </Container>
  );
};

export default Home;
