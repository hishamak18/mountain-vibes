require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = express.Router();


router.route('/login').post((req,res)=>{
  const email = req.body.email;
  const password = req.body.password;

  if (email == process.env.email && password == process.env.pass) {
    res.status(200).send('Login successful');
  } else {
    res.status(401).send('Invalid  email or password');
  }
})


module.exports = { router }