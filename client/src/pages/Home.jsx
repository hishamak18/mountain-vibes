import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import MainPage from "../components/MainPage";
import Navbar from "../components/Navbar";
import Photos from "../components/Photos";
import Review from "../components/Review";
import ImgSlide from "../components/ImgSlide";
import Wellcome from "../components/Wellcome";
import { images } from "../data";
import MobileMenu from "../components/MobileMenu";
import Admin from "./Admin";
import FixedIcons from "../components/FixedIcons";
import SignIn from "../pages/SignIn";

const Wrapper = styled.div`
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <FixedIcons />
      <Wrapper>
        <MobileMenu />
        <Navbar />
        <MainPage />
      </Wrapper>
      <Wellcome />
      {/* <Photos /> */}
      <ImgSlide />
      <Review />
      <Footer />
    </Container>
  );
};

export default Home;
