import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import {RoomImg} from "../data";
import "../style.css";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  @media (max-width: 480px) {
    height: 30vh;
  }
`;
const Arrow = styled.div`
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 0.204);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  
  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
 
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  @media (max-width: 480px) {
    padding-top:50px;
    height:auto;
  }
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
  height: 100%;
  flex: 1;
  @media (max-width: 480px) {
    align-items: unset;
    
  }
`;

const Tittle = styled.h1`
  font-size: 70px;
  text-align: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.204);
  color: white;
`;

const Image = styled.img`
  height: 60%;
  border-radius: 8px;
  @media (max-width: 480px) {
    height: 20%;
    border-radius: 4px;

  }
`;
const TittleH = styled.h1`
  font-size: 70px;
  text-align: center;
  font-size: 60px;
  font-family: "Playfair Display", times, serif;
  font-weight: 700;
  @media (max-width: 480px) {
    display:none;
  }
`;
const Photos = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {RoomImg.map((item) => {
            return (
              <Slide>
                <TittleH>Photos</TittleH>
                <div>
                  <ImgContainer>
                    <Image src={item.img} />

                  </ImgContainer>
                </div>
              </Slide>
            );
          })}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined style={{ fontSize: "1.5em" }} />
        </Arrow>
      </Container>
    </div>
  );
};

export default Photos;
