import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
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

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;

  th,
  td {
    text-align: left;
    padding: 8px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #007bff;
    color: #fff;
  }
`;
const TableContainer =styled.div``

const AdminPanel = () => {
  const [price, setPrice] = useState('');
  const [availableRooms, setAvailableRooms] = useState('');

  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');
  const [rooms, setRooms] = useState('');


  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://mountainvibes.co.in/backend/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch customers');
      }
    };

    fetchCustomers();
  }, []);

  const handlePriceUpdate = async (event) => {
    event.preventDefault();

    try {
      await axios.put('http://mountainvibes.co.in/backend/rooms/price', {
        price,
      });

      setPrice('');
      alert('Price updated successfully!');
    } catch (error) {
      console.error(error);
      setError('Failed to update price');
    }
  };

  const handleRoomsUpdate = async (event) => {
    event.preventDefault();

    try {
      await axios.put('http://mountainvibes.co.in/backend/rooms/availability', {
        availableRooms,
      });

      setAvailableRooms('');
      alert('Available rooms updated successfully!');
    } catch (error) {
      console.error(error);
      setError('Failed to update available rooms');
    }
  };

  return (
    <Container>
      <Title>Admin Panel</Title>
      <FormContainer onSubmit={handlePriceUpdate}>
        <FormGroup>
          <Label>Price:</Label>
          <Input
            type="text"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </FormGroup>
        <Button type="submit">Update Price</Button>
</FormContainer>
<FormContainer onSubmit={handleRoomsUpdate}>
<FormGroup>
<Label>Available Rooms:</Label>
<Input
type="text"
value={rooms}
onChange={(event) => setRooms(event.target.value)}
/>
</FormGroup>
<Button type="submit">Update Available Rooms</Button>
</FormContainer>
<TableContainer>
<Table>
<thead>
<tr>
<th>Customer Name</th>
<th>Phone No</th>
<th>Address</th>
<th>Check-In Date</th>
<th>Check-Out Date</th>
<th>No Of Adults</th>
<th>No Of Childrens</th>
<th>Notes</th>


</tr>
</thead>
<tbody>
{customers.map((customer) => (
<tr key={customer.id}>
<td>{customer.name}</td>
<td>{customer.phone}</td>
<td>{customer.address}</td>
<td>{new Date(customer.checkIn).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</td>
<td>{new Date(customer.checkOut).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</td>
<td>{customer.adults}</td>
<td>{customer.children}</td>
<td>{customer.note}</td>


</tr>
))}
</tbody>
</Table>
</TableContainer>
</Container>
);
};

export default AdminPanel;
