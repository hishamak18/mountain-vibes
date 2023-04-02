import React from "react";

import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu"


const Wrapper = styled.div`
  background-image: url("https://images.pexels.com/photos/2748757/pexels-photo-2748757.jpeg?auto=compress&cs=tinysrgb&w=1600");
  background-image: url(" https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1600 ");

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 480px) {
    background-position: -275px -10px;


  }
`;

const Contact = () => {
  return (
    <Wrapper>
        <Navbar />
        <MobileMenu/>
        <ContactForm />
      <Footer />
    </Wrapper>
  );
};

export default Contact;
