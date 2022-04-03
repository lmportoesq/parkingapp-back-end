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
  position: [{
    length: {
      type: Number,
      require: true,
    },
    latitude: {
      type: Number,
      require: true,
    },
  }],
  openTime: {
    type: Number,
    require: true,
  },
  closeTime: {
    type: Number,
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
