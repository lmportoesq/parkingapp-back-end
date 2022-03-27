const mongoose = require('mongoose');

const ParkingSchema = new mongoose.Schema({
  name: String,
  idciudad: Number,
  addres: String,
  tel: Number,
  mean: Number,
  value: Number,
  coords: Object,
});

const Parking = mongoose.model('Parking', ParkingSchema);

module.exports = Parking;
