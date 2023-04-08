import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  margin-top: 50px;
  height:100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://images.pexels.com/photos/3222686/pexels-photo-3222686.jpeg?auto=compress&cs=tinysrgb&w=1600");`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color:white;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  width:400px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  color:white;
  font-weight:700;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://mountainvibes.co.in/backend/admin/login', {
        email,
        password,
      });
  
      // If the login is successful, redirect to the admin panel
      if (response.data.success) {
        window.location.href = '/adminPannel';
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong. Please try again later.');
    }
  };
  

  return (
    <>
      <Container>
        <Title>Admin Login</Title>
        <FormContainer onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password:</Label>
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormGroup>
          <Button type="submit">Login</Button>
        </FormContainer>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Container>
    </>
  );
};

export default Admin;
