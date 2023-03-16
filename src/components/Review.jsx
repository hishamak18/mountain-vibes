import React from "react";
import styled from "styled-components";
import Image from "../img/hero.jpeg";
import { Outlet, Link } from "react-router-dom";


const Container = styled.div`
  width: 100%;
  height: 30vh;
  overflow: hidden;
  background-position: centre;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content:center;
  align-items:center;
  display:flex;
`;

const Tittle = styled.h1`
font-weight: 700!important;
font-family: "Playfair Display", times, serif;
margin-bottom: 0.5rem;
color:white;
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
  return <Container style={{ backgroundImage: `url(${Image})` }}>
    <div style={{display:'flex'}}>
    <Tittle>Reserve Yours!</Tittle>
    <Button><Link to='/Reservation'>Reserve Now</Link></Button>
    </div>
  </Container>;
};

export default Review;
