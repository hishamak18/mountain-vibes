import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [formData, setFormData] = useState({
    roomType: '',
    availableRooms: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/rooms', formData);
      setFormData({ roomType: '', availableRooms: '' });
      alert('Room availability updated!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="roomType">Room Type:</label>
        <select name="roomType" id="roomType" onChange={handleChange}>
          <option value="">-- Select Room Type --</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
        </select>
        <br />
        <label htmlFor="availableRooms">Available Rooms:</label>
        <input
          type="number"
          name="availableRooms"
          id="availableRooms"
          min="0"
          onChange={handleChange}
          value={formData.availableRooms}
        />
        <br />
        <button type="submit">Update Availability</button>
      </form>
    </div>
  );
};

export default Admin;
