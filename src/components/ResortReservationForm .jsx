import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  width: 350px;
  padding: 10px 30px;
  border-radius: 10px;
  overflow:none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);

`;

const Label = styled.label`
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ebe0e0!important;
  border-radius: 4px;
  outline:none;
`;
const Input1 = styled.input`
  padding: 8px;
  border: 1px solid #ebe0e0!important;
  border-radius: 4px;
  width:130px;
  margin-top:15px;
  outline:none;

`;
const TextArea = styled.textarea`
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ebe0e0!important;
  border-radius: 4px;
  outline:none;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #b59c84;
  color: white;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  font-size:1.80em;
  border-radius:4px;
  font-weight:600;

`;

const ResortReservationForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to submit the form data
  };

  return (
    <div>
    <h1 style={{textAlign:'center',paddingBottom:'30px',color:'#fff'}}>Reservation</h1>
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name *</Label>
      <Input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <Label htmlFor="phone">Phone *</Label>
      <Input
        type="tel"
        id="phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        required
      />

      <Label htmlFor="address">Address *</Label>
      <Input
        type="text"
        id="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        required
      />

      <Label htmlFor="checkin">Check-in *</Label>
      <Input
        type="date"
        id="checkin"
        value={checkIn}
        onChange={(event) => setCheckIn(event.target.value)}
        required
      />

      <Label htmlFor="checkout">Check-out *</Label>
      <Input
        type="date"
        id="checkout"
        value={checkOut}
        onChange={(event) => setCheckOut(event.target.value)}
        required
      />
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div style={{display:'flex',flexDirection:'column'}}>

        <Label htmlFor="adults">Adults *</Label>
        <Input1
          type="number"
          id="adults"
          value={adults}
          onChange={(event) => setAdults(event.target.value)}
          required
        />
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
        <Label htmlFor="children">Children *</Label>
        <Input1
          type="number"
          id="children"
          value={children}
          onChange={(event) => setChildren(event.target.value)}
          
        />
        </div>
      </div>

      <Label htmlFor="note">Note</Label>
      <TextArea
        id="note"
        value={note}
        onChange={(event) => setNote(event.target.value)}
      />

      <Button type="submit">Reserve </Button>
    </Form>
    </div>

  );
};

export default ResortReservationForm;
