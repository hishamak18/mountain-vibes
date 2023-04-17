import React from "react";
import styled, { keyframes } from "styled-components";
import { Outlet, Link } from "react-router-dom";
import $ from 'jquery';
import { useNavigate } from 'react-router';
import bgimg from '../img/bg.jpg';
import { useState } from 'react';
// import queryString from 'query-string';
import axios from 'axios';


  const moveBackground = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100% 0; }
`;
  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

  const Container = styled.div`
  height:100vh;
  width: 100%;
  display: flex;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bgimg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${moveBackground} 20s linear infinite;
  @media (max-width: 480px) {
    background-position:  top;

  }`;



const Wrapper = styled.div`
  animation: ${fadeIn} 2s ease;
  display: flex;
  box-shadow: 0 42px 68px -16px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 10px;
  font-family: sans-serif;
  position: absolute;
  bottom: -10px;
  @media (max-width: 480px) {
    background: rgb(255 255 255 / 63%);
    // margin-bottom:70px;
    position:absolute;
    bottom:35px;
  }
`;
const Checks = styled.form`
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
  background:#132a13;
  color:white;
  border: none;
  height: max-content;
  width: 200px;
  padding: 20px;
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
      // background:black;
      transform:scale(1.05);
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
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numAdults, setNumAdults] = useState(2);
  const [numChildren, setNumChildren] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);
    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    const numDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

    const response = await axios.get('/calculateprice');
    const roomPrice  = response.data;
    const numGuests = numAdults + numChildren;
    const extraCharges = (numGuests - 3) * 500;
    const totalPrice = (numDays * roomPrice) + extraCharges;

    navigate('/AvailRooms', { replace: true, state: { totalPrice }});
    
  };
  return (
    <Container >
      <>

      <Wrapper className="">
        <Checks onSubmit={handleSubmit}>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ paddingBottom: "13px", paddingLeft: "1px" }}>
              Check In
            </h4>
            <Input type="date"  value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)}/>
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ paddingBottom: "11px", paddingLeft: "1px" }}>
              Check Out
            </h4>
            <Input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
          </label>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ paddingBottom: "11px", paddingLeft: "1px" }}>
              Adults
            </h4>
            <InputNum type="number"  value={numAdults} onChange={(e) => setNumAdults(e.target.value)} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ paddingBottom: "11px", paddingLeft: "1px" }}>
              Childrens
            </h4>
            <InputNum type="number" value={numChildren} onChange={(e) => setNumChildren(e.target.value)}/>
          </div>
          <div>
            <h4 style={{ paddingBottom: "16px", color: "white" }}></h4>
            <Button type="submit">
              {" "}
              <Link
                to="/AvailableRooms"
                style={{ color: "white", textDecoration: "none" }}
              >
                Check Availablity
              </Link>
            </Button>
          </div>
        </Checks>
      </Wrapper>
      </>
    </Container>
  );
};

export default MainPage;
