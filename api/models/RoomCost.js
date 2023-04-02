const mongoose = require('mongoose');

const roomCostSchema = new mongoose.Schema({
  cost: {
    type: Number,
    required: true,
  },
});

const RoomCost = mongoose.model('RoomCost', roomCostSchema);

module.exports = RoomCost;
