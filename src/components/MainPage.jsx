import React from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeaderMainPage = styled.h1`
  background: rgb(255 255 255 / 63%);
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 0px;
  font-size: 65px;
  font-family: "Playfair Display", times, serif;
  color: rgb(0 0 0 / 76%);
  line-height: 1;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  box-shadow: 0 42px 68px -16px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 10px;
  font-family: sans-serif;
  position: absolute;
  bottom: -60px;
`;
const Checks = styled.div`
  padding: 20px;
  display: flex;
  gap: 30px;
`;
const Input = styled.input`
  padding: 15px;
  border: none;
  width: 250px;
  border: 1px solid lightgrey;
  outline: 1px solid lightgrey;
  border-radius: 4px;
`;
const InputNum = styled.input`
  width: 120px;
  outline: 1px solid lightgrey;
  border-radius: 4px;
  padding: 15px;
  border: none;
  border: 1px solid lightgrey;
`;
const Button = styled.button`
  background: rgb(15 44 15);
  border: none;
  height: max-content;
  width: 200px;
  padding: 10px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  color: white;
  font-size: 1.09em;
  font-weight: 800;
  border-radius: 15px;
`;

const MainPage = () => {
  return (
    <Container>
      <HeaderMainPage> Best Place To Stay In Wayanad</HeaderMainPage>

      <Wrapper>
        <Checks>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ paddingBottom: "13px", paddingLeft: "1px" }}>
              Check In
            </h4>
            <Input type="date" />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ paddingBottom: "11px", paddingLeft: "1px" }}>
              Check Out
            </h4>
            <Input type="date" />
          </label>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ paddingBottom: "11px", paddingLeft: "1px" }}>
              Adults
            </h4>
            <InputNum type="number" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ paddingBottom: "11px", paddingLeft: "1px" }}>
              Childrens
            </h4>
            <InputNum type="number" />
          </div>
          <div>
            <h4 style={{ paddingBottom: "16px", color: "white" }}>hii</h4>
            <Button>
              {" "}
              <Link
                to="/AvailableRooms"
                style={{ color: "white", textDecoration: "none" }}
              >
                Check Availabilty
              </Link>
            </Button>
          </div>
        </Checks>
      </Wrapper>
    </Container>
  );
};

export default MainPage;
