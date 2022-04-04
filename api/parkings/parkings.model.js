const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const ParkingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  user: {
    type: ObjectId,
    ref: 'users',
  },
  cityName: {
    type: String,
    require: true,
    trim: true,
    uppercase: true,
  },
  addres: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
  },
  position: {
    latitude: {
      type: Number,
      require: true,
    },
    longitude: {
      type: Number,
      require: true,
    },
  },
  openTime: {
    type: String,
    require: true,
  },
  closeTime: {
    type: String,
    require: true,
  },
  hourValue: {
    type: Number,
    required: true,
  },
  totalPlaces: {
    type: Number,
    required: true,
  },
  busyPlaces: {
    type: Number,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Parking = mongoose.model('Parking', ParkingSchema);

module.exports = Parking;
