import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import MainPage from "../components/MainPage";
import Navbar from "../components/Navbar";
import Photos from "../components/Photos";
import Review from "../components/Review";
import RoomsAndSuits from "../components/RoomsAndSuits";
import Wellcome from "../components/Wellcome";
import {images} from "../data";

const Wrapper = styled.div`
 
  @media (max-width: 480px) {
    width:100%;
  }
`;
const Container = styled.div`

`

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Navbar />
        <MainPage />
      </Wrapper>
      <Wellcome />
      <Photos/>
      <Review />
      <Footer />
    </Container>
  );
};

export default Home;
