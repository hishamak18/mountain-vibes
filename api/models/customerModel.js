const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  checkInDate: {
    type: Date,
    required: true
  },
  checkOutDate: {
    type: Date,
    required: true
  },
  adult: {
    type: Number,
    required: true
  }
});

const Customer = mongoose.model('reservations', customerSchema);

module.exports = Customer;
