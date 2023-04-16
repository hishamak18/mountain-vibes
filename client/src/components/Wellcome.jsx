import React from "react";
import styled from "styled-components";
import Image from "../img/hero.jpeg";
import $ from 'jquery';
import  { useRef, useEffect } from 'react';


const Container = styled.div`
  width: 100%;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f4fb;
  padding:50px 0px 50px 0px;
  @media (max-width: 480px) {
    flex-direction:column;    
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
    text-align:center;
    font-weight:300;
    padding:0 10px 10px 10px;
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
    text-align:center;
  }
`;
const Img = styled.img`
  background-repeat: no-repeat;
  height: 400px;

  @media (max-width: 480px) {
    // display: none;
    height:200px;
  }
`;

const Wellcome = () => {
  $(document).ready(function() {
  
    $('.fadeIn').hide()
    $('.fadeIn').fadeIn(2000)
    $('.fadeIn').css('transition ','all 2s ease ')
  });
  return (
    <Container>
      <div className="" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Tittle>Welcome!</Tittle>
        <P>
          "Welcome to MountainVibes, where adventure meets relaxation! Nestled in the heart of the mountains, <br /> our resort offers breathtaking views, cozy accommodations, <br /> and a wide range of activities to suit every taste. Whether you're seeking a peaceful escape or an adrenaline-filled adventure, <br /> our friendly staff is here to ensure that your stay is unforgettable. <br /> So sit back, relax, and let the mountain vibes take you away."
        </P>
      </div>
      <div className="">
      <Img src='https://lh3.googleusercontent.com/KjIHPrf0fBDKhayUZ8MiIOfo9DCiFjn0jQuqCFYbKfH2XKMjY1khVNG05BR3sdQX8nJ8sqgWtSraGQZmhVsXxNAwOZRtmZJijrHbFLAcrVd0ZyC6-AybL5kA2Iw2YiPpUVTnAnAS92HDMtQ2pFvUb446qxUCsn-HEVzlqRlcECwatn9kmofkAIPdKpx2ar6bf3hF2EeRfeLQTDmmP01XEhFocSxVD3TABMRJxq9b7iepBcQQSrAe7szhvKfGApLh6OK4pkXvC2WYZCglNJELK0s5SFtwth3yJk-BA8vlkuApkI1c8EBqb7mc8f5I9N0uLjvcgQoWRFmUJHTf4qJYoTS85DnOsuRRoJ8Gh0qLWJCNp8V71YK5QmAso-AavwVUslWNNguKpUwB9HIlVqf5xm6NtDjoyjnBwFm5Z6pPOxRyHgDrM6NSnNnYwxiATbGBFyQulerW62L_jszlTF3jOWNQWMKhdVu5HECDW6Jzq1osz50hV9OS9uVhf0F4sWRAsdXjWS070GJcD01SbmfsBeAtF6xZkozKgY5oKRnWiRxp9Gg6TI5BYli7GuV2cDw5h_DiwKMePtWInQ1vSRwZ45LvoWsmF-XAriOMQ8xr68ySEcZxFg3vBEoFN-IzbX6JvsmwQj52IiGq22QRll1My6IvJK1lnWFg8B3CyglgDn16CWF_MlnkmypJkJoanyHfdqUHt4YcVovRY2abo0B40e8Xp85y6fgoqnXziKsceCzwzCCQn5ahHdFwW-Q3PknifLpDYU_oQfS8X3-wR-lbxwM_4CjM9dz_0fm-lCRGfOve4-BXzVQd7haBGezF2YFVQdzmKC4gGj3Aw4S0Z0XjRip0AmP0VFGq882BGTQR305A83VI_BXGjtxpGbT4ciGYtxZsllQH9nh3OFPvKTwLoGY2mVyvF50A5Ft-lhNUnVxK9-Sk=w1330-h887-s-no?authuser=0'  />
      </div>
    </Container>
  );
};
export default Wellcome;
