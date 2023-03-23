import React, { useState } from 'react';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(255 255 255 / 85%);
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
    z-index:1;
  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #333;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #acacac;
    }
  }
`;

const Burger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 576px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleBurgerClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Burger open={open} onClick={handleBurgerClick}>
        <div />
        <div />
        <div />
      </Burger>
      <StyledMenu open={open}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/Reservation">Reservation</a>
        <a href="/contact">Contact</a>
      </StyledMenu>
    </>
  );
};

export default Menu;
