import React from "react";
import styled from "styled-components";

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
  font-size: 2.5em;
  background: rgba(0, 0, 0, 0.104);
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 18px;
`;

const Wrapper = styled.div`
  display: flex;
  box-shadow: 0 42px 68px -16px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 10px;
  font-family: sans-serif;
  position: absolute;
  top: 885px;
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
  outline:1px solid lightgrey;
    border-radius:4px;
  `;
  const InputNum = styled.input`
  width: 120px;
  outline:1px solid lightgrey;
  border-radius:4px;
  padding: 15px;
  border: none;
  border: 1px solid lightgrey;
`;
const Button = styled.button`
  background: grey;
    background:#f48220;
  border: none;
  height: max-content;
  width: 200px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.09em;
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
            <Button>Check Availabilty</Button>
          </div>
        </Checks>
      </Wrapper>
    </Container>
  );
};

export default MainPage;
