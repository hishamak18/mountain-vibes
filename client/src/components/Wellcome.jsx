import React from "react";
import styled from "styled-components";
import Image from "../img/hero.jpeg";
import $ from "jquery";
import { useRef, useEffect } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f4fb;
  padding: 50px 0px 50px 0px;
  @media (max-width: 480px) {
    height: 50vh;
  }
`;
const P = styled.p`
  color: grey;
  padding-right: 30px;
  font-family: "Roboto", arial, sans-serif;
  font-weight: 200;
  font-size: 16px;
  line-height: 1.8;
  color: black;
  @media (max-width: 480px) {
    text-align: center;
    font-weight: 300;
    padding: 0 10px 10px 10px;
    font-size: 14px;
  }
`;
const Tittle = styled.h1`
  color: #f48220;
  color: grey;
  color: black;
  font-size: 60px;
  font-family: "Playfair Display", times, serif;
  font-weight: 700;
  @media (max-width: 480px) {
    font-size: 40px;
    text-align: center;
  }
`;
const Img = styled.img`
  background-repeat: no-repeat;
  height: 400px;

  @media (max-width: 480px) {
    // display: none;
    height: 200px;
  }
`;

const Wellcome = () => {
  $(document).ready(function () {
    $(".fadeIn").hide();
    $(".fadeIn").fadeIn(2000);
    $(".fadeIn").css("transition ", "all 2s ease ");
  });
  return (
    <Container className="hieght50vh">
      <div className="welcCard">
        <div
          className=""
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Tittle>Welcome!</Tittle>
          <P className="para">
            "Welcome to MountainVibes, where adventure meets relaxation! Nestled
            in the heart of the mountains, our resort offers breathtaking views,
            cozy accommodations, and a wide range of activities to suit every
            taste. Whether you're seeking a peaceful escape or an
            adrenaline-filled adventure, our friendly staff is here to ensure
            that your stay is unforgettable.So sit back, relax, and let the
            mountain vibes take you away."
          </P>
        </div>
        <div className="imgWelc">
          <Img src="https://live.staticflickr.com/65535/52823496665_2353abbf1d_w.jpg" />
        </div>
      </div>
    </Container>
  );
};
export default Wellcome;
