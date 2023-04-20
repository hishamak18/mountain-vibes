import React from "react";

import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu"
import contactimg from '../img/contact.svg';



const Wrapper = styled.div`
<<<<<<< HEAD
  background-image: url(${contactimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 480px) {
    background-position: -275px -10px;
    padding-top:100px;


  }
`;

const Contact = () => {
=======
  display: flex;
  align-items: center;
  justify-content: center;
  `;
  const Container = styled.div`
  background-image: url(${reservationimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100vh;
`;
const Reservation = () => {
>>>>>>> origin/main
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
