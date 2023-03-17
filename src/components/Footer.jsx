import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background: #403a3a;
  color: white;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  // background:red;
`;
const Logo = styled.h1`
  cursor: pointer;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Social = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 193px;

`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  
`;
const Tittle = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  flex-direction: column;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MountainVibes.</Logo>
        <Desc>
        Welcome to our beautiful resort, where luxury and relaxation meet. Our
        resort is located in a serene and picturesque setting,
        <br />
        surrounded by lush greenery and crystal clear waters. We offer a wide
        range of amenities and activities <br />
        to ensure that your stay with us is nothing short of exceptional.
        </Desc>
        <Social>
          <SocialIcon color="3B5999">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
        </Social>
      </Left>
      <Center>
        <Tittle>Useful Links</Tittle>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem> Reservation</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Center>
      <Right>
        <Tittle>Contact</Tittle>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} className="icn" />
          India , Kerala
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} className="icn" />
          +91 9876543210
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} className="icn" />
          mountainvibesresort@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
