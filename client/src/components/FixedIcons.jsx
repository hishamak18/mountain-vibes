import React from 'react';
import styled from 'styled-components';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import $ from 'jquery';


const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  z-index:1;
  @media (max-width: 480px) {
    right:-20px;
  }
`;

const IconWrapper = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;



const phoneNumber = '9207993815';

const handleClickCall = () => {
  window.location.href = `tel:${phoneNumber}`;
};

const handleClickWhatsApp = () => {
  window.location.href = `https://wa.me/${phoneNumber}`;
};

const FixedIcons = () => {
$(document).ready(function() {
    // $('.my-icon').hide()
    $('.my-icon').animate({
        left:'50px'
    })
    
});

  return (
    <Wrapper>
      <IconWrapper className='my-icon' onClick={handleClickCall}>
        <CallIcon  style={{color:"blue",fontSize:'2.90em'}} alt="Call Icon" />
      </IconWrapper>
      <IconWrapper onClick={handleClickWhatsApp}>
        <WhatsAppIcon style={{color:"green",fontSize:'2.90em'}}  alt="WhatsApp Icon" />
      </IconWrapper>
    </Wrapper>
  );
};

export default FixedIcons;
