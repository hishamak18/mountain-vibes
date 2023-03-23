import React, { useState } from "react";
import styled from "styled-components";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Contact Us</FormTitle>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <TextArea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const FormTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 36px;
  font-weight: bold;
  color: #1a4a45;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  padding: 50px;
  @media (max-width: 480px) {
    width: 300px;
    height: max-content;

  }
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #1a4a45;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #1a4a45;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

export default ContactForm;
