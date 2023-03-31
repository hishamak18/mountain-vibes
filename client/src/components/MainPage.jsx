import React from "react";
import styled, { keyframes } from "styled-components";
import { Outlet, Link } from "react-router-dom";
import $ from 'jquery';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: centre centre;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://images.pexels.com/photos/3222686/pexels-photo-3222686.jpeg?auto=compress&cs=tinysrgb&w=1600");

  @media (max-width: 480px) {

  }`;

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
  @media (max-width: 480px) {
    font-size: 25px;
    padding:10px 20px;
    position:absolute;
    top:60px;
    width:100%;

  }
`;

const Wrapper = styled.div`
  display: flex;
  box-shadow: 0 42px 68px -16px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 10px;
  font-family: sans-serif;
  position: absolute;
  bottom: -10px;
  @media (max-width: 480px) {
    background: rgb(255 255 255 / 63%);
    margin-bottom:70px;
    position:absolute;
    bottom:35px;
  }
`;
const Checks = styled.div`
  padding: 20px;
  display: flex;
  gap: 30px;
  @media (max-width: 480px) {
    display:flex;
    flex-direction:column;
    gap: 0px;
    padding: 10px;
    

  }
`;
const Input = styled.input`
  padding: 15px;
  border: none;
  width: 250px;
  border: 1px solid lightgrey;
  outline: 1px solid lightgrey;
  border-radius: 4px;
  @media (max-width: 480px) {
    padding: 8px;
  }

`;
const InputNum = styled.input`
  width: 120px;
  outline: 1px solid lightgrey;
  border-radius: 4px;
  padding: 15px;
  border: none;
  border: 1px solid lightgrey;
  @media (max-width: 480px) {
    padding: 8px;
    width: auto;
  }
`;
const Button = styled.button`
  background: #fff;
  border: none;
  height: max-content;
  width: 400px;
  padding: 30px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1.09em;
  font-weight: 800;
  border-radius: 15px;
  box-shadow: 0 42px 68px -16px rgba(0, 0, 0, 0.1);

    &:hover{
      background:black;
    }
  @media (max-width: 480px) {
    border-radius: 6px;
    // background: rgb(255 255 255 / 63%);
    margin-left:25px;
    width: 200px;
    padding: 10px;

  }
`;
const MainPage = () => {
 
  $(document).ready(function() {
  
    $('.fadeIn').hide()
    $('.fadeIn').fadeIn(2000)
    $('.fadeIn').css('transition ','all 2s ease ')
  });
  return (
    <Container>
      <>
      <HeaderMainPage className="text"> Best Place To Stay In Wayanad</HeaderMainPage>

      <Wrapper className="">
        {/* <Checks>
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
            <h4 style={{ paddingBottom: "16px", color: "white" }}></h4> */}
            <Button>
              {" "}
              <Link
                to="/AvailableRooms"
                style={{ color: "#293d29", textDecoration: "none" }}
              >
                Available Rooms
              </Link>
            </Button>
          {/* </div>
        </Checks> */}
      </Wrapper>
      </>
    </Container>
  );
};

export default MainPage;