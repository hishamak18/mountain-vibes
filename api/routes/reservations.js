const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const Reservation = require('../models/reservation.model');

router.route('/reserve').post((req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const address = req.body.address;
  const checkIn = new Date(req.body.checkOut).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
    const checkOut = new Date(req.body.checkOut).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
    const adults = Number(req.body.adults);
  const children = Number(req.body.children);
  const note = req.body.note;

  const newReservation = new Reservation({
    name,
    phone,
    address,
    checkIn,
    checkOut,
    adults,
    children,
    note
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mhakdesigns@gmail.com', // replace with your email address
      pass: 'sfcytlegxmufeejf' // replace with your email password
    }
  });

  const mailOptions = {
    from: 'mhakdesigns@gmail.com',
    to: 'mountainvibesresort@gmail.com', // replace with admin email address
    subject: 'New Reservation',
    text: `A new reservation has been made:\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nAdults: ${adults}\nChildren: ${children}\nNote: ${note}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  newReservation.save()
    .then(() => res.json('Reservation added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
