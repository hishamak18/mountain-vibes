import React from "react";
import styled from "styled-components";
import AvailRooms from "../components/AvailRooms";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Review from "../components/Review";


const Container = styled.div`
    width:100%;
    // height:100vh;
    display:flex;
`
const Tittle = styled.h1`
    color:black;
    z-index:1;
`


const AvailableRooms = ()=>{
    return (
        <div>
            <NavBar/>
           <Container>
           <AvailRooms/>
           </Container>
           <Review/>
           <Footer/>
        </div>
        
    )

}

export default AvailableRooms