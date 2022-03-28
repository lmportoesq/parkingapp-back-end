const mongoose = require('mongoose');

const ParkingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  idciudad: Number,
  addres: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  tel: Number,
  mean: Number,
  value: Number,
  coords: Object,
}, {
  timestamps: true,
  versionKey: false,
});

const Parking = mongoose.model('Parking', ParkingSchema);

module.exports = Parking;
