import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://images.pexels.com/photos/2748757/pexels-photo-2748757.jpeg?auto=compress&cs=tinysrgb&w=1600");
  background-image: url(" https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1600 ");

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Contact = () => {
  return (
    <>
      <Wrapper>
        <Navbar />
        <ContactForm />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Contact;
