import React, { useState, useEffect } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";
import {images} from "../data";
import "../style.css";

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  @media (max-width: 480px) {
    height: 50vh;

  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  @media (max-width: 480px) {
    height: 50vh;

  }
`;

const Image = styled.img`
  height: 60%;
  border-radius: 8px;
  @media (max-width: 480px) {
    border-radius: 4px;

  }
`;

const TittleH = styled.h1`
  font-size: 70px;
  text-align: center;
  font-size: 60px;
  font-family: "Playfair Display", times, serif;
  font-weight: 700;
`;

const Photos = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(slideIndex === images.length - 1 ? 0 : slideIndex + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
      <Container>
    <div>
        <Wrapper slideIndex={slideIndex}>
          {images.map((item) => {
            return (
              <Slide>
                <div>
                  <ImgContainer>
                    <Image src={item.src} />
                  </ImgContainer>
                </div>
              </Slide>
            );
          })}
        </Wrapper>

    </div>
      </Container>
  );
};

export default Photos;
