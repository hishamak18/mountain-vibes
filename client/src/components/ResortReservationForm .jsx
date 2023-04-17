import React, { useState } from "react";
import styled from "styled-components";


const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  height: 700px;
  width: 400px;
  padding: 10px 30px;
  border-radius: 10px;
  overflow: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border: none;
  @media (max-width: 480px) {
    width: 300px;
    height: max-content;

  }
`;

const Label = styled.label`
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 15px 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 4px;
  outline: none;
  @media (max-width: 480px) {
    padding: 10px 5px;
  }
`;
const Input1 = styled.input`
  padding: 15px 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 4px;
  width: 130px;
  margin-top: 15px;
  outline: none;
  @media (max-width: 480px) {
    padding: 10px 5px;

  }
`;
const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 4px;
  outline: none;
  @media (max-width: 480px) {
 padding:5px;

  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #1a4a45;
  color: white;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  font-size: 1.8em;
  border-radius: 4px;
  font-weight: 600;
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

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const reservationData = {
      name,
      phone,
      address,
      checkIn,
      checkOut,
      adults,
      children,
      note
    };
  
    try {
      const response = await fetch('http://mountainvibes.co.in/backend/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservationData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit reservation.');
      }
     


      alert('Reservation submitted successfully.');
      setName('');
      setPhone('');
      setAddress('');
      setCheckIn('');
      setCheckOut('');
      setAdults('');
      setChildren('');
      setNote('');
    } catch (error) {
      console.error(error);
      alert('Failed to submit reservation.');
    }
  };
  

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h1
          style={{
            textAlign: "center",
            paddingBottom: "30px",
            color: "#1a4a45",
          }}
        >
          Reservation
        </h1>
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Label htmlFor="adults">Adults *</Label>
            <Input1
              type="number"
              id="adults"
              value={adults}
              onChange={(event) => setAdults(event.target.value)}
              required
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
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
