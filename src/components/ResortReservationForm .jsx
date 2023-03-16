import { Container } from "@mui/system";
import React, { useState } from "react";
import styled from "styled-components";

const Containers = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;
const Form = styled.form`
  border: 1px solid lightgrey;
  border-radius: 15px;
  padding: 20px;
  background: white;
`;
const Input = styled.input`
  // padding: 0.375rem 0.5rem;
  // font-size: 2rem;
  line-height: 2.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 3px solid #ced4da;
  border-radius: 0.25rem;
  outline: none;
  padding:10px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const WrapUp = styled.div`
  display: flex;
  flex-direction: ;
  gap: 20px;
`;

const Label = styled.label`
  font-family: "Roboto", arial, sans-serif;
  font-size: 20px;
  line-height: 2.8;
  font-weight: 700;
`;

const Button = styled.button`
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
  padding-right: 3rem !important;
  padding-left: 3rem !important;
  font-weight: 700 !important;
  color: white;
  background-color: #ffba5a;
  font-size: 1.9em;
  justify-content: center;
  display: flex;
  border: none;
  border-radius: 12px;
`;
const Address = styled.div`
  font-family: "Roboto", arial, sans-serif;
  font-weight: 200;
  font-size: 16px;
  line-height: 1.8;
  text-align: left;
  lex-wrap: wrap;
`;

const Adrs = styled.h3`
  color: white;
`;

const Desc = styled.span`
  font-family: "Playfair Display", times, serif;
  font-size: 30px;
`;

const HeaderMainPage = styled.h1`
  font-size: 2.5em;
  background: rgba(0, 0, 0, 0.104);
  color: black;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 18px;
`;
const ResortReservationForm = () => {
  return (
    <Containers>
        {/* <HeaderMainPage>Reservation</HeaderMainPage> */}

      <Wrapper>
        <Form>
          <WrapUp>
            <InputWrapper>
              <Label>Name</Label>
              <Input style={{width:'307px'}} type={"text"}></Input>
            </InputWrapper>
            <InputWrapper>
              <Label>Phone</Label>
              <Input style={{width:'307px'}} type={"tel"}></Input>
            </InputWrapper>
          </WrapUp>
          <InputWrapper>
            <Label>Email</Label>
            <Input type={"email"}></Input>
          </InputWrapper>
          <WrapUp>
            <InputWrapper>
              <Label>Date Check In</Label>
              <Input
                style={{ padding: "10px 100px 0 80px" }}
                type={"date"}
              ></Input>
            </InputWrapper>
            <InputWrapper>
              <Label>Date Check Out</Label>
              <Input style={{ padding: "10px 95px 0 90px" }} type={"date"}></Input>
            </InputWrapper>
          </WrapUp>
          <WrapUp>
            <InputWrapper>
              <Label>Adults</Label>
              <Input style={{width:'307px'}} type={"number"}></Input>
            </InputWrapper>
            <InputWrapper>
              <Label>Childrens</Label>
              <Input style={{width:'307px'}} type={"number"}></Input>
            </InputWrapper>
          </WrapUp>
          <InputWrapper>
            <Label>Notes</Label>
            <Input type={"text"}></Input>
          </InputWrapper>
          <WrapUp style={{padding: "10px" }}>
            <Button>Reserve Now</Button>
          </WrapUp>
        </Form>
        <Address>
          <Adrs>Address:</Adrs>
          <Desc>
            Kerala Wayanad , <br /> Padinjarathara , <br /> Kuttiyamvayal <br />
            673575
          </Desc>
          <Adrs>Phone:</Adrs>
          <Desc>+91 9876543210</Desc>
          <Adrs>Email:</Adrs>
          <Desc>mountainvibesresort@gmail.com</Desc>
        </Address>
      </Wrapper>
    </Containers>
  );
};

export default ResortReservationForm;
