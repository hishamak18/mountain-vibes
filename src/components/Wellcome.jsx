import React from "react";
import styled from "styled-components";
import Image from '../img/hero.jpeg'


const Container = styled.div`
height:80vh;
width: 100%;
display:flex;
justify-content:center;
align-items:center;
background:#f2f4fb;
`
const P = styled.p`
color:grey;
padding-right:30px;
font-family: "Roboto", arial, sans-serif;
font-weight: 200;
font-size: 16px;
line-height: 1.8;
color: #6c757d;
`
const Tittle = styled.h1`
color:#f48220;
color:grey;
color:black;
font-size: 60px;
font-family: "Playfair Display", times, serif;
font-weight: 700;

`
const Img = styled.img`
background-repeat:no-repeat;
height:400px;
`

const Wellcome = ()=>{
    return (
        <Container>
            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}> 
            <Tittle>Welcome!</Tittle>
            <P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> 
                Quos accusantium quis est facere pariatur, vitae veritatis <br />
                non deserunt distinctio sunt. Similique obcaecati officiis <br />
                ratione doloribus in doloremque placeat vel at!</P>
            </div>
            <Img src={Image} />
        </Container>
    )
}
export default Wellcome