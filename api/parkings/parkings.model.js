const mongoose = require('mongoose');

const ParkingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    unique: false,
  },
  idciudad: {
    type: Number,
  },
  addres: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  tel: {
    type: Number,
    required: true,
    trim: true,
  },
  mean: {
    type: Number,
  },
  value: {
    type: Number,
    required: true,
    trim: true,
  },
  coords: Object,
}, {
  timestamps: true,
  versionKey: false,
});

const Parking = mongoose.model('Parking', ParkingSchema);

module.exports = Parking;
