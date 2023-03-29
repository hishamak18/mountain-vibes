const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation.model');

router.route('/reserve').post((req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const address = req.body.address;
  const checkIn = Date.parse(req.body.checkIn);
  const checkOut = Date.parse(req.body.checkOut);
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

  newReservation.save()
    .then(() => res.json('Reservation added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
