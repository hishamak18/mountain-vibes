const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const reservationsRouter = require('./routes/reservations');
const adminRoute = require('./routes/adminRoute')
const RoomCost = require('./models/RoomCost'); 
const customerRoutes = require('./routes/costomerRoute');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5006;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Routes
app.use("/reservations", reservationsRouter);
app.use('/customers', customerRoutes);

app.post('/calculateprice', async (req, res) => {
  try {
    const { checkIn, checkOut, adults, children } = req.body; // retrieve the user input from the request body
    const roomCost = await RoomCost.findOne(); // get the room cost from the database
    const costPerNight = roomCost.cost; // get the cost per night from the room cost document

    // calculate the number of nights
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    // calculate the total price
    const totalPrice = (adults + children) * nights * costPerNight;

    res.json({ totalPrice }); // send the total price back to the client
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});





app.post('/admin/login', (req, res) => {
  const { email, password } = req.body;
  if (email === process.env.MAIL && password === process.env.PASSWORD) {
    res.status(200).json({ success: true });
  } else {
    // If the login is unsuccessful, send an error response
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

// Database connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const connections = mongoose.connection
connections.on('error', console.error.bind(console, 'MongoDB connection error:'))
connections.once('open', ()=>{
  console.log('DB connection successful')
})

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
