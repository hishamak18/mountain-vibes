import React from "react";
import styled from "styled-components";
import Image from "../img/hero.jpg";
import { Outlet, Link } from "react-router-dom";


const Container = styled.div`
  width: 100%;
  height: 30vh;
  overflow: hidden;
  background:grey;
  justify-content:center;
  align-items:center;
  display:flex;
  padding-top:50px;
`;

const Tittle = styled.h1`
font-weight: 700!important;
font-family: "Playfair Display", times, serif;
margin-bottom: 0.5rem;
color:rgb(64, 58, 58);
padding-top:20px;
padding-right:30px;
font-size:2.90em;
`

const Button = styled.button`
    border-radius:25px;
    border:none;
    background:white;
    color:grey;
    padding:20px 30px 20px 30px;
    font-size:2.05em;
    font-weight:bold;
`

const Review = () => {
  return <Container>
    <div style={{display:'flex'}}>
    <Tittle>Reserve Yours!</Tittle>
    <Button><Link to='/Reservation' style={{color:'rgb(64, 58, 58)',textDecoration:'none'}}>Reserve Now</Link></Button>
    </div>
  </Container>;
};

export default Review;
