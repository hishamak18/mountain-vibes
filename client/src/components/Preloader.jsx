import React from 'react';
import styled, { keyframes } from 'styled-components';

const Preloader = () => {
  return (
    <Wrapper>
      <Spinner />
      <Text>Welcome to MountainVibes Resort</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #fff;
  border-top-color: #bfbfbf;
  border-radius: 50%;
  animation: ${rotate} 1s ease-in-out infinite;
`;

const Text = styled.h2`
  margin-left: 20px;
  color: #bfbfbf;
  font-size: 36px;
  font-weight: 700;
`;

export default Preloader;
