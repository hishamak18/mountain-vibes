import React from "react";
import styled from "styled-components";
import Logos from "../img/logoHero.png";
import { Outlet, Link } from "react-router-dom";

const Container = styled.div`
  // color:white;
  height: 60px;
  background: transparent;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
`;
const Wrapper = styled.div`
  box-shadow: 0 24px 20px -16px rgba(0, 0, 0, 0.1);
  background-color: white;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  // overflow:hidden;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  top: 0;
`;
const Centre = styled.div`
  float: left;
  flex: 1;
  display: flex;
`;
const Middle = styled.h1`
  flex: 1;
  font-family: fantacy;
  color: #f48220;
  color: #403a3a;
  font-size: 1.6em;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;
const Logo = styled.img`
  height: 60px;
`;
const Right = styled.div`
  float: right;
`;
const LiandH = styled.div``;
const Ul = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  list-style: none;
`;
const Li = styled.li``;
const A = styled.a`
  text-decoration: none;
  color: grey;
  font-size: 1.2em;
  &:hover {
    transform: scale(1.1);
    color: blue;
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Centre>
          <Logo src={Logos} />
        </Centre>
        <Middle>Mountain Vibes.</Middle>
        <Right>
          <LiandH>
            <Ul>
              <Li>
                <Link
                  style={{
                    color: "rgb(15 44 15)",
                    textDecoration: "none",
                    fontSize: "1.2em",
                    fontWeight: "bold",
                  }}
                  to="/"
                >
                  Home
                </Link>
              </Li>
              <Li>
                <Link
                  style={{
                    color: "rgb(15 44 15)",
                    textDecoration: "none",
                    fontSize: "1.2em",
                    fontWeight: "bold",
                  }}
                  to="/About"
                >
                  About
                </Link>
              </Li>
              <Li>
                <Link
                  style={{
                    color: "rgb(15 44 15)",
                    textDecoration: "none",
                    fontSize: "1.2em",
                    fontWeight: "bold",
                  }}
                  to="/Reservation"
                >
                  Reservation
                </Link>
              </Li>
              <Li>
                <Link
                  style={{
                    color: "rgb(15 44 15)",
                    textDecoration: "none",
                    fontSize: "1.2em",
                    fontWeight: "bold",
                  }}
                  to="/Contact"
                >
                  Contact
                </Link>
              </Li>
            </Ul>
            <Outlet />
          </LiandH>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default NavBar;
