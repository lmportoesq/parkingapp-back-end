const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const PaymentsSchema = new mongoose.Schema({
  idBooking: {
    type: ObjectId,
    ref: 'bookings',
  },
  dataPayment: {
    type: Date,
    required: true,
    default: Date.now,
    uppercase: true,
    trim: true,
  },
  hourPayment: {
    type: String,
    required: true,
    trim: true,
  },
  valuePayment: {
    type: Number,
    require: true,
  },
  methodPayment: {
    type: String,
    require: true,
  },
  statusPayment: {
    type: Boolean,
    require: true,
    default: false,
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('Payments', PaymentsSchema);
